import nodemailer from "nodemailer";
import { config } from "dotenv";

config();
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
});

/**
 * Enviar email a la empresa cuando se crea una reserva
 */
export async function sendNewReservationEmail(reservation) {
  const mailOptions = {
    from: `"Sistema de Reservas" <${process.env.GMAIL_USER}>`,
    to: process.env.RESERVATION_EMAIL,
    subject: `Nueva reserva creada - ${reservation.ownerName}`,
    html: `
      <h2>Nueva reserva recibida</h2>
      
       <p><strong>Id:</strong> ${reservation._id}</p>
      <p><strong>Cliente:</strong> ${reservation.ownerName}</p>
      <p><strong>Email:</strong> ${reservation.ownerEmail}</p>
      <p><strong>Servicio:</strong> ${reservation.type}</p>
      <p><strong>Destino:</strong> ${reservation.destination || "N/A"}</p>
      <p><strong>Paquete:</strong> ${reservation.packageName || "N/A"}</p>
      <p><strong>Lugar de recogida:</strong> ${reservation.pickupLocation}</p>
      <p><strong>Fecha:</strong> ${reservation.pickupDate}</p>
      <p><strong>Hora:</strong> ${reservation.pickupTime}</p>
      <p><strong>Vehículo:</strong> ${reservation.vehicle}</p>
      <p><strong>Pasajeros:</strong> ${reservation.passengers}</p>
      <p><strong>Número de vuelo:</strong> ${
        reservation.flightNumber || "N/A"
      }</p>
      <p><strong>Guía:</strong> ${reservation.guide ? "Sí" : "No"}</p>
      <p><strong>Idioma del guía:</strong> ${
        reservation.guideLanguage || "N/A"
      }</p>
      <p><strong>Comentarios:</strong> ${reservation.comments || "N/A"}</p>
      <p><strong>Total:</strong> $${reservation.totalPrice}</p>

      <hr>
      <small>Este es un correo automático generado por el sistema.</small>
    `,
  };

  await transporter.sendMail(mailOptions);
}
