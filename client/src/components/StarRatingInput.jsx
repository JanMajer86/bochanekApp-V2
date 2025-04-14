import { useState } from "react";

import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const StarRatingInput = ({ rating, onRate }) => {
	const [hovered, setHovered] = useState(null);

	const renderStar = (index) => {
		const displayValue = hovered !== null ? hovered : rating;
		if (displayValue >= index + 1) return <FaStar />;
		if (displayValue >= index + 0.5) return <FaStarHalfAlt />;
		return <FaRegStar />;
	};

	const handleClick = (index, e) => {
		const { offsetX, target } = e.nativeEvent;
		const boxWidth = target.offsetWidth;
		const isHalf = offsetX < boxWidth / 2;
		const newRating = index + (isHalf ? 0.5 : 1);
		onRate(newRating);
	};

	const handleMouseMove = (index, e) => {
		const { offsetX, target } = e.nativeEvent;
		const boxWidth = target.offsetWidth;
		const isHalf = offsetX < boxWidth / 2;
		setHovered(index + (isHalf ? 0.5 : 1));
	};

	const handleMouseLeave = () => {
		setHovered(null);
	};

	return (
		<div>
			{[0, 1, 2, 3, 4].map((i) => (
				<span
					key={i}
					onClick={(e) => handleClick(i, e)}
					onMouseMove={(e) => handleMouseMove(i, e)}
					onMouseLeave={handleMouseLeave}
				>
					{renderStar(i)}
				</span>
			))}
		</div>
	);
};
export default StarRatingInput;
