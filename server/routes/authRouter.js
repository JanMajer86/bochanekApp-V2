import { Router } from "express";
import { login, logout } from "../controllers/authController.js";
import { validateLoginInput } from "../middleware/validationMiddleware.js";

const router = Router();

router.post("/login", validateLoginInput, login);
router.post("/logout", logout);

export default router;
