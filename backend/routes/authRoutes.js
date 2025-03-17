const express = require("express");
const jwt = require("jsonwebtoken");
const { authenticateUser, authorizeRole } = require("../middleware/authMiddleware");
const { User } = require("../models");
require("dotenv").config();

const router = express.Router();

// Role Selection Instead of Login
router.post("/select-role", (req, res) => {
    const { role, userID } = req.body; // Allowing userID in request

    const validRoles = ["Admin", "Coach", "Viewer"]; // Expandable role list
    if (!role || !validRoles.includes(role)) {
        return res.status(400).json({ error: "Invalid role selected" });
    }

    if (!userID) {
        return res.status(400).json({ error: "UserID is required" });
    }

    // Generate JWT with userID and role
    const token = jwt.sign({ userID, role }, process.env.JWT_SECRET, { expiresIn: "1h" });

    res.status(200).json({ message: `Logged in as ${role}`, token });
});

// Credential-based login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ where: { email, password } });
    if (!user) {
      return res.status(400).json({ error: "Invalid email or password" });
    }

    const token = jwt.sign({ userID: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: "1h" });

    res.status(200).json({ message: "Logged in successfully", token, role: user.role });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

// Example of a protected route
router.get("/protected", authenticateUser, authorizeRole(["Admin", "Coach"]), (req, res) => {
    res.status(200).json({ message: "You have access to this protected route" });
});

module.exports = router;
