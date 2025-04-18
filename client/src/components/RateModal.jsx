import { Form, redirect, useNavigate, useLoaderData } from "react-router-dom";
import customFetch from "../utils/customFetch";
import { StarRatingInput } from "./";
import { useState } from "react";
import { Center, Box, Button, Heading } from "@chakra-ui/react";

export const loader = async ({ request, params }) => {
	try {
		const url = new URL(request.url);
		const userRating = url.searchParams.get("userRating");
		return { userRating, id: params.id };
	} catch (error) {
		console.log(error);
	}
	return null;
};

export const action = async ({ request, params }) => {
	const formData = await request.formData();
	const rating = parseInt(formData.get("rating"));
	const { id } = params;
	try {
		await customFetch.post(`/bochanek/${id}/rate`, { value: rating });
		return redirect("/all-bochaneks");
	} catch (error) {
		console.log(error);
	}
	return null;
};

const RateModal = () => {
	const navigate = useNavigate();
	const { userRating } = useLoaderData();
	const [rating, setRating] = useState(userRating);

	return (
		<Center
			h="100vh"
			w="100vw"
			bg="gray.200/90"
			position="absolute"
			top="0"
			left="0"
			zIndex={10}
		>
			<Box bg="gray.50" w="520px" px="20" py="12" borderRadius={6} zIndex={20}>
				<Form method="POST">
					{/* STAR RATE INPUT */}
					<Center mb="8" flexDirection={"column"}>
						<Heading as="h3" mb="6">
							{rating === "null" ? "rate bochánek" : "change rating"}
						</Heading>
						<StarRatingInput rating={rating} setRating={setRating} />
					</Center>
					{/* SUBMIT / CANCEL */}
					<Button type="submit" w="100%" mb="4" colorPalette="orange">
						UPDATE
					</Button>
					<Button
						onClick={() => navigate(-1)}
						w="100%"
						colorPalette="orange"
						variant="outline"
					>
						CANCEL
					</Button>
				</Form>
			</Box>
		</Center>
	);
};
export default RateModal;
