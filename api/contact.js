import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      message: "Method not allowed",
    });
  }

  try {
const { name, email, subject, message } = req.body || {};

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Please fill all fields.",
      });
    }

await transporter.sendMail({
  from: process.env.SMTP_USER,
  to: process.env.CONTACT_TO,
  replyTo: email,
  subject: subject
    ? `Portfolio Contact — ${subject}`
    : `Portfolio Contact — ${name}`,
  text: `
Name: ${name}
Email: ${email}
Subject: ${subject || "No subject"}

Message:
${message}
  `,
  html: `
    <h2>New Portfolio Contact</h2>

    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Subject:</strong> ${subject || "No subject"}</p>

    <hr />

    <p><strong>Message:</strong></p>
    <p>${message.replace(/\n/g, "<br>")}</p>
  `,
});

    return res.status(200).json({
      success: true,
      message: "Message sent successfully!",
    });
  } catch (error) {
    console.error("SMTP Error:", error);

    return res.status(500).json({
      success: false,
      message: "Unable to send message. Please try again later.",
    });
  }
}