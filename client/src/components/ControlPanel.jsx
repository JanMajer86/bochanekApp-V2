import Wrapper from "../assets/wrappers/ControlPanel";

const ControlPanel = ({ isVisible }) => {
	return (
		<Wrapper>
			<div className={`control-panel ${isVisible ? "visible" : "hidden"}`}>
				ControlPanel
			</div>
		</Wrapper>
	);
};
export default ControlPanel;
