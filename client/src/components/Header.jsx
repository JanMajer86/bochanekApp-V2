import Wrapper from "../assets/wrappers/Header";
import { useBochanekContext } from "../pages/DashboardLayout";

const Header = () => {
	const { user, logoutUser } = useBochanekContext();
	console.log(user);
	return (
		<Wrapper>
			<h2>logo here</h2>
			<div className="header-btn-container">
				<span>user: {user.name}</span>
				<button className="btn" onClick={logoutUser}>
					logout
				</button>
			</div>
		</Wrapper>
	);
};
export default Header;
