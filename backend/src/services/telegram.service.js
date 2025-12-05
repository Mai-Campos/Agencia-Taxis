const TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const ADMIN_CHAT_ID = process.env.TELEGRAM_ADMIN_CHAT_ID;

export async function notifyAdminReservation(reservation) {
  const msg = formatReservationMessage(reservation);

  try {
    await fetch(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: ADMIN_CHAT_ID,
        text: msg,
        parse_mode: "HTML",
      }),
    });
  } catch (error) {
    console.error("❌ Error enviando mensaje a Telegram:", error);
  }
}

function formatReservationMessage(r) {
  return `
🚖 <b>Nueva Reserva</b>

 🪪<b>Id:</b> ${r._id}
 📌<b>Tipo:</b> ${r.type}
${r.packageName ? `🎒 <b>Paquete:</b> ${r.packageName}\n` : ""}
👤 <b>Cliente:</b> ${r.ownerName} 
📧 <b>Email:</b> ${r.ownerEmail}

📍 <b>Pickup:</b> ${r.pickupLocation}
🎯 <b>Destino:</b> ${r.destination || "N/A"}

🗓️ <b>Fecha:</b> ${formatDate(r.pickupDate)}
⏰ <b>Hora:</b> ${r.pickupTime}

👥 <b>Pasajeros:</b> ${r.passengers}
🚗 <b>Vehículo:</b> ${r.vehicle}

✈️ <b>Vuelo:</b> ${r.flightNumber || "N/A"}
🧭 <b>Guía:</b> ${r.withGuide ? `Sí (${r.guideLanguaje})` : "No"}

💬 <b>Comentarios:</b> ${r.comments || "Ninguno"}

💵 <b>Total:</b> ${r.totalPrice} USD
  `.trim();
}

function formatDate(date) {
  try {
    return new Date(date).toISOString().split("T")[0];
  } catch {
    return "Fecha inválida";
  }
}
