import { Router } from "express";
import {
	createBochanek,
	deleteBochanek,
	getAllBochaneks,
} from "../controllers/bochanekController.js";

const router = Router();

router.route("/").get(getAllBochaneks).post(createBochanek);
router.route("/:id").delete(deleteBochanek);

export default router;
