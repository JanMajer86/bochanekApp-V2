import Wrapper from "../assets/wrappers/BochanekList";
import Bochanek from "./Bochanek";
import { useGlobalContext } from "../pages/DashboardLayout";
import ControlPanel from "./ControlPanel";
import { useState } from "react";

const BochanekList = ({ bochanci }) => {
	const [isControlPanel, setIsControlPanel] = useState(false);

	const handleControlPanel = () => {
		setIsControlPanel(!isControlPanel);
	};

	return (
		<Wrapper>
			<div className="bochanci">
				{/* CONTROL PANEL */}
				<ControlPanel isVisible={isControlPanel} />
				{bochanci.map((group) => {
					return (
						<article className="group-segment" key={group.letter}>
							<div className="group-letter">
								<h4>{group.letter}</h4>
							</div>
							<div className="group-names">
								<ul>
									{group.names.map((bochanek) => (
										<Bochanek key={bochanek._id} {...bochanek} />
									))}
								</ul>
							</div>
						</article>
					);
				})}
			</div>
			<div className="sidebar">
				<p>sidebar</p>
				<button className="btn" onClick={handleControlPanel}>
					control panel
				</button>
			</div>
		</Wrapper>
	);
};
export default BochanekList;
