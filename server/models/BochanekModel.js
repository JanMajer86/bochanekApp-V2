import mongoose from "mongoose";

const RatingSchema = new mongoose.Schema(
	{
		user: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
			required: true,
		},
		value: {
			type: Number,
			required: true,
			min: 1,
			max: 5,
		},
	},
	{ _id: false }
);

const BochanekSchema = new mongoose.Schema(
	{
		name: String,
		gender: String,
		createdBy: String,
		ratings: [RatingSchema],
	},
	{ timestamps: true }
);

export default mongoose.model("Bochanek", BochanekSchema);
