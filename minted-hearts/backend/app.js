import express from "express";
import authRouter from "./routes/auth.js";
import dotenv from "dotenv";

dotenv.config();

// Initialize app
const app = express();

app.use(express.json());

// Set up auth router
app.use("/auth", authRouter);

app.use((req, res, next) => {
  res.status(404).send("404 - page not found");
});

app.listen(3000, () => {
  console.log("Listening on http://localhost:3000");
});
