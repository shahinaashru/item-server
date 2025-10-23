import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import logger from "./src/middleware/logger.js";
import notFound from "./src/middleware/noteFound.js";
import itemRoutes from "./src/routes/itemRoutes.js";

dotenv.config();
const app = express();
app.use(express.json());
app.use(logger);
app.get("/", (req, res) => {
  res.send("Inventory API is Running");
});
app.get("/health", (req, res) => {
  res.json({ status: "Server is healthy and running" });
});
app.use("/items", itemRoutes);
app.use(notFound);
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("MongoDB Connection Error:", err));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
