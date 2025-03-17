import { body, param, validationResult } from "express-validator";
import {
	BadRequestError,
	NotFoundError,
	UnauthorizedError,
} from "../errors/customErrors.js";
import { USERS } from "../utils/constants.js";
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
