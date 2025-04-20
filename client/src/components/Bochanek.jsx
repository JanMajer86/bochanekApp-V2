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
	Card,
	Flex,
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
					justifyItems={{ base: "center" }}
					alignItems={"center"}
					alignContent={"center"}
					gap="2"
				>
					{/* NAME */}
					<GridItem
						colSpan={{ base: 6, md: 2, lg: 1 }}
						gridRow={{ base: 1 }}
						w="100%"
						h="100%"
					>
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
						colSpan={{ base: 6, md: 2, lg: 1 }}
						rowStart={{ base: 2, lg: 1 }}
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
						colSpan={{ base: 6, md: 2, lg: 4 }}
						gridColumnStart={{ base: 1, md: 5, lg: 3 }}
						rowSpan={{ base: 1, md: 2, lg: 1 }}
						justifySelf={{ base: "center", lg: "end" }}
						w="100%"
					>
						<Flex
							gap="1"
							flexDirection={{ base: "row", md: "column", lg: "row" }}
							justifyContent={"space-between"}
							// alignItems={"baseline"}
						>
							{isOwned ? (
								<>
									<Link
										to={`/all-bochaneks/rate-bochanek/${_id}?userRating=${
											userRating ?? null
										}`}
										style={{
											flex: 1,
											display: "flex",
										}}
									>
										<BochanekButton
											icon={IoStarOutline}
											text={isRated ? "Change Rating" : "Rate"}
										/>
									</Link>
									<Link
										to={`/all-bochaneks/edit-bochanek/${_id}`}
										style={{
											flex: 1,
											display: "flex",
											justifyContent: "center",
										}}
									>
										<BochanekButton icon={FaEdit} text="Edit" />
									</Link>
									<Form
										method="POST"
										action={`/delete-bochanek/${_id}`}
										style={{ flex: 1, display: "flex", justifyContent: "end" }}
									>
										<BochanekButton icon={TiDeleteOutline} text="Delete" />
									</Form>
								</>
							) : (
								<Link
									to={`/all-bochaneks/rate-bochanek/${_id}?userRating=${
										userRating ?? null
									}`}
									style={{
										flex: 1,
										display: "flex",
										justifyContent: "center",
									}}
								>
									<BochanekButton
										icon={IoStarOutline}
										text={isRated ? "Change Rating" : "Rate"}
									/>
								</Link>
							)}
						</Flex>
					</GridItem>
				</Grid>
			</Card.Body>
		</Card.Root>
	);
};
export default Bochanek;
