import mongoose from "mongoose";

const BochanekSchema = new mongoose.Schema(
	{
		name: String,
		gender: String,
		createdBy: String,
	},
	{ timestamps: true }
);

export default mongoose.model("Bochanek", BochanekSchema);
