import { Form } from "react-router-dom";
import Wrapper from "../assets/wrappers/Login";
import FormRow from "../components/FormRow";

export const action = async ({ request }) => {
	const formData = await request.formData();
	const data = Object.fromEntries(formData);
	console.log(data);
	return null;
};

const Login = () => {
	return (
		<Wrapper>
			<Form method="POST">
				<div className="form-row">
					<label htmlFor="user">select user</label>

					<input type="radio" name="user" id="honza" value="honza" required />
					<label htmlFor="honza" className="btn">
						honza
					</label>
					<input
						type="radio"
						name="user"
						id="kristyna"
						value="kristýna"
						required
					/>
					<label htmlFor="kristyna" className="btn">
						kristýna
					</label>
				</div>
				<FormRow type="text" name="password" />
				<button type="submit">login</button>
			</Form>
		</Wrapper>
	);
};
export default Login;
