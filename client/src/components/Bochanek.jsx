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
import { StarRating } from "./";
import customFetch from "../utils/customFetch";
import { useState } from "react";

const Bochanek = ({ _id, name, gender, createdBy, updatedAt, ratings }) => {
	const { user } = useGlobalContext();
	const isOwned = user.name === createdBy;
	const isMale = gender === "Male";
	const userRating = ratings.reduce((acc, cur) => {
		if (cur.user.toString() === user.userId.toString()) acc += cur.value;
		return acc;
	}, 0);
	// console.log(userRating);

	const [rating, setRating] = useState(userRating);
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
				{/* STAR RATING HERE? */}
				<StarRating
					rating={rating}
					onRate={(newRating) => {
						customFetch
							.post(`/bochanek/${_id}/rate`, { value: newRating })
							.then(() => setRating(newRating));
					}}
				/>
				{/* ACTIONS / BUTTONS */}
				<div className="buttons">
					{isOwned ? (
						<>
							<Link to={`/all-bochaneks/rate-bochanek/${_id}`}>
								<button className="btn">
									<IoStarOutline /> RATE
								</button>
							</Link>
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
