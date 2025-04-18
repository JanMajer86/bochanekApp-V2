import { Flex, Icon } from "@chakra-ui/react";
import { useState } from "react";

import { FaStar, FaRegStar } from "react-icons/fa";

const StarRatingInput = ({ rating, setRating }) => {
	const [hovered, setHovered] = useState(null);

	const starStyle = {
		color: "orange.500",
		boxSize: "7",
	};

	const renderStar = (index) => {
		const displayValue = hovered !== null ? hovered : rating;
		if (displayValue >= index + 1) return <Icon as={FaStar} css={starStyle} />;
		return <Icon as={FaRegStar} css={starStyle} />;
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
		<Flex>
			<input type="hidden" name="rating" value={rating} />
			{[...Array(5)].map((_, i) => (
				<span
					key={i + 1}
					onMouseOver={() => handleMouseOverStar(i + 1)}
					onMouseLeave={handleMouseLeaveStar}
					onClick={() => handleClickStar(i + 1)}
					style={{ cursor: "pointer" }}
				>
					{renderStar(i)}
				</span>
			))}
		</Flex>
	);
};
export default StarRatingInput;
