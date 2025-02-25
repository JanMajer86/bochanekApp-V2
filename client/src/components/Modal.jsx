import { useLoaderData, useNavigate } from "react-router-dom";
import Wrapper from "../assets/wrappers/Modal";
import customFetch from "../utils/customFetch";
import FormRow from "./FormRow";

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

const Modal = () => {
	const data = useLoaderData();
	const navigate = useNavigate();

	return (
		<Wrapper>
			<div className="modal">
				modal
				<FormRow
					type="text"
					name="Bochánek - jméno"
					defaultValue={data.bochanek.name}
				/>
				<button onClick={() => navigate(-1)}>Close</button>
			</div>
			;
		</Wrapper>
	);
};
export default Modal;
