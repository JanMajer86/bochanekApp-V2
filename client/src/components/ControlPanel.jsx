import Wrapper from "../assets/wrappers/ControlPanel";

const ControlPanel = ({ isVisible }) => {
	return (
		<Wrapper>
			<div className={`control-panel ${isVisible ? "visible" : "hidden"}`}>
				ControlPanel
				<div className="btn-control-row">
					<button className="btn">ABECEDA</button>
					<button className="btn">GENDER</button>
					<button className="btn">PŘIDÁNO</button>
				</div>
			</div>
		</Wrapper>
	);
};
export default ControlPanel;
