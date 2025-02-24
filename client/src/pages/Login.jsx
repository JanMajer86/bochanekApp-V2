import { Form, redirect, useNavigation } from "react-router-dom";
import Wrapper from "../assets/wrappers/Login";
import { FormRow, FormButtonSelect } from "../components";
import customFetch from "../utils/customFetch";
import { USERS } from "../../../server/utils/constants";

export const action = async ({ request }) => {
	const formData = await request.formData();
	const data = Object.fromEntries(formData);
	try {
		await customFetch.post("/auth/login", data);
		return redirect("/all-bochaneks");
	} catch (error) {
		console.log(error);
		return error;
	}
};

const Login = () => {
	const isSubmitting = useNavigation().state === "submitting";
	const userNames = Object.values(USERS);

	return (
		<Wrapper>
			<Form method="POST" className="form">
				<FormButtonSelect
					name="name"
					value1={userNames[0]}
					value2={userNames[1]}
				/>
				<FormRow type="password" name="password" />
				<button type="submit" className="btn btn-block">
					{isSubmitting ? "logging in..." : "login"}
				</button>
			</Form>
		</Wrapper>
	);
};
export default Login;
