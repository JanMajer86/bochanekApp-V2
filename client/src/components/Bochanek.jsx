import { Form, Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/Bochanek";
import { useBochanekContext } from "../pages/AllBochaneks";
import { IoMale } from "react-icons/io5";
import { IoFemale } from "react-icons/io5";

import day from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
day.extend(advancedFormat);

import { FaEdit } from "react-icons/fa";
import { TiDeleteOutline } from "react-icons/ti";
import { IconContext } from "react-icons/lib";

const Bochanek = ({ _id, name, gender, createdBy, updatedAt }) => {
	const user = useBochanekContext();
	const isOwned = user.name === createdBy;
	const isMale = gender === "male";
	const date = day(updatedAt).format("MMM Do, YYYY");
	return (
		<Wrapper $gender={gender}>
			<IconContext.Provider value={{ className: "shared-class", size: 36 }}>
				<div className="name">
					<h5>
						{isMale ? <IoMale /> : <IoFemale />}
						{name}
					</h5>
				</div>
				<div className="actions">
					<p>{date}</p>
					{isOwned && (
						<div className="buttons">
							<Link to={`/all-bochaneks/edit-bochanek/${_id}`}>
								<button className="btn">
									<FaEdit />
								</button>
							</Link>
							<Form method="POST" action={`/delete-bochanek/${_id}`}>
								<button className="btn">
									<TiDeleteOutline />
								</button>
							</Form>
						</div>
					)}
				</div>
			</IconContext.Provider>
		</Wrapper>
	);
};
export default Bochanek;
