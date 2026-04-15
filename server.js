import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { Resend } from "resend";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const resend = new Resend(process.env.RESEND_API_KEY);

app.post("/send-email", async (req, res) => {
  const { name, email, phone, message } = req.body;

  try {
    const response = await resend.emails.send({
      from: "Ren Aiko <onboarding@resend.dev>", // change later with domain
      to: ["aravindajaim@gmail.com"],
      subject: "New Contact Form Submission",
      html: `
        <h2>New Lead</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Message:</b> ${message}</p>
      `,
    });

    res.json({ success: true, response });
  } catch (error) {
    res.status(500).json({ success: false, error });
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));