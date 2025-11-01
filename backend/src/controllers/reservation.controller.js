import Reservation from "../models/reservation.model.js";

export const createReservation = async (req, res) => {
  try {
    const newReservation = new Reservation(req.body);
    await newReservation.save();
    res.status(201).json(newReservation);
  } catch (error) {
    console.error("Error al crear la reserva", error.message);
    res.status(400).json({ message: error.message });
  }
};

export const getAllReservations = async (req, res) => {
  try {
    const reservations = await Reservation.find().sort({ createdAt: -1 });
    res.status(200).json(reservations);
  } catch (error) {
    console.error("Error al obtener todas las reservas", error.message);
    res.status(500).json({ message: "Error al obtener las reservas" });
  }
};

export const getReservationById = async (req, res) => {
  try {
    const { id } = req.params;
    const reservation = await Reservation.findById(id);

    if (!reservation)
      return res.status(404).json({ message: "Reserva no encontrada" });

    return res.status(200).json(reservation);
  } catch (error) {
    console.error("Error al obtener reserva por id", error.message);
    res.status(500).json({ message: "Error al obtener reserva por id" });
  }
};

export const deleteReservation = async (req, res) => {
  try {
    const { id } = req.params;

    const reservation = await Reservation.findById(id);
    if (!reservation)
      return res.status(404).json({ message: "Reserva no encontrada" });

    if (reservation.status === "pendiente")
      return res.status(400).json({
        message: "No es posible eliminar una reserva con estado pendiente",
      });

    await Reservation.findByIdAndDelete(id);

    res.status(200).json({ message: "Reserva eliminada correctamente" });
  } catch (error) {
    console.error("Error al eliminar reserva", error.message);
    res.status(500).json({ message: "Error al eliminar la reserva" });
  }
};

export const updateStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const validStatuses = ["pendiente", "cancelada", "completada"];

    if (!validStatuses.includes(status)) {
      return res.status(400).json({
        message:
          "Estado inválido, los valores permitidos son pendiente, cancelada y completada",
      });
    }

    const updatedReservation = await Reservation.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );

    if (!updatedReservation)
      return res.status(404).json({ message: "Reserva no encontrada" });

    res.status(200).json({
      message: `Estado actualizado a "${status}" correctamente`,
      updatedReservation,
    });
  } catch (error) {
    console.error("Error al actualizar el estado", error.message);
    res.status(500).json({ message: "Error al actualizar estado" });
  }
};
