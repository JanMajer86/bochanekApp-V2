import express from "express";
import connectDB from "./utils/connectDB.js";
import "dotenv/config";
import "express-async-errors";
import cookieParser from "cookie-parser";

const app = express();

// middleware
import errorHandlerMiddleware from "./middleware/errorHandlerMiddleware.js";
import { authenticateUser } from "./middleware/authMiddleware.js";
app.use(cookieParser());
app.use(express.json());
app.use(errorHandlerMiddleware);

// routers
import authRouter from "./routes/authRouter.js";
import bochanekRouter from "./routes/bochanekRouter.js";

// ROUTES
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/bochanek", authenticateUser, bochanekRouter);
// non-valid route
app.use("*", (req, res) => {
	res.status(404).json({ msg: "not found" });
});

/////////
// SERVER
const port = process.env.PORT || 5000;

try {
	await connectDB(process.env.MONGO_URI);

	app.listen(port, () => {
		console.log("server running...");
	});
} catch (error) {
	console.log(error);
	process.exit(1);
}
