import { config } from "dotenv";
config();

export const port = process.env.PORT;
export const mongoUri = process.env.MONGO_URI;
