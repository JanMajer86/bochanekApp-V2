import { Form, redirect, useLoaderData, useNavigate } from "react-router-dom";
import customFetch from "../utils/customFetch";
import {
	Box,
	Button,
	Center,
	Field,
	Heading,
	HStack,
	Input,
	RadioCard,
} from "@chakra-ui/react";
import { useGlobalContext } from "@/pages/DashboardLayout";

export const loader = async ({ params }) => {
	try {
		const { data } = await customFetch.get(`/bochanek/${params.id}`);
		return data;
	} catch (error) {
		console.log(error);
	}
	return null;
};

export const action = async ({ request, params }) => {
	const formData = await request.formData();
	const data = Object.fromEntries(formData);
	try {
		await customFetch.patch(`/bochanek/${params.id}`, data);
		return redirect("/all-bochaneks");
	} catch (error) {
		console.log(error);
		return error;
	}
};

const Modal = () => {
	const data = useLoaderData();
	const navigate = useNavigate();
	const { handleModalOpen } = useGlobalContext();

	return (
		<Center
			h="100vh"
			w="100vw"
			bg="gray.200/90"
			position="absolute"
			top="0"
			left="0"
			zIndex={20}
		>
			<Box bg="gray.50" w="520px" px="20" py="12" borderRadius={6} zIndex={25}>
				<Heading as="h3" mb="8">
					Edit Bochánek
				</Heading>

				<Form method="POST">
					{/* NAME INPUT */}
					<Field.Root required mb="4">
						<Field.Label>input name</Field.Label>
						<Input
							type="text"
							id="name"
							name="name"
							defaultValue={data.bochanek.name}
						/>
					</Field.Root>
					{/* GENDER SELECT */}
					<RadioCard.Root
						name="gender"
						variant="solid"
						mb="10"
						colorPalette="orange"
						orientation="horizontal"
						align="center"
						justify="start"
						defaultValue={data.bochanek.gender}
					>
						<RadioCard.Label>select gender</RadioCard.Label>
						<HStack align="stretch">
							<RadioCard.Item
								// name="gender"
								value="Male"
								p="0"
								h="10"
								cursor="pointer"
							>
								<RadioCard.ItemHiddenInput />
								<RadioCard.ItemControl>
									<RadioCard.ItemText mt={"-7px"} fontSize="md">
										MALE
									</RadioCard.ItemText>
								</RadioCard.ItemControl>
							</RadioCard.Item>
							<RadioCard.Item
								// name="gender"
								value="Female"
								p="0"
								h="10"
								cursor="pointer"
							>
								<RadioCard.ItemHiddenInput />
								<RadioCard.ItemControl>
									<RadioCard.ItemText mt={"-7px"} fontSize="md">
										FEMALE
									</RadioCard.ItemText>
								</RadioCard.ItemControl>
							</RadioCard.Item>
						</HStack>
					</RadioCard.Root>
					<Button
						type="submit"
						w="100%"
						mb="4"
						colorPalette="orange"
						onClick={handleModalOpen}
					>
						UPDATE
					</Button>
					<Button
						onClick={() => {
							handleModalOpen();
							navigate(-1);
						}}
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
export default Modal;
