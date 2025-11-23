import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json();

    console.log("📧 Email API called");
    console.log("Form data:", { name, email, message });

    // Validate input
    if (!name || !email || !message) {
      console.error("❌ Missing required fields");
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Log environment variables (without exposing password)
    console.log("🔐 SMTP Configuration:");
    console.log("   Host:", process.env.NEXT_EMAIL_SERVER);
    console.log("   Email:", process.env.NEXT_EMAIL);
    console.log("   Password exists:", !!process.env.NEXT_PASSWORD);
    console.log("   Password length:", process.env.NEXT_PASSWORD?.length);
    console.log("   Password starts with:", process.env.NEXT_PASSWORD?.substring(0, 3));

    // Create transporter
    console.log("📡 Creating nodemailer transporter...");
    const transporter = nodemailer.createTransport({
      host: process.env.NEXT_EMAIL_SERVER,
      port: 465,
      secure: true,
      auth: {
        user: process.env.NEXT_EMAIL,
        pass: process.env.NEXT_PASSWORD,
      },
    });

    console.log("✅ Transporter created successfully");

    // Send email to company
    console.log("📮 Sending email to company...");
    const companyEmailResult = await transporter.sendMail({
      from: process.env.NEXT_EMAIL,
      to: process.env.NEXT_EMAIL,
      subject: `Nova poruka od ${name}`,
      html: `
        <h2>Nova poruka sa kontakt forme</h2>
        <p><strong>Ime:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Poruka:</strong></p>
        <p>${message.replace(/\n/g, "<br />")}</p>
      `,
      replyTo: email,
    });
    console.log("✅ Company email sent:", companyEmailResult.messageId);

    // Send confirmation email to user
    console.log("📮 Sending confirmation email to user...");
    const userEmailResult = await transporter.sendMail({
      from: process.env.NEXT_EMAIL,
      to: email,
      subject: "Potvrda - Vaša poruka je primljena",
      html: `
        <h2>Hvala vam što ste nas kontaktirali!</h2>
        <p>Pozdravljamo ${name},</p>
        <p>Vaša poruka je uspešno primljena. Naš tim će vam odgovoriti u roku od 24 sata.</p>
        <p>Srdačan pozdrav,<br />Dose Tim</p>
      `,
    });
    console.log("✅ User confirmation email sent:", userEmailResult.messageId);

    console.log("✨ All emails sent successfully!");
    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("❌ Email error:", error);
    if (error instanceof Error) {
      console.error("Error message:", error.message);
      console.error("Error code:", (error as any).code);
      console.error("Error response:", (error as any).response);
    }
    return NextResponse.json(
      { error: "Failed to send email", details: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 }
    );
  }
}
