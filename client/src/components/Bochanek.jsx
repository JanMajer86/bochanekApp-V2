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
import { AverageRatingStars } from "./";
// import customFetch from "../utils/customFetch";
// import { useState } from "react";

const Bochanek = ({ _id, name, gender, createdBy, ratings, averageRating }) => {
	const { user } = useGlobalContext();
	const isOwned = user.name === createdBy;
	const isMale = gender === "Male";
	const userRating = ratings.filter((r) => r.user === user.userId)[0]?.value;
	const isRated = userRating !== undefined;

	return (
		<Wrapper $gender={gender}>
			<IconContext.Provider value={{ className: "shared-class", size: 18 }}>
				<div className="name">
					<h3>
						{isMale ? <IoMale /> : <IoFemale />}
						{name}
					</h3>
				</div>
				{/* RENDER AVERAGE RATING HERE, CHANGE RATING IN POPUP */}
				{averageRating > 0 ? (
					<AverageRatingStars avgRating={averageRating} />
				) : (
					<span>no rating</span>
				)}
				{/* ACTIONS / BUTTONS */}
				<div className="buttons">
					{isOwned ? (
						<>
							<Link
								to={`/all-bochaneks/rate-bochanek/${_id}?userRating=${
									userRating ?? null
								}`}
							>
								<button className="btn">
									<IoStarOutline /> {isRated ? <>CHANGE RATING</> : <>RATE</>}
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
						<Link
							to={`/all-bochaneks/rate-bochanek/${_id}?userRating=${
								userRating ?? null
							}`}
						>
							<button className="btn">
								<IoStarOutline /> {isRated ? <>CHANGE RATING</> : <>RATE</>}
							</button>
						</Link>
					)}
				</div>
			</IconContext.Provider>
		</Wrapper>
	);
};
export default Bochanek;
