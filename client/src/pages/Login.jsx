import { Form, redirect, useNavigation } from "react-router-dom";
import Wrapper from "../assets/wrappers/Login";
import FormRow from "../components/FormRow";
import customFetch from "../utils/customFetch";

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

	return (
		<Wrapper>
			<Form method="POST">
				<div className="form-row">
					<label htmlFor="user">select user</label>

					<input type="radio" name="user" id="Honza" value="Honza" required />
					<label htmlFor="Honza" className="btn">
						Honza
					</label>
					<input
						type="radio"
						name="user"
						id="Kristýna"
						value="Kristýna"
						required
					/>
					<label htmlFor="Kristýna" className="btn">
						Kristýna
					</label>
				</div>
				<FormRow type="password" name="password" />
				<button type="submit">
					{isSubmitting ? "logging in..." : "login"}
				</button>
			</Form>
		</Wrapper>
	);
};
export default Login;
