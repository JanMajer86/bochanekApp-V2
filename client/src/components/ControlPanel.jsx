import Wrapper from "../assets/wrappers/ControlPanel";
import { useGlobalContext } from "../pages/DashboardLayout";

const ControlPanel = ({ isVisible }) => {
	const { handleSetParamsObj } = useGlobalContext();

	return (
		<Wrapper>
			<div className={`control-panel ${isVisible ? "visible" : "hidden"}`}>
				<h4>ControlPanel</h4>
				group by:
				<div className="btn-control-row">
					<button
						className="btn"
						onClick={() => handleSetParamsObj("groupBy", "letter")}
					>
						ABECEDA
					</button>
					<button
						className="btn"
						onClick={() => handleSetParamsObj("groupBy", "gender")}
					>
						GENDER
					</button>
					<button
						className="btn"
						onClick={() => handleSetParamsObj("groupBy", "user")}
					>
						PŘIDÁNO
					</button>
				</div>
			</div>
		</Wrapper>
	);
};
export default ControlPanel;
