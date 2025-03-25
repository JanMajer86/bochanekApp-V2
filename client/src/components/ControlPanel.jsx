import Wrapper from "../assets/wrappers/ControlPanel";
import { useGlobalContext } from "../pages/DashboardLayout";

const ControlPanel = ({ isVisible }) => {
	const { handleGroupBy } = useGlobalContext();
	console.log(handleGroupBy);
	return (
		<Wrapper>
			<div className={`control-panel ${isVisible ? "visible" : "hidden"}`}>
				<h4>ControlPanel</h4>
				group by:
				<div className="btn-control-row">
					<button className="btn" onClick={() => handleGroupBy("letter")}>
						ABECEDA
					</button>
					<button className="btn" onClick={() => handleGroupBy("gender")}>
						GENDER
					</button>
					<button className="btn" onClick={() => handleGroupBy("user")}>
						PŘIDÁNO
					</button>
				</div>
			</div>
		</Wrapper>
	);
};
export default ControlPanel;
