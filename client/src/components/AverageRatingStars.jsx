import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const AverageRatingStars = ({ avgRating, size = 20 }) => {
	const fullStars = Math.floor(avgRating);
	const hasHalfStar = avgRating - fullStars >= 0.5;
	console.log(fullStars);
	console.log(Array(fullStars));

	return (
		<div style={{ fontSize: size }}>
			{[...Array(fullStars)].map((_, i) => (
				<FaStar key={i} />
			))}
			{hasHalfStar && <FaStarHalfAlt />}
			{[...Array(5 - fullStars - (hasHalfStar ? 1 : 0))].map((_, i) => (
				<FaRegStar key={i} />
			))}
		</div>
	);
};
export default AverageRatingStars;
