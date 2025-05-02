import express from "express";
import { body } from "express-validator";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
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
  async (req, res) => {
    const { email, password } = req.body;

    // Try to get user
    try {
      const user = await User.findOne({ email }).lean();
      if (user) {
        // Hash entered password and compare
        const isValid = bcrypt.compareSync(password, user.password);
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
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: "Internal server error" });
    }
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
      const userAlreadyExists = await User.exists({ email });
      if (userAlreadyExists) {
        res.status(400).json({ error: "User already exists" });
      } else {
        await User.insertOne({ email, password: hashedPassword });
        res.status(201).json({ message: "Successfully registered." });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: "Internal server error" });
    }
  }
);

// TEMPORARY DELETE FOR TESTING ONLY
router.post("/delete", async (req, res) => {
  const { email } = req.body;
  try {
    await User.deleteOne({ email });
    res.status(204).json({ message: "Successfully deleted " + email });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
