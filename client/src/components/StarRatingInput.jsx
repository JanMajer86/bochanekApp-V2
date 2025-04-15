import { useState } from "react";

import { FaStar, FaRegStar } from "react-icons/fa";

const StarRatingInput = ({ rating, setRating }) => {
	const [hovered, setHovered] = useState(null);

	const renderStar = (index) => {
		const displayValue = hovered !== null ? hovered : rating;
		if (displayValue >= index + 1) return <FaStar />;
		return <FaRegStar />;
	};

	const handleMouseOverStar = (index) => {
		setHovered(index);
	};

	const handleMouseLeaveStar = () => {
		setHovered(null);
	};

	const handleClickStar = (index) => {
		setRating(index);
	};

	return (
		<div>
			<input type="hidden" name="rating" value={rating} />
			<div>StarRatingInput --- current rating: {rating ?? "none"}</div>
			<div>
				{[...Array(5)].map((_, i) => (
					<span
						key={i + 1}
						onMouseOver={() => handleMouseOverStar(i + 1)}
						onMouseLeave={handleMouseLeaveStar}
						onClick={() => handleClickStar(i + 1)}
					>
						{renderStar(i)}
					</span>
				))}
			</div>
		</div>
	);
};
export default StarRatingInput;
