export const verifyAdminKey = (req, res, next) => {
  const apiKey = req.headers["x-api-key"];
  if (!apiKey || apiKey !== process.env.ADMIN_API_KEY)
    return res.status(403).json({ message: "Acceso no autorizado" });

  next();
};
