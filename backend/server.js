const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const crypto = require("crypto");
const cors = require("cors");
const { sign, verify } = require("jsonwebtoken");

const JWT_SECRET_KEY = "ayhan";
const app = express();
const port = 3001;

// Middleware'leri kullan
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
    optionsSuccessStatus: 204,
    allowedHeaders: ["Content-Type", "Authorization", "audience"],
  })
);
app.use(bodyParser.json());

// MySQL bağlantısı
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "fenerbahce41",
  database: "BitirmeTezi", // Veritabanı adınızı buraya ekleyin
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
    const hashedPassword = crypto
      .createHash("sha256")
      .update(password)
      .digest("hex");

    db.query(
      "INSERT INTO users (firstName, lastName, email, password) VALUES (?, ?, ?, ?)",
      [firstName, lastName, email, hashedPassword],
      (err, result) => {
        if (err) {
          console.error("Error executing MySQL query:", err);
          return res.status(500).json({
            success: false,
            message: "Kullanıcı kayıdedilemedi.",
            error: err.message,
          });
        }

        res.json({ success: true, message: "Registration successful" });
      }
    );
  } catch (error) {
    console.error("Error in registration:", error);
    res.status(500).json({
      success: false,
      message: "Kayıt Server Error",
      error: error.message,
    });
  }
});

app.post("/login", (req, res) => {
  try {
    const { email, password } = req.body;

    // Şifreyi hashleme
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
          return res.status(500).json({
            success: false,
            message: "Login Server Error",
            error: err.message,
          });
        }

        if (results.length > 0) {
          const user = results[0];
          const token = sign(
            {
              userId: user.id,
              email: user.email,
              firstName: user.firstName,
              lastName: user.lastName,
            },
            JWT_SECRET_KEY,
            { expiresIn: "100h", audience: "http://localhost:3000" }
          );
          console.log("oluşturulan token -> ", token);
          // Kullanıcı giriş yaptıktan sonra, isAdmin kontrolü yap
          if (user.isAdmin === 1) {
            // Kullanıcı admin ise admin sayfasına yönlendir
            res.json({
              success: true,
              message: "Login successful",
              isAdmin: true,
              user: {
                email: user.email,
                // Diğer kullanıcı bilgileri eklenebilir
              },
              token: token,
            });
          } else {
            // Kullanıcı admin değilse ana sayfaya yönlendir
            res.json({
              success: true,
              message: "Login successful",
              isAdmin: false,
              user: {
                email: user.email,
                // Diğer kullanıcı bilgileri eklenebilir
              },
              token: token,
            });
          }
        } else {
          res
            .status(401)
            .json({ success: false, message: "Invalid credentials" });
        }
      }
    );
  } catch (error) {
    console.error("Error in login:", error);
    res.status(500).json({
      success: false,
      message: "Login 2 Server Error",
      error: error.message,
    });
  }
});

// Yeni bir endpoint ekle
app.post("/checkAdmin", (req, res) => {
  const { email } = req.body;
  checkAdmin(email, res);
});

// Admin kontrolünü gerçekleştiren fonksiyon
function checkAdmin(email, res) {
  db.query(
    "SELECT isAdmin FROM users WHERE email = ?",
    [email],
    (err, results) => {
      console.log("Database Results:", results);
      if (err) {
        console.error("Error executing MySQL query: " + err.stack);
        return res.status(500).json({
          success: false,
          message: "Admin kontrol edilemedi.",
          error: err.message,
        });
      }

      if (results.length > 0) {
        const isAdmin = results[0].isAdmin;
        res.json({ success: true, isAdmin });
      } else {
        res.status(404).json({ success: false, message: "User not found" });
      }
    }
  );
}

// Yeni bir endpoint ekle
app.post("/addEvent", (req, res) => {
  const { title, detail, imageUrl } = req.body;
  addEvent(title, detail, imageUrl, res);
});

function addEvent(title, detail, imageUrl, res) {
  db.query(
    "INSERT INTO events (title, detail, imageUrl) VALUES (?, ?, ?)",
    [title, detail, imageUrl],
    (err, result) => {
      if (err) {
        console.error("Error executing MySQL query:", err);
        return res.status(500).json({
          success: false,
          message: "Etkinlik eklenemedi.",
          error: err.message,
        });
      }

      res.json({ success: true, message: "Event added successfully" });
    }
  );
}

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.get("/events", (req, res) => {
  db.query("SELECT * FROM events", (err, results) => {
    if (err) {
      console.error("Error executing MySQL query:", err);
      return res.status(500).json({
        success: false,
        message: "Etkinlikler listelenemedi.",
        error: err.message,
      });
    }
    res.json(results);
  });
});

app.get("/users", (req, res) => {
  db.query("SELECT * FROM users", (err, results) => {
    if (err) {
      console.error("Error executing MySQL query:", err);
      return res.status(500).json({
        success: false,
        message: "Kullanıcı listelenemedi.",
        error: err.message,
      });
    }
    res.json(results);
  });
});

app.delete("/users/:id", (req, res) => {
  const userId = req.params.id;

  db.query("DELETE FROM users WHERE id = ?", [userId], (err, result) => {
    if (err) {
      console.error("Error deleting user:", err);
      return res.status(500).json({
        success: false,
        message: "Kullanıcı silinemedi.",
        error: err.message,
      });
    }

    res.json({ success: true, message: "User deleted successfully" });
  });
});

app.get("/user_events", (req, res) => {
  const token = req.headers.authorization;
  console.log(token);
  if (!token) {
    return res.status(401).json({ success: false, message: "Unauthorized" });
  }

  try {
    // Tokeni doğrula
    const decodedToken = verify(token.split(".")[1], JWT_SECRET_KEY);

    // Token içindeki kullanıcı bilgilerini al
    const userId = decodedToken.userId;

    // Kullanıcıya ait etkinlikleri sorgula
    const query = `
      SELECT ue.id, ue.registration_date, ue.user_id, u.firstName, u.lastName, e.title
      FROM user_events ue
      INNER JOIN users u ON ue.user_id = u.id
      INNER JOIN events e ON ue.event_id = e.id
      WHERE ue.user_id = ?
    `;

    db.query(query, [userId], (err, results) => {
      if (err) {
        console.error("Error executing MySQL query:", err);
        return res.status(500).json({
          success: false,
          message: "Server Error User Events",
          error: err.message,
        });
      }

      res.json(results);
    });
  } catch (error) {
    console.error("Error decoding token:", error);
    res.status(401).json({ success: false, message: "Unauthorized" });
  }
});

app.post("/apply_event", (req, res) => {
  const token = req.headers.authorization;
  console.log(token);
  try {
    if (!token) {
      return res.status(401).json({ success: false, message: "Unauthorized" });
    }
    const decodedToken = verify(token.split(".")[1], JWT_SECRET_KEY);
    const currentTime = Date.now() / 1000;
    if (currentTime > decodedToken.exp) {
      return res
        .status(401)
        .json({ success: false, message: "Yetkisiz (Jetonun Süresi Doldu)" });
    }

    // Token doğrulandıktan sonra, içindeki kullanıcı kimliğini al
    const userId = decodedToken.userId;

    // Başvuruda bulunulan etkinliğin ID'sini al
    const { eventId } = req.body;

    // Etkinlik başvurusunu kaydet
    db.query(
      "INSERT INTO user_events (user_id, event_id) VALUES (?, ?)",
      [userId, eventId],
      (err, result) => {
        if (err) {
          console.error("Error executing MySQL query:", err);
          return res.status(500).json({
            success: false,
            message: "Kullanıcı bilgileri eklenemedi.",
            error: err.message,
          });
        }

        // Başvuru başarılı mesajını dön
        res.json({ success: true, message: "Event application successful" });
      }
    );
  } catch (error) {
    console.error("Error applying event:", error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error Apply Event",
      error: error.message,
    });
  }
});
