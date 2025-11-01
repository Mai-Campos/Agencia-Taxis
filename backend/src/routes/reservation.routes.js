import { Router } from "express";
import {
  getAllReservations,
  getReservationById,
  createReservation,
  deleteReservation,
  updateStatus,
} from "../controllers/reservation.controller.js";
import { verifyAdminKey } from "../middlewares/authAdmin.js";

const router = Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Reservation:
 *       type: object
 *       required:
 *         - ownerName
 *         - ownerEmail
 *         - pickupLocation
 *         - destination
 *         - totalPrice
 *         - pickupDate
 *         - pickupTime
 *         - passengers
 *         - vehicle
 *         - comments
 *       properties:
 *         _id:
 *           type: string
 *           description: ID autogenerado por MongoDB
 *         ownerName:
 *           type: string
 *           description: Nombre del propietario de la reserva
 *         ownerEmail:
 *           type: string
 *           description: Correo del propietario de la reserva
 *         flightNumber:
 *           type: string
 *           description: Número identificador de vuelo (opcional)
 *         pickupLocation:
 *           type: string
 *           description: Dirección de recogida
 *         destination:
 *           type: string
 *           description: Lugar de destino
 *         totalPrice:
 *           type: number
 *           description: Precio total de la reserva
 *         pickupDate:
 *           type: string
 *           format: date
 *           description: Fecha de recogida
 *         pickupTime:
 *           type: string
 *           description: Hora de recogida
 *         passengers:
 *           type: number
 *           description: Cantidad de pasajeros
 *         vehicle:
 *           type: string
 *           description: Vehiculo seleccionado
 *         status:
 *           type: string
 *           enum: [pendiente, cancelada, completada]
 *           description: Estado actual de la reserva
 *         guide:
 *           type: boolean
 *           description: Indica si el cliente solicita un guía (por defecto false)
 *       example:
 *         ownerName: Juan Pérez
 *         ownerEmail: juan@example.com
 *         pickupLocation: "Av. Bolívar 123"
 *         destination: "Aeropuerto Internacional"
 *         totalPrice: 35
 *         pickupDate: "2025-11-01"
 *         pickupTime: "10:30"
 *         passengers: 2
 *         status: "pendiente"
 *         comments: "LLevo una maleta y 3 mochilas"
 *         guide: false
 *         vehicle: "Engrand"
 */

/**
 * @swagger
 * tags:
 *   name: Reservas
 *   description: Endpoints para gestionar reservas de taxis
 */

/**
 * @swagger
 * /reservations:
 *   get:
 *     summary: Obtener todas las reservas (sólo admin)
 *     tags: [Reservas]
 *     security:
 *       - ApiKeyAuth: []
 *     responses:
 *       200:
 *         description: Lista de todas las reservas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Reservation'
 *       403:
 *         description: Acceso no autorizado
 */
router.get("/", verifyAdminKey, getAllReservations);

/**
 * @swagger
 * /reservations/{id}:
 *   get:
 *     summary: Obtener una reserva por su ID
 *     tags: [Reservas]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID de la reserva
 *     responses:
 *       200:
 *         description: Reserva encontrada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Reservation'
 *       404:
 *         description: Reserva no encontrada
 */
router.get("/:id", getReservationById);

/**
 * @swagger
 * /reservations:
 *   post:
 *     summary: Crear una nueva reserva
 *     tags: [Reservas]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Reservation'
 *     responses:
 *       201:
 *         description: Reserva creada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Reservation'
 *
 *
 */
router.post("/", createReservation);

/**
 * @swagger
 * /reservations/{id}:
 *   delete:
 *     summary: Eliminar una reserva (sólo admin)
 *     tags: [Reservas]
 *     security:
 *       - ApiKeyAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID de la reserva a eliminar
 *     responses:
 *       200:
 *         description: Reserva eliminada exitosamente
 *       400:
 *         description: No se puede eliminar una reserva pendiente
 *       404:
 *         description: Reserva no encontrada
 *       403:
 *         description: Acceso no autorizado
 */
router.delete("/:id", verifyAdminKey, deleteReservation);

/**
 * @swagger
 * /reservations/{id}/status:
 *   patch:
 *     summary: Actualizar el estado de una reserva (sólo admin)
 *     tags: [Reservas]
 *     security:
 *       - ApiKeyAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID de la reserva
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               status:
 *                 type: string
 *                 enum: [pendiente, cancelada, completada]
 *     responses:
 *       200:
 *         description: Estado actualizado correctamente
 *       400:
 *         description: Valor de estado inválido
 *
 *       403:
 *         description: Acceso no autorizado
 */
router.patch("/:id/status", verifyAdminKey, updateStatus);

export default router;
