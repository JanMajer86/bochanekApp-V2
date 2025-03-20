import { Outlet } from "react-router-dom";

const HomeLayout = () => {
	return (
		<div className="app">
			<Outlet />
		</div>
	);
};
export default HomeLayout;
