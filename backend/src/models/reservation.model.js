import mongoose from "mongoose";

const reservationSchema = mongoose.Schema(
  {
    // Nombre del cliente
    ownerName: {
      type: String,
      required: true,
      trim: true, // Elimina espacios en blanco al inicio y al final
    },

    // Email del cliente
    ownerEmail: {
      type: String,
      required: true,
      lowercase: true, // Convierte a minúscula antes de guardar
      unique: true,
      match: [/.+\@.+\..+/, "El email no es válido"],
    },

    // Destino del viaje
    destination: {
      type: String,
      required: true,
    },

    // Lugar de recojida
    pickupLocation: {
      type: String,
      required: true,
      trim: true,
    },

    // Fecha de recojida
    pickupDate: {
      type: Date,
      required: true,
    },

    // Hora de recojida
    pickupTime: {
      type: String,
      required: true,
    },

    // Monto total de la reserva
    totalPrice: {
      type: Number,
      required: true,
      min: 0,
    },

    // Tipo de vehículo
    vehicle: {
      type: String,
      required: true,
    },

    // Cantidad de pasajeros
    passengers: {
      type: Number,
      required: true,
      min: 1,
    },

    // Estado de la reserva
    status: {
      type: String,
      enum: ["pendiente", "cancelada", "completada"],
      default: "pendiente",
    },

    // Observaciones o descripcion de la reserva
    comments: {
      type: String,
      trim: true,
    },

    // Guía turístico (en principio siempre false)
    guide: {
      type: Boolean,
      default: false,
    },

    // Número de vuelo
    flightNumber: {
      type: String,
      required: false,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const Reservation = mongoose.model("Reservation", reservationSchema);

export default Reservation;
