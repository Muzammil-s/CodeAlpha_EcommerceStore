const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Serve static images
app.use("/images", express.static(path.join(__dirname, "../frontend/images")));

// ✅ Serve frontend
app.use(express.static(path.join(__dirname, "../frontend")));

// Routes
const productRoutes = require("./routes/ProductRoutes");
const authRoutes = require("./routes/auth");   // <-- add this line

app.use("/api/products", productRoutes);
app.use("/api/auth", authRoutes);              // <-- add this line

// ✅ Fallback
app.get(/.*/, (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/index.html"));
});

const PORT = process.env.PORT || 5000;
mongoose
  .connect(process.env.MONGO_URI)
  .then(() =>
    app.listen(PORT, () =>
      console.log(`🚀 Server running on http://localhost:${PORT}`)
    )
  )
  .catch((err) => console.error("DB connection error:", err));
