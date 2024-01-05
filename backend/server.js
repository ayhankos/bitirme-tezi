const express = require("express");
const cors = require("cors");
const apiRoutes = require("./routes/api");

const app = express();

// CORS ayarları
app.use(
  cors({
    origin: "http://localhost:3000", // React uygulamasının adresi
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
    optionsSuccessStatus: 204,
  })
);

// JSON veri analizi için gerekli middleware
app.use(express.json());

// API endpoint'lerini belirt
app.use("/api", apiRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
