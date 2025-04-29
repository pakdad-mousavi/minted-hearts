import express from "express";

// Initialize app
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(3000, () => {
  console.log("Listening on http://localhost:3000");
});
