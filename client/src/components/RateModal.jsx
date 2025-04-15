import { Form, redirect, useNavigate, useLoaderData } from "react-router-dom";
import Wrapper from "../assets/wrappers/Modal";
import customFetch from "../utils/customFetch";
import { StarRatingInput } from "./";
import { useState } from "react";

export const loader = async ({ request, params }) => {
	try {
		const url = new URL(request.url);
		const userRating = url.searchParams.get("userRating");
		return { userRating, id: params.id };
	} catch (error) {
		console.log(error);
	}
	return null;
};

export const action = async ({ request, params }) => {
	const formData = await request.formData();
	const rating = parseInt(formData.get("rating"));
	const { id } = params;
	try {
		await customFetch.post(`/bochanek/${id}/rate`, { value: rating });
		return redirect("/all-bochaneks");
	} catch (error) {
		console.log(error);
	}
	return null;
};

const RateModal = () => {
	const navigate = useNavigate();
	const { userRating } = useLoaderData();
	const [rating, setRating] = useState(userRating);

	return (
		<Wrapper>
			<div className="modal">
				<h3>RATE THIS BOCHÁNEK</h3>
				<Form method="POST">
					<StarRatingInput rating={rating} setRating={setRating} />
					<button type="submit" className="btn btn-block">
						RATE
					</button>
				</Form>
				<button className="btn btn-block" onClick={() => navigate(-1)}>
					CANCEL
				</button>
			</div>
		</Wrapper>
	);
};
export default RateModal;
