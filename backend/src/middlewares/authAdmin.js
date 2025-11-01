import { adminKey } from "../config/config.js";

export const verifyAdminKey = (req, res, next) => {
  const apiKey = req.headers["x-api-key"];
  if (!apiKey || apiKey !== adminKey)
    return res.status(403).json({ message: "Acceso no autorizado" });

  next();
};
