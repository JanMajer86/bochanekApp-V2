import customFetch from "../utils/customFetch";
import { redirect } from "react-router-dom";

export const action = async ({ params }) => {
	try {
		await customFetch.delete(`/bochanek/${params.id}`);
	} catch (error) {
		console.log(error);
		return error;
	}
	return redirect("/all-bochaneks");
};

const DeleteBochanek = () => {
	return <div>DeleteBochanek</div>;
};
export default DeleteBochanek;
