import { Flex, Icon } from "@chakra-ui/react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const AverageRatingStars = ({ avgRating }) => {
	const fullStars = Math.floor(avgRating);
	const hasHalfStar = avgRating - fullStars >= 0.5;
	const starStyle = {
		color: "orange.800",
		boxSize: "5",
	};
	return (
		<Flex>
			{[...Array(fullStars)].map((_, i) => (
				<Icon as={FaStar} css={starStyle} key={i} />
			))}
			{hasHalfStar && <Icon as={FaStarHalfAlt} css={starStyle} />}
			{[...Array(5 - fullStars - (hasHalfStar ? 1 : 0))].map((_, i) => (
				<Icon as={FaRegStar} key={i} css={starStyle} />
			))}
		</Flex>
	);
};
export default AverageRatingStars;
