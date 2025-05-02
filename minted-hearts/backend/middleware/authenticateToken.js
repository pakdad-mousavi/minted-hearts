import jwt from "jsonwebtoken";

const authenticateToken = (req, res, next) => {
  // Get the bearer token
  const authHeader = req.headers["authorization"];
  const token = authHeader?.split(" ")[1];

  if (!token) return res.status(401).json({ error: "Token required" });

  // Verify token
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ error: "Invalid or expired token" });

    // user info from token payload (e.g. id, email)
    req.user = user;
    next();
  });
};

export default authenticateToken;
