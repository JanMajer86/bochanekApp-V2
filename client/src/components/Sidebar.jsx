import { Link } from "react-router-dom";

const Sidebar = ({ handleControlPanel }) => {
	return (
		<div>
			<p>sidebar</p>
			<button className="btn" onClick={handleControlPanel}>
				control panel
			</button>
			<Link to="/all-bochaneks/create-bochanek">
				<button className="btn">ADD NEW</button>
			</Link>
		</div>
	);
};
export default Sidebar;
