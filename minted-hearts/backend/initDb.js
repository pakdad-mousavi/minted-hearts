import sqlite3 from "sqlite3";
import bcrypt from "bcryptjs";

sqlite3.verbose();
const db = new sqlite3.Database("./database.db");

// Create a users table
db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS User (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      email TEXT UNIQUE NOT NULL,
      password TEXT NOT NULL
    )
  `);

  // Create admin user
  const email = "pakdad.mousavi@gmail.com";
  const password = "admin123";
  const hashedPassword = bcrypt.hashSync(password, 10);

  db.run(
    `INSERT OR IGNORE INTO User (email, password) VALUES (?, ?)`,
    [email, hashedPassword],
    (err) => {
      if (err) {
        console.error("Error inserting default user:", err.message);
      } else {
        console.log("Default user added or already exists.");
      }
    }
  );
});

db.close();
