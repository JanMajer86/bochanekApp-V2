import { Router } from "express";
import {
	createBochanek,
	getAllBochaneks,
} from "../controllers/bochanekController.js";

const router = Router();

router.route("/").get(getAllBochaneks).post(createBochanek);

export default router;
