import express from "express";
import cors from "cors";
import reservationRoutes from "./routes/reservation.routes.js";
import { swaggerSpecs, swaggerUi } from "./docs/swagger.js";
import { config } from "dotenv";

config();
const app = express();

// Middlewares
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());

//Rutas
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpecs));
app.use("/api/reservations", reservationRoutes);

export default app;
