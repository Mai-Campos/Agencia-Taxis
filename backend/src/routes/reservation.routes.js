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
 *         - type
 *         - pickupLocation
 *         - pickupDate
 *         - pickupTime
 *         - vehicle
 *         - passengers
 *         - ownerName
 *         - ownerEmail
 *       properties:
 *         _id:
 *           type: string
 *           description: ID autogenerado por MongoDB

 *         type:
 *           type: string
 *           enum: [Traslado, Recorrido]
 *           description: Tipo de servicio solicitado

 *         packageName:
 *           type: string
 *           nullable: true
 *           description: Nombre del paquete (solo si type = Recorrido)

 *         pickupLocation:
 *           type: string
 *           description: Lugar donde se recogerá al cliente

 *         destination:
 *           type: string
 *           nullable: true
 *           description: Destino del traslado (solo si type = Traslado)

 *         pickupDate:
 *           type: string
 *           format: date
 *           description: Fecha de recogida

 *         pickupTime:
 *           type: string
 *           description: 'Hora de recogida (ej: 14:30)'

 *         vehicle:
 *           type: string
 *           description: Tipo de vehículo elegido

 *         passengers:
 *           type: number
 *           description: Número de pasajeros

 *         flightNumber:
 *           type: string
 *           nullable: true
 *           description: Número de vuelo (solo si la recogida es en aeropuerto)

 *         ownerName:
 *           type: string
 *           description: Nombre del cliente que realiza la reserva

 *         ownerEmail:
 *           type: string
 *           description: Correo electrónico del cliente

 *         comments:
 *           type: string
 *           nullable: true
 *           description: Comentarios adicionales del cliente

 *         withGuide:
 *           type: boolean
 *           description: Indica si se solicita guía turístico

 *         guideLanguage:
 *           type: string
 *           nullable: true
 *           description: Idioma solicitado del guía (solo si withGuide = true)

 *         totalPrice:
 *           type: number
 *           description: Precio total de la reserva

 *         status:
 *           type: string
 *           enum: [pendiente, cancelada, completada]
 *           description: Estado actual de la reserva

 *         createdAt:
 *           type: string
 *           format: date-time

 *         updatedAt:
 *           type: string
 *           format: date-time

 *       example:
 *         type: "Traslado"
 *         pickupLocation: "Aeropuerto José Martí"
 *         destination: "Vedado, La Habana"
 *         pickupDate: "2025-11-01"
 *         pickupTime: "10:30"
 *         passengers: 2
 *         vehicle: "SUV"
 *         flightNumber: "CU-123"
 *         ownerName: "Juan Pérez"
 *         ownerEmail: "juan@example.com"
 *         comments: "Viajo con equipaje adicional"
 *         withGuide: false
 *         guideLanguage: null
 *         totalPrice: 45
 *         status: "pendiente"
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
