import mongoose from "mongoose";
import { mongoUri } from "../config/config.js";

export const connectDb = async () => {
  try {
    await mongoose.connect(mongoUri);
    console.log("Conectado a mongoDb");
  } catch (error) {
    console.error("Error al conectar a mongoDb", error.message);
    process.exit(1);
  }
};
