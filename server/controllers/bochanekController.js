import Bochanek from "../models/BochanekModel.js";

export const getAllBochaneks = async (req, res) => {
	const bochanci = await Bochanek.find({});
	res.status(200).json({ msg: "bochanek route", bochanci, user: req.user });
};

export const createBochanek = async (req, res) => {
	console.log(req.user);
	req.body.createdBy = req.user.name;
	const bochanek = await Bochanek.create(req.body);
	res.status(200).json({ msg: "bochanek created", bochanek });
};

export const deleteBochanek = async (req, res) => {
	const { id } = req.params;
	const removedBochanek = await Bochanek.findByIdAndDelete(id);
	res.status(200).json({ msg: "bochanek deleted", removedBochanek });
};
