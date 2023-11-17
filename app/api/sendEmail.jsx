import { NextRequest, NextResponse } from "next/server";
const res = NextResponse;
const req = NextRequest;
export default async function handler(req, res) {
  res.status(200).json({ name: "jewenelle" });
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }
  const [name, email, message] = req.body;
  //email content
  const mailOptions = {
    from: `${email}`,
    to: "jewenellearchide@gmail.com",
    subject: "New Contact Submitted",
    text: `Name:${name} \n Email:${email} \n Message: ${message}`,
  };
  //send Email

  await transporter.sendMail(mailOptions);

  res.status(200).json({ message: "Email sent successfully" });
  try {
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
}
