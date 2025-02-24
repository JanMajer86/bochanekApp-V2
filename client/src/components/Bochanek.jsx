import { Form, Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/Bochanek";
import { useBochanekContext } from "../pages/AllBochaneks";

import day from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
day.extend(advancedFormat);

import { FaEdit } from "react-icons/fa";
import { TiDeleteOutline } from "react-icons/ti";

const Bochanek = ({ _id, name, gender, createdBy, updatedAt }) => {
	const user = useBochanekContext();
	const isOwned = user.name === createdBy;
	const date = day(updatedAt).format("MMM Do, YYYY");

	return (
		<Wrapper $gender={gender}>
			<div className="info">
				<h4>
					<span className="first-letter">{name.charAt(0)}</span>
					<span className="name">{name.substring(1)}</span>
				</h4>
				<p>{date}</p>
			</div>
			{isOwned && (
				<div className="actions">
					{/* EDIT */}
					<Link to="/all-bochaneks/edit-bochanek">
						<button className="btn">
							<span>
								<FaEdit />
							</span>
							edit
						</button>
					</Link>
					{/* DELETE */}
					<Form method="POST" action={`/delete-bochanek/${_id}`}>
						<button className="btn">
							<span>
								<TiDeleteOutline />
							</span>
							delete
						</button>
					</Form>
				</div>
			)}
		</Wrapper>
	);
};
export default Bochanek;
