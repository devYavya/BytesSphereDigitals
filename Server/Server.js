require("dotenv").config();
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const path = require("path");

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, "../Your-Dev-Friend/dist")));

app.post("/send-email", async (req, res) => {
  const { name, email, message, projectType } = req.body;

  const transporter = nodemailer.createTransport({
    host: "smtp.hostinger.com", 
    port: 465, 
    secure: true, 
    auth: {
      user: process.env.EMAIL_USER, 
      pass: process.env.EMAIL_PASS, 
    },
    debug: true, 
    logger: true,
  });

  const mailOptions = {
    from: email,
    to: "contact@bytespheredigital.com", // Receiver's email
    subject: `New Contact Form Submission - ${projectType}`,
    text: `Name: ${name}\nEmail: ${email}\nProject Type: ${projectType}\nMessage: ${message}`,
    replyTo: email, 
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully!");
    res.json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ success: false, error: error.message });
  }
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../Your-Dev-Friend/dist/index.html"));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
