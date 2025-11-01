import mongoose from "mongoose";

export const connectDb = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log("Conectado a mongoDb");
  } catch (error) {
    console.error("Error al conectar a mongoDb", error.message);
    process.exit(1);
  }
};
