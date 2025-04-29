import express from "express";
import { body } from "express-validator";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import db from "../db.js";
import dotenv from "dotenv";

dotenv.config();
const router = express.Router();

// Validator function
const validate = (validations) => {
  return async (req, res, next) => {
    for (const validation of validations) {
      const result = await validation.run(req);
      if (!result.isEmpty()) {
        return res.status(400).json({ errors: result.array() });
      }
    }

    next();
  };
};

// Login route
router.post(
  "/login",
  validate([
    body("email")
      .notEmpty()
      .withMessage("Email field is empty")
      .isEmail()
      .withMessage("Email field is invalid"),
    body("password").notEmpty().withMessage("Password field is empty"),
  ]),
  (req, res) => {
    const { email, password } = req.body;

    db.serialize(() => {
      // Try to get user
      db.get("SELECT * FROM User WHERE email = ?", [email], (err, user) => {
        if (err) {
          res.status(500).json({ error: "Database error" });
        }
        if (user) {
          // Hash entered password and compare
          const userHash = user.password;
          const isValid = bcrypt.compareSync(password, userHash);
          if (isValid) {
            // Create a jwt token for user
            const token = jwt.sign(
              { id: user.id, email: user.email },
              process.env.JWT_SECRET,
              { expiresIn: "30d" }
            );
            res.status(200).json({ token });
          } else {
            // Wrong password
            res.status(400).json({ error: "Password is incorrect" });
          }
        } else {
          res.status(400).json({ error: "Email is not registered" });
        }
      });
    });
  }
);

router.post(
  "/register",
  validate([
    body("email")
      .notEmpty()
      .withMessage("Email field is empty")
      .isEmail()
      .withMessage("Email field is invalid"),
    body("password")
      .notEmpty()
      .withMessage("Password field is empty")
      .isLength({ min: 6 })
      .withMessage("Password is too short"),
  ]),
  async (req, res) => {
    const { email, password } = req.body;

    try {
      // Hash password
      const hashedPassword = await bcrypt.hash(password, 10);

      // Store in database
      db.run(
        "INSERT INTO User (email, password) VALUES (?, ?)",
        [email, hashedPassword],
        (err) => {
          if (err) {
            res.status(400).json({ error: "User already exists" });
          } else {
            res.status(201).json({ message: "User created successfully" });
          }
        }
      );
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: "Internal server error" });
    }
  }
);

// TEMPORARY DELETE FOR TESTING ONLY
router.post("/delete", (req, res) => {
  const { email } = req.body;
  db.run("DELETE FROM User WHERE email = ?", [email], (err) => {
    if (err) {
      res.send(err);
    } else {
      res.send("deleted record");
    }
  });
});

export default router;
