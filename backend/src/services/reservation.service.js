import Reservation from "../models/reservation.model.js";

export const createReservationService = async (data) => {
  const errors = [];

  if (!data.ownerName)
    errors.push("El nombre del propietario de la reserva es obligatorio");
  if (!data.ownerEmail)
    errors.push("El email del propietario de la reserva es obligatorio");
  if (!data.pickupLocation) errors.push("El lugar de recojida es obligatorio");
  if (!data.pickupDate) errors.push("La fecha de recojida es obligatoria");
  if (!data.passengers || data.passengers <= 0)
    errors.push("La cantidad de pasajeros debe ser al menos de 1 ");
  if (!data.pickupTime) errors.push("La hora de recojida es obligatorio");
  if (!data.vehicle) errors.push("El tipo de vehiculo es obligatorio");
  if (!data.totalPrice)
    errors.push("El precio total de la reserva es obligatorio");

  if (!data.type) errors.push("El tipo de reserva es obligatorio");

  if (data.type === "Traslado") {
    if (!data.destination)
      errors.push("El destino es obligatorio para las reservas tipo traslado");
  }

  if (data.type === "Recorrido") {
    if (!data.packageName)
      errors.push(
        "El nombre de paquete de viaje es obligatorio para las reservas tipo recorrido"
      );
  }

  if (data.withGuide && !data.guideLanguaje) {
    errors.push("El lenguaje es obligatorio para las reservas con guía");
  }

  if (errors.length > 0) {
    const err = new Error(errors.join(" | "));
    err.status = 400;
    throw err;
  }

  const reservation = new Reservation(data);
  await reservation.save();

  return reservation;
};

export const getAllReservationsService = async () => {
  return await Reservation.find().sort({ createdAt: -1 });
};

export const getReservationByIdService = async (id) => {
  const reservation = await Reservation.findById(id);

  if (!reservation) {
    const err = new Error("Reserva no encontrada");
    err.status = 404;
    throw err;
  }

  return reservation;
};

export const deleteReservationService = async (id) => {
  const reservation = await Reservation.findById(id);

  if (!reservation) {
    const err = new Error("Reserva no encontrada");
    err.status = 404;
    throw err;
  }

  if (reservation.status === "pendiente") {
    const err = new Error(
      "No se puede eliminar una reserva en estado pendiente"
    );
    err.status = 400;
    throw err;
  }

  await Reservation.findByIdAndDelete(id);
};

export const UpdateStatusService = async (id, status) => {
  const validStatuses = ["pendiente", "cancelada", "completada"];

  if (!validStatuses.includes(status)) {
    const err = new Error("Estado inválido");
    err.status = 400;
    throw err;
  }

  const updated = await Reservation.findByIdAndUpdate(
    id,
    { status },
    { new: true }
  );

  if (!updated) {
    const err = new Error("Reserva no encontrada");
    err.status = 404;
    throw err;
  }

  return updated;
};
