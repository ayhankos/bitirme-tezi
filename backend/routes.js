const express = require("express");
const router = express.Router();

router.post("/api/login", (req, res) => {
  // Gelen verileri kontrol et
  const { email, password } = req.body;

  // Örnek: Kullanıcı adı ve parolayı kontrol et (gerçek bir uygulamada veritabanı kullanılmalıdır)
  if (email === "demo@example.com" && password === "password") {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // Bu satırı ekleyin
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS"); // Bu satırı ekleyin
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization"); // Bu satırı ekleyin
    res.header("Access-Control-Allow-Credentials", true); // Bu satırı ekleyin
    res.json({ success: true, message: "Giriş başarılı" });
  } else {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // Bu satırı ekleyin
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS"); // Bu satırı ekleyin
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization"); // Bu satırı ekleyin
    res.header("Access-Control-Allow-Credentials", true); // Bu satırı ekleyin
    res.json({ success: false, message: "Giriş başarısız" });
  }
});

module.exports = router;
