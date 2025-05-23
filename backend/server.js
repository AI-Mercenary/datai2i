require("dotenv").config(); // Load environment variables from .env
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const app = express();
const port = 3001;

// Middleware to parse JSON and enable CORS
app.use(express.json());
app.use(cors({
  origin: "http://localhost:3000", // Allow requests from your frontend
}));

// Nodemailer transporter configuration
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER, // Loaded from .env
    pass: process.env.EMAIL_PASS, // Loaded from .env
  },
});

// API endpoint to send email
app.post("/api/send-email", async (req, res) => {
  const { from, to, subject, text } = req.body;

  // Validate input
  if (!from || !to || !subject || !text) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  try {
    await transporter.sendMail({
      from, // User's email
      to, // team@datai2i.com
      subject,
      text,
      replyTo: from, // Set reply-to as user's email
    });
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ message: "Failed to send email" });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});