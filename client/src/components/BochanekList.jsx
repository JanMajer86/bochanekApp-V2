import Wrapper from "../assets/wrappers/BochanekList";

const BochanekList = ({ bochanci }) => {
	return (
		<Wrapper>
			{bochanci.map((group) => {
				return (
					<article className="group-segment" key={group.letter}>
						<div className="group-letter">
							<h4>{group.letter}</h4>
						</div>
						<div className="group-names">
							<ul>
								{group.names.map((name) => {
									return (
										<li key={name._id}>
											{name.name} - {name.gender}
										</li>
									);
								})}
							</ul>
						</div>
					</article>
				);
			})}
		</Wrapper>
	);
};
export default BochanekList;
