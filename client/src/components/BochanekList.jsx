import Wrapper from "../assets/wrappers/BochanekList";
import { Bochanek, Sidebar } from "./";
import ControlPanel from "./ControlPanel";
import { useState } from "react";

const BochanekList = ({ bochanci }) => {
	const names = bochanci.processed;
	const numOfResults = bochanci.results;
	console.log(names);
	console.log(numOfResults);
	const [isControlPanel, setIsControlPanel] = useState(false);

	const handleControlPanel = () => {
		setIsControlPanel(!isControlPanel);
	};

	return (
		<Wrapper>
			<div className="bochanci">
				{/* CONTROL PANEL */}
				<ControlPanel isVisible={isControlPanel} />
				<h4>results: {numOfResults}</h4>
				{/* BOCHANEK LIST */}
				{names.map((group) => {
					return (
						<article className="group-segment" key={group.key}>
							<div className="group-letter">
								<h4>{group.key}</h4>
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
