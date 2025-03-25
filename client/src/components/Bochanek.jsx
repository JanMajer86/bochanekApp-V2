import Wrapper from "../assets/wrappers/Bochanek";
import { Form, Link } from "react-router-dom";
import { useGlobalContext } from "../pages/DashboardLayout";
import { IoMale, IoFemale, IoStarOutline } from "react-icons/io5";

import day from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
day.extend(advancedFormat);

import { FaEdit } from "react-icons/fa";
import { TiDeleteOutline } from "react-icons/ti";
import { IconContext } from "react-icons/lib";

const Bochanek = ({ _id, name, gender, createdBy, updatedAt }) => {
	const { user } = useGlobalContext();
	const isOwned = user.name === createdBy;
	const isMale = gender === "Male";
	// const date = day(updatedAt).format("MMM Do, YYYY");

	return (
		<Wrapper $gender={gender}>
			<IconContext.Provider value={{ className: "shared-class", size: 18 }}>
				<div className="name">
					<h3>
						{isMale ? <IoMale /> : <IoFemale />}
						{name}
					</h3>
				</div>
				{/* ACTIONS / BUTTONS */}
				<div className="buttons">
					{isOwned ? (
						<>
							<button className="btn">
								<IoStarOutline />
								RATE
							</button>
							<Link to={`/all-bochaneks/edit-bochanek/${_id}`}>
								<button className="btn">
									<FaEdit /> EDIT
								</button>
							</Link>
							<Form method="POST" action={`/delete-bochanek/${_id}`}>
								<button className="btn">
									<TiDeleteOutline /> DELETE
								</button>
							</Form>
						</>
					) : (
						<button className="btn">
							<IoStarOutline /> RATE
						</button>
					)}
				</div>
			</IconContext.Provider>
		</Wrapper>
	);
};
export default Bochanek;
