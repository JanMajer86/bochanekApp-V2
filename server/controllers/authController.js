import User from "../models/UserModel.js";
import { createJWT } from "../utils/tokenUtils.js";

export const login = async (req, res) => {
	console.log(req.body);
	const user = await User.findOne({ name: req.body.name });
	const isValidUser = user && req.body.password === process.env.PASSWORD;
	if (!isValidUser) throw new Error("login failed");
	const token = createJWT({ userId: user._id, name: user.name });
	const oneDay = 1000 * 60 * 60 * 20;
	res.cookie("token", token, {
		httpOnly: true,
		expires: new Date(Date.now() + oneDay),
		secure: process.env.NODE_ENV === "production",
	});

	res.status(200).json({ msg: "user logged in" });
};
