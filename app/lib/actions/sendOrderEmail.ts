"use server";

import { createMailTransporter } from "./mailer";
import { DeliveryFormData } from "@/app/components/sections/DeliveryForm";

interface OrderItem {
  name: string;
  price: number;
  quantity: number;
}

interface SendOrderEmailParams {
  delivery: DeliveryFormData;
  items: OrderItem[];
  total: number;
}

export async function sendOrderEmail({ delivery, items, total }: SendOrderEmailParams) {
  try {
    const transporter = createMailTransporter();

    const itemsHtml = items
      .map(
        (item) =>
          `<tr>
            <td style="padding:8px;border-bottom:1px solid #eee;">${item.name}</td>
            <td style="padding:8px;border-bottom:1px solid #eee;text-align:center;">${item.quantity}</td>
            <td style="padding:8px;border-bottom:1px solid #eee;text-align:right;">${(item.price * item.quantity).toFixed(2)} RSD</td>
          </tr>`
      )
      .join("");

    // Email to company
    await transporter.sendMail({
      from: process.env.NEXT_EMAIL,
      to: process.env.NEXT_EMAIL,
      subject: `Nova porudžbina - ${delivery.firstName} ${delivery.lastName}`,
      html: `
        <h2>Nova porudžbina</h2>
        <h3>Podaci o dostavi</h3>
        <p><strong>Ime:</strong> ${delivery.firstName} ${delivery.lastName}</p>
        <p><strong>Email:</strong> ${delivery.email}</p>
        <p><strong>Telefon:</strong> ${delivery.phone}</p>
        <p><strong>Adresa:</strong> ${delivery.address}${delivery.apartment ? ", " + delivery.apartment : ""}</p>
        <p><strong>Grad:</strong> ${delivery.postalCode} ${delivery.city}</p>
        <p><strong>Zemlja:</strong> ${delivery.country}</p>
        <h3>Poručeni proizvodi</h3>
        <table style="width:100%;border-collapse:collapse;">
          <thead>
            <tr>
              <th style="padding:8px;text-align:left;border-bottom:2px solid #ccc;">Proizvod</th>
              <th style="padding:8px;text-align:center;border-bottom:2px solid #ccc;">Kol.</th>
              <th style="padding:8px;text-align:right;border-bottom:2px solid #ccc;">Cena</th>
            </tr>
          </thead>
          <tbody>${itemsHtml}</tbody>
        </table>
        <p style="margin-top:16px;font-size:18px;"><strong>Ukupno: ${total.toFixed(2)} RSD</strong></p>
        <p><strong>Način plaćanja:</strong> Pouzećem</p>
      `,
      replyTo: delivery.email,
    });

    // Confirmation email to customer
    await transporter.sendMail({
      from: process.env.NEXT_EMAIL,
      to: delivery.email,
      subject: "Potvrda porudžbine - Dose",
      html: `
        <h2>Hvala na porudžbini, ${delivery.firstName}!</h2>
        <p>Vaša porudžbina je uspešno primljena. Kontaktiraćemo vas uskoro radi potvrde dostave.</p>
        <h3>Detalji porudžbine</h3>
        <table style="width:100%;border-collapse:collapse;">
          <thead>
            <tr>
              <th style="padding:8px;text-align:left;border-bottom:2px solid #ccc;">Proizvod</th>
              <th style="padding:8px;text-align:center;border-bottom:2px solid #ccc;">Kol.</th>
              <th style="padding:8px;text-align:right;border-bottom:2px solid #ccc;">Cena</th>
            </tr>
          </thead>
          <tbody>${itemsHtml}</tbody>
        </table>
        <p style="margin-top:16px;font-size:18px;"><strong>Ukupno: ${total.toFixed(2)} RSD</strong></p>
        <p><strong>Način plaćanja:</strong> Pouzećem</p>
        <br/>
        <p>Srdačan pozdrav,<br/>Dose Tim</p>
      `,
    });

    return { success: true };
  } catch (error) {
    console.error("❌ Order email error:", error);
    return { success: false, error: "Greška pri slanju porudžbine." };
  }
}
