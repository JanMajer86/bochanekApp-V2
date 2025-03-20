import { StatusCodes } from "http-status-codes";
import User from "../models/UserModel.js";
import { createJWT } from "../utils/tokenUtils.js";
import { UnauthenticatedError } from "../errors/customErrors.js";

export const login = async (req, res) => {
	const user = await User.findOne({ name: req.body.name });
	const isValidUser = user && req.body.password === process.env.PASSWORD;
	if (!isValidUser) throw new UnauthenticatedError("login failed");

	const token = createJWT({ userId: user._id, name: user.name });

	const oneDay = 1000 * 60 * 60 * 20;
	res.cookie("token", token, {
		httpOnly: true,
		expires: new Date(Date.now() + oneDay),
		secure: process.env.NODE_ENV === "production",
	});

	res.status(StatusCodes.OK).json({ msg: "user logged in" });
};

export const logout = (req, res) => {
	res.cookie("token", "logout", {
		httpOnly: true,
		expires: new Date(Date.now()),
	});
	res.status(StatusCodes.OK).json({ msg: "user logged out" });
};
