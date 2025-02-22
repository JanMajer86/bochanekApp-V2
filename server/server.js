import express from "express";
import connectDB from "./utils/connectDB.js";
import mongoose from "mongoose";
import "dotenv/config";
import Bochanek from "./models/BochanekModel.js";

const app = express();
app.use(express.json());

// ROUTES
app.get("/api/v1/bochanek", async (req, res) => {
	const bochanci = await Bochanek.find({});
	res.status(200).json({ msg: "bochanek route", bochanci });
});

// TEST
app.get("/api/v1/test", (req, res) => {
	res.json({ msg: "test route" });
});

app.use("/api/v1", (req, res) => {
	res.status(200).json({ msg: "hello from the server" });
});

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
