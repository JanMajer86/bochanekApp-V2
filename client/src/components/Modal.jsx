import { Form, redirect, useLoaderData, useNavigate } from "react-router-dom";
import Wrapper from "../assets/wrappers/Modal";
import customFetch from "../utils/customFetch";
import { FormRow, FormButtonSelect } from "./";

export const loader = async ({ params }) => {
	try {
		const { data } = await customFetch.get(`/bochanek/${params.id}`);
		return data;
	} catch (error) {
		console.log(error);
	}
	console.log("modal loader");
	return null;
};

export const action = async ({ request, params }) => {
	const formData = await request.formData();
	const data = Object.fromEntries(formData);
	console.log(data);
	try {
		await customFetch.patch(`/bochanek/${params.id}`, data);
		return redirect("/all-bochaneks");
	} catch (error) {
		console.log(error);
		return error;
	}
};

const Modal = () => {
	const data = useLoaderData();
	const navigate = useNavigate();

	console.log(data.bochanek.name);
	console.log(data.bochanek.gender);

	return (
		<Wrapper>
			<div className="modal">
				<Form method="POST">
					<FormRow
						type="text"
						name="name"
						labelText="Bochánek - jméno"
						defaultValue={data.bochanek.name}
					/>
					<FormButtonSelect
						name="gender"
						label="select gender"
						value1="male"
						value2="female"
						defaultValue={data.bochanek.gender}
					/>

					<button type="submit">UPDATE</button>
				</Form>
				<button onClick={() => navigate(-1)}>CANCEL</button>
			</div>
			;
		</Wrapper>
	);
};
export default Modal;
