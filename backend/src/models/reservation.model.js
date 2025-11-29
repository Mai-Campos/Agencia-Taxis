import mongoose from "mongoose";

const reservationSchema = mongoose.Schema(
  {
    // Tipo del servicio
    type: {
      type: String,
      enum: ["Traslado", "Recorrido"],
      required: true,
    },

    // Nombre del paquete si es recorrido
    packageName: {
      type: String,
      required: function () {
        return this.type === "Recorrido";
      },
      default: null,
      trim: true,
    },

    // Lugar de recojida
    pickupLocation: {
      type: String,
      required: true,
      trim: true,
    },

    // Destino del viaje solo para traslados
    destination: {
      type: String,
      required: function () {
        return this.type === "Traslado";
      },
      default: null,
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

    // Tipo de vehículo
    vehicle: {
      type: String,
      required: true,
      trim: true,
    },

    // Cantidad de pasajeros
    passengers: {
      type: Number,
      required: true,
      min: 1,
    },

    // Número de vuelo
    flightNumber: {
      type: String,
      deafult: null,
      trim: true,
    },

    // Nombre del cliente
    ownerName: {
      type: String,
      required: true,
      trim: true,
    },

    // Email del cliente
    ownerEmail: {
      type: String,
      required: true,
      lowercase: true, // Convierte a minúscula antes de guardar
      unique: true,
      match: [/.+\@.+\..+/, "El email no es válido"],
    },

    // Observaciones o descripcion de la reserva
    comments: {
      type: String,
      trim: true,
    },

    // Guía turístico (en principio siempre false)
    withGuide: {
      type: Boolean,
      default: false,
    },

    guideLanguaje: {
      type: String,
      required: function () {
        return this.withGuide === true;
      },
      default: null,
    },

    // Monto total de la reserva
    totalPrice: {
      type: Number,
      required: false,
      deafult: 0,
      min: 0,
    },

    // Estado de la reserva
    status: {
      type: String,
      enum: ["pendiente", "cancelada", "completada"],
      default: "pendiente",
    },
  },
  {
    timestamps: true,
  }
);

const Reservation = mongoose.model("Reservation", reservationSchema);

export default Reservation;
