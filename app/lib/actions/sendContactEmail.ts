"use server";

import { createMailTransporter } from "./mailer";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export async function sendContactEmail(formData: ContactFormData) {
  try {
    const { name, email, message } = formData;

    console.log("📧 Server Action: sendContactEmail called");
    console.log("Form data:", { name, email, message });

    // Validate input
    if (!name || !email || !message) {
      console.error("❌ Missing required fields");
      return {
        success: false,
        error: "Missing required fields",
      };
    }

    // Create transporter
    console.log("📡 Creating nodemailer transporter...");
    const transporter = createMailTransporter();
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
    return {
      success: true,
      message: "Email sent successfully",
    };
  } catch (error) {
    console.error("❌ Email error:", error);
    if (error instanceof Error) {
      console.error("Error message:", error.message);
      const errorWithCode = error as Error & { code?: string; response?: string };
      console.error("Error code:", errorWithCode.code);
      console.error("Error response:", errorWithCode.response);
    }
    return {
      success: false,
      error: "Failed to send email",
    };
  }
}
