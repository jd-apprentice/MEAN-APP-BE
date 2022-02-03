import app from "./server.mjs";
import dotenv from "dotenv";
import "./database.mjs";
dotenv.config();
app.listen(process.env.PORT);
