import { verifyJWT } from "../utils/tokenUtils.js";

export const authenticateUser = (req, res, next) => {
	const { token } = req.cookies;
	if (!token) return res.status(404).json({ msg: "authentication failed" });
	try {
		const { userId, name } = verifyJWT(token);
		req.user = { userId, name };
	} catch (error) {
		console.log(error);
	}
	next();
};
