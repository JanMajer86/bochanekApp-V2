import { Form, Link } from "react-router-dom";
import { useGlobalContext } from "../pages/DashboardLayout";
import { IoMale, IoFemale, IoStarOutline } from "react-icons/io5";

import day from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
day.extend(advancedFormat);

import { FaEdit } from "react-icons/fa";
import { TiDeleteOutline } from "react-icons/ti";
import { AverageRatingStars, BochanekButton } from "./";
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
			shadow={"sm"}
			size={{ base: "sx", lg: "sm" }}
			mx={{ base: 0, lg: 4 }}
			mb="4"
			p="2"
			variant="subtle"
		>
			<Card.Body>
				<Grid
					templateColumns="repeat(6, 1fr)"
					justifyContent="center"
					justifyItems={{ base: "center" }}
				>
					{/* NAME */}
					<GridItem colSpan={{ base: 6, lg: 2 }} mb="2" w="100%">
						<HStack justifyContent={"space-between"}>
							<Avatar.Root mr="2" size={{ base: "xs", lg: "md" }}>
								<Avatar.Fallback name={name[0]} />
							</Avatar.Root>
							<Text
								fontWeight="bold"
								textStyle="lg"
								w="100%"
								textAlign={"center"}
							>
								{name}
							</Text>
							<Icon as={isMale ? IoMale : IoFemale} w="40px" />
						</HStack>
					</GridItem>

					{/* RATING */}
					<GridItem
						alignSelf={"center"}
						colSpan={{ base: 6, lg: "auto" }}
						mb="6"
					>
						{/* RENDER AVERAGE RATING HERE, CHANGE RATING IN POPUP */}
						{averageRating > 0 ? (
							<AverageRatingStars avgRating={averageRating} />
						) : (
							<span>no rating</span>
						)}
					</GridItem>

					{/* BUTTONS */}
					<GridItem
						colSpan={{ base: 6, lg: 3 }}
						justifySelf={{ base: "center", lg: "end" }}
						w="100%"
					>
						<HStack gap="6" justifyContent={"space-between"}>
							{isOwned ? (
								<>
									<Link
										to={`/all-bochaneks/rate-bochanek/${_id}?userRating=${
											userRating ?? null
										}`}
									>
										<BochanekButton
											icon={IoStarOutline}
											text={isRated ? "Change Rating" : "Rate"}
										/>
									</Link>
									<Link to={`/all-bochaneks/edit-bochanek/${_id}`}>
										<BochanekButton icon={FaEdit} text="Edit" />
									</Link>
									<Form method="POST" action={`/delete-bochanek/${_id}`}>
										<BochanekButton icon={TiDeleteOutline} text="Delete" />
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
