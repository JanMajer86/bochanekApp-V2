import { readFile } from "fs/promises";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

import Bochanek from "./models/BochanekModel.js";

mongoose
	.connect(process.env.MONGO_URI)
	.then(() => console.log("db connection successfull"))
	.catch((err) => console.log(`db connection error - ${err}`));

// READ
const bochaneks = JSON.parse(
	await readFile(new URL("./utils/mockData.json", import.meta.url))
);

// IMPORT
const importData = async () => {
	try {
		await Bochanek.create(bochaneks);
		console.log("db populated");
	} catch (error) {
		console.log(error);
	}
	process.exit();
};

// DELETE
const deleteData = async () => {
	try {
		await Bochanek.deleteMany();
		console.log("db cleared");
	} catch (error) {
		console.log(error);
	}
	process.exit();
};

if (process.argv[2] === "--import") importData();
if (process.argv[2] === "--delete") deleteData();
