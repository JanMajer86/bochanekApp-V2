import { body, param, validationResult } from "express-validator";
import {
	BadRequestError,
	NotFoundError,
	UnauthorizedErrorn,
} from "../errors/customErrors";
import { USERS } from "../utils/constants";
import mongoose from "mongoose";

const withValidationErrors = (validateValues) => {
	return [
		validateValues,
		(req, res, next) => {
			const errors = validationResult(req);
			if (!errors.isEmpty()) {
				const errorMessages = errors.array().map((error) => error.msg);
				throw new BadRequestError(errorMessages);
			}
			next();
		},
	];
};

export const validateIdParam = withValidationErrors([]);

export const validateLoginInput = withValidationErrors([
	body("name").notEmpty().withMessage("user name is required"),
	body("password").notEmpty().withMessage("password is required"),
]);
