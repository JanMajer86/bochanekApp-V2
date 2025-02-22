import mongoose, { mongo } from "mongoose";
import { USERS } from "../utils/constants.js";

const UserSchema = new mongoose.Schema({
	name: {
		type: String,
		enum: Object.values(USERS),
	},
});

export default mongoose.model("User", UserSchema);
