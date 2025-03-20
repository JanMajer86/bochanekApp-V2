import { Form, redirect, useNavigate } from "react-router-dom";
import Wrapper from "../assets/wrappers/Modal";
import { FormRow, FormButtonSelect } from ".";
import customFetch from "../utils/customFetch";

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
				<h3>Create Bochánek</h3>
				<Form method="POST">
					<FormRow type="text" name="name" labelText="Bochánek - jméno" />
					<FormButtonSelect
						name="gender"
						label="select gender"
						value1="male"
						value2="female"
					/>

					<button type="submit" className="btn btn-block">
						CREATE
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
