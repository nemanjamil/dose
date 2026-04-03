import nodemailer from "nodemailer";

export function createMailTransporter() {
  return nodemailer.createTransport({
    host: process.env.NEXT_EMAIL_SERVER,
    port: 587,
    secure: false, // STARTTLS on port 587 (more widely allowed than 465)
    auth: {
      user: process.env.NEXT_EMAIL,
      pass: process.env.NEXT_PASSWORD,
    },
    connectionTimeout: 10000, // 10s to connect
    greetingTimeout: 10000,   // 10s for server greeting
    socketTimeout: 15000,     // 15s for socket inactivity
    tls: {
      rejectUnauthorized: false, // allow self-signed certs on shared hosting
    },
  });
}
