import { Form, Link } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";

import { useGlobalContext } from "../pages/DashboardLayout";
import { IoMale, IoFemale, IoStarOutline } from "react-icons/io5";

import day from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
day.extend(advancedFormat);

import { FaEdit } from "react-icons/fa";
import { TiDeleteOutline } from "react-icons/ti";
import { AverageRatingStars, BochanekButton } from "./";
import {
	chakra,
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
	const { user, handleModalOpen } = useGlobalContext();
	const isOwned = user.name === createdBy;
	const isMale = gender === "Male";
	const userRating = ratings.filter((r) => r.user === user.userId)[0]?.value;

	// const isRated = userRating !== undefined;

	const ChakraForm = chakra(Form);

	return (
		<Card.Root
			colorPalette="orange"
			color="black"
			bg="gray.100"
			shadow={"xs"}
			size={{ base: "sx", lg: "sm" }}
			mx={{ base: 0, lg: 4 }}
			mb="4"
			p="2"
			variant="subtle"
		>
			<Card.Body>
				<Grid
					templateColumns="repeat(12, 1fr)"
					justifyItems={{ base: "center" }}
					alignItems={"center"}
					alignContent={"center"}
					gap="2"
				>
					{/* NAME */}
					<GridItem
						colSpan={{ base: 12, md: 4, lg: 5 }}
						gridRow={{ base: 1 }}
						w="100%"
						h="100%"
					>
						<HStack justifyContent={"space-between"}>
							<Avatar.Root mr="2" size={{ base: "xs", lg: "sm" }}>
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
							<Icon as={isMale ? IoMale : IoFemale} w="40px" boxSize={6} />
						</HStack>
					</GridItem>

					{/* RATING */}
					<GridItem
						alignSelf={"center"}
						colSpan={{ base: 12, md: 4, lg: 2 }}
						rowStart={{ base: 2, lg: 1 }}
					>
						{/* RENDER AVERAGE RATING HERE, CHANGE RATING IN POPUP */}
						{averageRating > 0 ? (
							<AverageRatingStars avgRating={averageRating} />
						) : (
							<Text fontSize="md">no rating</Text>
						)}
					</GridItem>

					{/* BUTTONS */}
					<GridItem
						colSpan={{ base: 12, md: 4, lg: 5 }}
						gridColumnStart={{ base: 1, md: 9, lg: 8 }}
						rowSpan={{ base: 1, md: 2, lg: 1 }}
						justifySelf={{ base: "center", lg: "end" }}
						w="100%"
					>
						<Flex
							gap="1"
							flexDirection={{ base: "row", md: "column", lg: "row" }}
							justifyContent={"space-between"}
						>
							{isOwned ? (
								<>
									<ChakraLink
										as={Link}
										to={`/all-bochaneks/rate-bochanek/${_id}?userRating=${
											userRating ?? null
										}`}
										flex={1}
										onClick={handleModalOpen}
									>
										<BochanekButton icon={IoStarOutline} text="Rate" />
									</ChakraLink>
									<ChakraLink
										as={Link}
										to={`/all-bochaneks/edit-bochanek/${_id}`}
										flex={1}
										justifyContent="center"
										onClick={handleModalOpen}
									>
										<BochanekButton icon={FaEdit} text="Edit" />
									</ChakraLink>
									<ChakraForm
										method="POST"
										action={`/delete-bochanek/${_id}`}
										display="flex"
										justifyContent="end"
										flex="1"
									>
										<BochanekButton
											icon={TiDeleteOutline}
											text="Delete"
											type="submit"
										/>
									</ChakraForm>
								</>
							) : (
								<ChakraLink
									as={Link}
									to={`/all-bochaneks/rate-bochanek/${_id}?userRating=${
										userRating ?? null
									}`}
									flex={1}
									display="flex"
									justifyContent={"center"}
								>
									<BochanekButton icon={IoStarOutline} text="Rate" />
								</ChakraLink>
							)}
						</Flex>
					</GridItem>
				</Grid>
			</Card.Body>
		</Card.Root>
	);
};
export default Bochanek;
