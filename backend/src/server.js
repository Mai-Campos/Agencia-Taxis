import app from "./app.js";
import { port } from "./config/config.js";
import { connectDb } from "./database/connection.js";

connectDb();

app.listen(port, () => {
  console.log("Server listen on port", port);
});
