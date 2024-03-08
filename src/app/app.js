import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import { router } from "../router/router.js";

const app = express();

// Settings
app.set("PORT", process.env.PORT);
app.set("GOOGLE_API_KEY", process.env.GOOGLE_API_KEY);
app.set("PLACE_NAME", process.env.PLACE_NAME);

// Middlewares
app.use(cors());

// Router
app.use("/", router);

// Export
export { app };
