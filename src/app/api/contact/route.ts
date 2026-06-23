import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, telephone, serviceRequest, message } = body;

    // Basic validation
    if (!name || !email || !serviceRequest || !message) {
      return NextResponse.json(
        { error: "Name, email, service request, and message are required." },
        { status: 400 }
      );
    }

    // Configure the nodemailer transporter using environment variables.
    // Fallback configurations included to avoid app-level crashes.
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: process.env.SMTP_SECURE === "true", // true for port 465, false for other ports
      auth: {
        user: process.env.SMTP_USER || "",
        pass: process.env.SMTP_PASSWORD || "",
      },
    });

    const mailOptions = {
      from: process.env.FROM_EMAIL || process.env.SMTP_USER || email,
      to: process.env.TO_EMAIL || "enquiries@fortressasrsecurity.com",
      replyTo: email,
      subject: `New Security Inquiry: ${serviceRequest} - ${name}`,
      text: `
Name: ${name}
Email: ${email}
Telephone: ${telephone || "N/A"}
Service Required: ${serviceRequest}

Message:
${message}
      `,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #1a1a1a; padding: 30px; border-radius: 0px; background-color: #ffffff; color: #000000;">
          <h2 style="border-bottom: 2px solid #000000; padding-bottom: 10px; margin-top: 0; color: #000000; font-size: 20px; font-weight: bold; text-transform: uppercase; letter-spacing: 0.05em;">New Security Inquiry</h2>
          <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr>
              <td style="padding: 10px 0; font-weight: bold; width: 150px; border-bottom: 1px solid #e5e7eb; text-transform: uppercase; font-size: 11px; letter-spacing: 0.05em;">Name:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-size: 14px;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; font-weight: bold; border-bottom: 1px solid #e5e7eb; text-transform: uppercase; font-size: 11px; letter-spacing: 0.05em;">Email:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-size: 14px;"><a href="mailto:${email}" style="color: #000000; text-decoration: underline;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px 0; font-weight: bold; border-bottom: 1px solid #e5e7eb; text-transform: uppercase; font-size: 11px; letter-spacing: 0.05em;">Telephone:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-size: 14px;">${telephone || "N/A"}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; font-weight: bold; border-bottom: 1px solid #e5e7eb; text-transform: uppercase; font-size: 11px; letter-spacing: 0.05em;">Service Required:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-size: 14px;">${serviceRequest}</td>
            </tr>
          </table>
          <h3 style="color: #000000; text-transform: uppercase; font-size: 13px; letter-spacing: 0.05em; border-top: 1px solid #000000; padding-top: 15px; margin-top: 30px;">Message Details</h3>
          <p style="white-space: pre-line; line-height: 1.6; color: #1a1a1a; font-size: 14px;">${message}</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: "Email sent successfully" });
  } catch (err) {
    console.error("Nodemailer error:", err);
    const errorMessage = err instanceof Error ? err.message : "An error occurred while sending the email.";
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}
