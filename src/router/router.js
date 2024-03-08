import { Router } from "express";
import { getReviews } from "../controllers/controllers.js";

const router = Router();

router.get("/getReviews", getReviews);

export { router };
