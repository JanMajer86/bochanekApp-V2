import { Form, redirect, useNavigate } from "react-router-dom";
import Wrapper from "../assets/wrappers/Modal";
// import { FormRow, FormButtonSelect } from ".";
import customFetch from "../utils/customFetch";
import { StarRatingInput } from "./";

export const action = async ({ request }) => {
	const formData = await request.formData();
	const data = Object.fromEntries(formData);
	try {
		await customFetch.post("/bochanek", data);
		return redirect("/all-bochaneks");
	} catch (error) {
		console.log(error);
	}
	return null;
};

const CreateModal = () => {
	const navigate = useNavigate();
	return (
		<Wrapper>
			<div className="modal">
				<h3>RATE THIS BOCHÁNEK</h3>
				<Form method="POST">
					<StarRatingInput
						rating={rating}
						onRate={(newRating) => {
							customFetch
								.post(`/bochanek/${_id}/rate`, { value: newRating })
								.then(() => setRating(newRating));
						}}
					/>

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
export default CreateModal;
