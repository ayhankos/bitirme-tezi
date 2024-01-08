const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const crypto = require("crypto");
const cors = require("cors");

const app = express();
const port = 3001; // Backend'i 3001 portunda çalıştırın

// Middleware'leri kullan
app.use(
  cors({
    origin: "http://localhost:3000", // React uygulamasının çalıştığı adres
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
    optionsSuccessStatus: 204,
  })
);
app.use(bodyParser.json());

// MySQL bağlantısı
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "fenerbahce41",
  database: "BitirmeTezi",
});

db.connect((err) => {
  if (err) {
    console.error("MySQL connection failed: " + err.stack);
    return;
  }
  console.log("Connected to MySQL database");
});

// Kullanıcı kaydı
app.post("/register", (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    // Şifreyi hashle
    const hashedPassword = crypto
      .createHash("sha256")
      .update(password)
      .digest("hex");

    db.query(
      "INSERT INTO users (first_name, last_name, email, password) VALUES (?, ?, ?, ?)",
      [firstName, lastName, email, hashedPassword],
      (err, result) => {
        if (err) {
          console.error("Error executing MySQL query:", err);
          return res
            .status(500)
            .json({ success: false, message: "Internal Server Error" });
        }

        res.json({ success: true, message: "Registration successful" });
      }
    );
  } catch (error) {
    console.error("Error in registration:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

// Kullanıcı girişi kontrolü
app.post("/login", (req, res) => {
  try {
    const { email, password } = req.body;

    // Şifreyi hashle
    const hashedPassword = crypto
      .createHash("sha256")
      .update(password)
      .digest("hex");

    db.query(
      "SELECT * FROM users WHERE email = ? AND password = ?",
      [email, hashedPassword],
      (err, results) => {
        if (err) {
          console.error("Error executing MySQL query: " + err.stack);
          return res
            .status(500)
            .json({ success: false, message: "Internal Server Error" });
        }

        if (results.length > 0) {
          res.json({ success: true, message: "Login successful" });
        } else {
          res
            .status(401)
            .json({ success: false, message: "Invalid credentials" });
        }
      }
    );
  } catch (error) {
    console.error("Error in login:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

// Server'ı dinle
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
