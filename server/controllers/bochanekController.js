import Bochanek from "../models/BochanekModel.js";

export const getAllBochaneks = async (req, res) => {
	const bochanci = await Bochanek.find({}).sort({ createdAt: -1 });
	res.status(200).json({ msg: "bochanek route", bochanci, user: req.user });
};

export const getOneBochanek = async (req, res) => {
	const { id } = req.params;
	const bochanek = await Bochanek.findById(id);
	res.status(200).json({ bochanek });
};

export const createBochanek = async (req, res) => {
	req.body.createdBy = req.user.name;
	const bochanek = await Bochanek.create(req.body);
	res.status(200).json({ msg: "bochanek created", bochanek });
};

export const editBochanek = async (req, res) => {
	const { id } = req.params;
	const updatedBochanek = await Bochanek.findByIdAndUpdate(id, req.body, {
		new: true,
	});
	res.status(200).json({ msg: "edit route", updatedBochanek });
};

export const deleteBochanek = async (req, res) => {
	const { id } = req.params;
	const removedBochanek = await Bochanek.findByIdAndDelete(id);
	res.status(200).json({ msg: "bochanek deleted", removedBochanek });
};
