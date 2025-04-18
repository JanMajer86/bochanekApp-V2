import { Flex, Icon } from "@chakra-ui/react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const AverageRatingStars = ({ avgRating }) => {
	const starStyle = {};

	const fullStars = Math.floor(avgRating);
	const hasHalfStar = avgRating - fullStars >= 0.5;

	return (
		<Flex>
			{[...Array(fullStars)].map((_, i) => (
				<Icon as={FaStar} color="orange.900" key={i} />
			))}
			{hasHalfStar && <Icon as={FaStarHalfAlt} />}
			{[...Array(5 - fullStars - (hasHalfStar ? 1 : 0))].map((_, i) => (
				<Icon as={FaRegStar} key={i} />
			))}
		</Flex>
	);
};
export default AverageRatingStars;
