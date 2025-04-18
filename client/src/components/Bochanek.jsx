import { Form, Link } from "react-router-dom";
import { useGlobalContext } from "../pages/DashboardLayout";
import { IoMale, IoFemale, IoStarOutline } from "react-icons/io5";

import day from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
day.extend(advancedFormat);

import { FaEdit } from "react-icons/fa";
import { TiDeleteOutline } from "react-icons/ti";
import { AverageRatingStars } from "./";
import {
	Avatar,
	Button,
	Card,
	Grid,
	GridItem,
	HStack,
	Icon,
	Text,
} from "@chakra-ui/react";

const Bochanek = ({ _id, name, gender, createdBy, ratings, averageRating }) => {
	const { user } = useGlobalContext();
	const isOwned = user.name === createdBy;
	const isMale = gender === "Male";
	const userRating = ratings.filter((r) => r.user === user.userId)[0]?.value;
	const isRated = userRating !== undefined;

	return (
		<Card.Root
			colorPalette="orange"
			color="black"
			bg="gray.100"
			size="sm"
			mx="4"
			mb="4"
			variant="subtle"
		>
			<Card.Body>
				<Grid templateColumns="repeat(6, 1fr)" justifyContent="center">
					<GridItem colSpan={2}>
						<HStack>
							<Avatar.Root mr="2">
								<Avatar.Fallback name={name[0]} />
							</Avatar.Root>
							<Text fontWeight="bold" textStyle="lg">
								{name}
							</Text>
							<Icon as={isMale ? IoMale : IoFemale} />
						</HStack>
					</GridItem>

					<GridItem alignSelf={"center"}>
						{/* RENDER AVERAGE RATING HERE, CHANGE RATING IN POPUP */}
						{averageRating > 0 ? (
							<AverageRatingStars avgRating={averageRating} />
						) : (
							<span>no rating</span>
						)}
					</GridItem>
					<GridItem colSpan={3} justifySelf="end">
						<HStack>
							{isOwned ? (
								<>
									<Link
										to={`/all-bochaneks/rate-bochanek/${_id}?userRating=${
											userRating ?? null
										}`}
									>
										<Button variant="outline">
											<Icon as={IoStarOutline} />
											{isRated ? "Change Rating" : "Rate"}
										</Button>
									</Link>
									<Link to={`/all-bochaneks/edit-bochanek/${_id}`}>
										<Button variant="outline">
											<Icon as={FaEdit} />
											Edit
										</Button>
									</Link>
									<Form method="POST" action={`/delete-bochanek/${_id}`}>
										<Button variant="outline" type="submit">
											<Icon as={TiDeleteOutline} />
											Delete
										</Button>
									</Form>
								</>
							) : (
								<Link
									to={`/all-bochaneks/rate-bochanek/${_id}?userRating=${
										userRating ?? null
									}`}
								>
									<Button variant="outline">
										<Icon as={IoStarOutline} />
										{isRated ? "Change Rating" : "Rate"}
									</Button>
								</Link>
							)}
						</HStack>
					</GridItem>
				</Grid>
			</Card.Body>
		</Card.Root>
	);
};
export default Bochanek;
