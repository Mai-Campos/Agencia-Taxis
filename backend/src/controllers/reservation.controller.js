import { sendNewReservationEmail } from "../services/email.service.js";
import { notifyAdminReservation } from "../services/telegram.service.js";
import {
  createReservationService,
  getAllReservationsService,
  getReservationByIdService,
  UpdateStatusService,
  deleteReservationService,
} from "../services/reservation.service.js";

export const createReservation = async (req, res) => {
  try {
    const reservation = await createReservationService(req.body);

    // Enviar email de notificación a la empresa
    await sendNewReservationEmail(reservation);

    await notifyAdminReservation(reservation);

    res.status(201).json(reservation);
  } catch (error) {
    res.status(error.status || 500).json({ message: error.message });
  }
};

export const getAllReservations = async (req, res) => {
  try {
    const reservations = await getAllReservationsService();
    res.status(200).json(reservations);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener las reservas" });
  }
};

export const getReservationById = async (req, res) => {
  try {
    const { id } = req.params;
    const reservation = await getReservationByIdService(id);
    return res.status(200).json(reservation);
  } catch (error) {
    res.status(error.status || 500).json({ message: error.message });
  }
};

export const deleteReservation = async (req, res) => {
  try {
    const { id } = req.params;

    await deleteReservationService(id);
    res.status(200).json({ message: "Reserva eliminada correctamente" });
  } catch (error) {
    res.status(error.status || 500).json({ message: error.message });
  }
};

export const updateStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const updated = await UpdateStatusService(id, status);

    res.status(200).json({
      message: `Estado actualizado a "${status}" correctamente`,
      updated,
    });
  } catch (error) {
    res.status(error.status || 500).json({ message: error.message });
  }
};
