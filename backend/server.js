const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const cors = require("cors");

const app = express();
const port = 3001;

// Middleware'leri kullan
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
    optionsSuccessStatus: 204,
    allowedHeaders: ["Content-Type", "Authorization"],
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

app.post("/register", (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    // Şifreyi hashleme
    bcrypt.hash(password, 10, (hashErr, hashedPassword) => {
      if (hashErr) {
        console.error("Error hashing password:", hashErr);
        return res.status(500).json({
          success: false,
          message: "Internal Server Error",
          error: hashErr.message,
        });
      }

      db.query(
        "INSERT INTO users (firstName, lastName, email, password) VALUES (?, ?, ?, ?)",
        [firstName, lastName, email, hashedPassword],
        (err, result) => {
          if (err) {
            console.error("Error executing MySQL query:", err);
            return res.status(500).json({
              success: false,
              message: "Internal Server Error",
              error: err.message,
            });
          }

          res.json({ success: true, message: "Registration successful" });
        }
      );
    });
  } catch (error) {
    console.error("Error in registration:", error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
});

app.post("/login", (req, res) => {
  try {
    const { email, password } = req.body;

    db.query(
      "SELECT * FROM users WHERE email = ?",
      [email],
      (selectErr, results) => {
        if (selectErr) {
          console.error("Error executing MySQL query: " + selectErr.stack);
          return res.status(500).json({
            success: false,
            message: "Internal Server Error",
            error: selectErr.message,
          });
        }

        if (results.length > 0) {
          const user = results[0];

          // Parola karşılaştırması
          bcrypt.compare(password, user.password, (compareErr, match) => {
            if (compareErr) {
              console.error("Error comparing passwords:", compareErr);
              return res.status(500).json({
                success: false,
                message: "Internal Server Error",
                error: compareErr.message,
              });
            }

            if (match) {
              // Kullanıcı bilgilerini geri döndür
              res.json({
                success: true,
                message: "Login successful",
                user: {
                  id: user.id,
                  firstName: user.firstName,
                  lastName: user.lastName,
                  email: user.email,
                },
              });
            } else {
              res
                .status(401)
                .json({ success: false, message: "Invalid credentials" });
            }
          });
        } else {
          res.status(401).json({ success: false, message: "User not found" });
        }
      }
    );
  } catch (error) {
    console.error("Error in login:", error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
