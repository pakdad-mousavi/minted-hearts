import express from "express";
import mongoose from "mongoose";
import authRouter from "./routes/auth.js";
import dotenv from "dotenv";
import initializeDb from "./initDb.js";

dotenv.config();

// Initialize app
const app = express();
app.use(express.json());

// Connect to mongodb database via mongoose
(async () => {
  try {
    process.env.NODE_OPTIONS = '--tls-min-v1.2';
    await mongoose.connect(process.env.DB_CONNECTION_STRING);
    await initializeDb();
    console.log("Connected to database successfully.");
  } catch (error) {
    console.log(error);
  }
})();

// Set up auth router
app.use("/auth", authRouter);

app.use((req, res, next) => {
  res.status(404).send("404 - page not found");
});

app.listen(3000, () => {
  console.log("Listening on http://localhost:3000");
});
