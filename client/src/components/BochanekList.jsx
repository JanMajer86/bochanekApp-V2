import Wrapper from "../assets/wrappers/BochanekList";
import Bochanek from "./Bochanek";

const BochanekList = ({ bochanci }) => {
	return (
		<Wrapper>
			<div className="bochanci">
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
			<div className="sidebar">sidebar</div>
		</Wrapper>
	);
};
export default BochanekList;
