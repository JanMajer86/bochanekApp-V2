import Wrapper from "../assets/wrappers/BochanekList";
import { Bochanek, Sidebar } from "./";
import ControlPanel from "./ControlPanel";
import { useState } from "react";

const BochanekList = ({ bochanci }) => {
	console.log(bochanci);
	const [isControlPanel, setIsControlPanel] = useState(false);

	const handleControlPanel = () => {
		setIsControlPanel(!isControlPanel);
	};

	return (
		<Wrapper>
			<div className="bochanci">
				{/* CONTROL PANEL */}
				<ControlPanel isVisible={isControlPanel} />
				{/* BOCHANEK LIST */}
				{bochanci.map((group) => {
					return (
						<article className="group-segment" key={group.groupKey}>
							<div className="group-letter">
								<h4>{group.groupKey}</h4>
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
			{/* SIDEBAR */}
			<Sidebar handleControlPanel={handleControlPanel} />
		</Wrapper>
	);
};
export default BochanekList;
