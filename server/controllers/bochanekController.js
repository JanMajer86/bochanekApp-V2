import Bochanek from "../models/BochanekModel.js";
import { StatusCodes } from "http-status-codes";

// 200 OK OK
// 201 CREATED Created

// 400 BAD_REQUEST Bad Request
// 401 UNAUTHORIZED Unauthorized

// 403 FORBIDDEN Forbidden
// 404 NOT_FOUND Not Found

// 500 INTERNAL_SERVER_ERROR Internal Server Error

export const getAllBochaneks = async (req, res) => {
	const bochanci = await Bochanek.find({}).sort({ createdAt: -1 });
	res
		.status(StatusCodes.OK)
		.json({ msg: "bochanek route", bochanci, user: req.user });
};

export const getOneBochanek = async (req, res) => {
	const { id } = req.params;
	const bochanek = await Bochanek.findById(id);
	res.status(StatusCodes.OK).json({ bochanek });
};

export const createBochanek = async (req, res) => {
	req.body.createdBy = req.user.name;
	const bochanek = await Bochanek.create(req.body);
	res.status(StatusCodes.CREATED).json({ msg: "bochanek created", bochanek });
};

export const editBochanek = async (req, res) => {
	const { id } = req.params;
	const updatedBochanek = await Bochanek.findByIdAndUpdate(id, req.body, {
		new: true,
	});
	res.status(StatusCodes.OK).json({ msg: "edit route", updatedBochanek });
};

export const deleteBochanek = async (req, res) => {
	const { id } = req.params;
	const removedBochanek = await Bochanek.findByIdAndDelete(id);
	res.status(StatusCodes.OK).json({ msg: "bochanek deleted", removedBochanek });
};
