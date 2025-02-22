import User from "../models/UserModel.js";

export const login = async (req, res) => {
	const user = await User.findOne({ name: req.body.user });
	console.log(user);
	const isValidUser = user && req.body.password === process.env.PASSWORD;

	if (!isValidUser) throw new Error("login failed");

	res.status(200).json({ msg: "user logged in" });
};
