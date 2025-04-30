import User from "./models/User.js";
import bcrypt from "bcryptjs";

const main = async () => {
  try {
    // Insert admin user if not already existing
    const email = "pakdad.mousavi@gmail.com";
    const password = "admin123";
    const hashedPassword = bcrypt.hashSync(password, 10);

    const exists = await User.exists({ email });
    if (!exists) {
      await User.insertOne({
        email,
        password: hashedPassword,
      });
    }

    console.log("Successfully initialized database.");
  } catch (e) {
    console.log(e);
  }
};

export default main;
