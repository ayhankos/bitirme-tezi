const express = require("express");
const router = express.Router();

router.post("/api/login", (req, res) => {
  // Gelen verileri kontrol et
  const { email, password } = req.body;

  // Örnek: Kullanıcı adı ve parolayı kontrol et (gerçek bir uygulamada veritabanı kullanılmalıdır)
  if (email === "demo@example.com" && password === "password") {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
    res.header("Access-Control-Allow-Credentials", true);
    res.json({ success: true, message: "Giriş başarılı" });
  } else {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
    res.header("Access-Control-Allow-Credentials", true);
    res.json({ success: false, message: "Giriş başarısız" });
  }
});

module.exports = router;
