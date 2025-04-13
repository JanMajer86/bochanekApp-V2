import { Router } from "express";
import {
	createBochanek,
	createRating,
	deleteBochanek,
	editBochanek,
	getAllBochaneks,
	getOneBochanek,
} from "../controllers/bochanekController.js";

const router = Router();

router.route("/").get(getAllBochaneks).post(createBochanek);
router
	.route("/:id")
	.get(getOneBochanek)
	.patch(editBochanek)
	.delete(deleteBochanek);
router.route("/:id/rate").post(createRating);

export default router;
