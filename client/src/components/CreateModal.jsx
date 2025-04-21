import { Form, redirect, useNavigate, useNavigation } from "react-router-dom";
import {
	Box,
	Button,
	Center,
	Field,
	Heading,
	Group,
	Input,
	RadioCard,
} from "@chakra-ui/react";
import customFetch from "../utils/customFetch";
import { useGlobalContext } from "@/pages/DashboardLayout";

export const action = async ({ request }) => {
	const formData = await request.formData();
	const data = Object.fromEntries(formData);
	try {
		await customFetch.post("/bochanek", data);
		return redirect("/all-bochaneks");
	} catch (error) {
		console.log(error);
	}
	return null;
};

const CreateModal = () => {
	const navigate = useNavigate();
	const navigation = useNavigation();
	const isSubmitting = navigation.state === "submitting";
	const { handleModalOpen } = useGlobalContext();

	return (
		<Center
			h="100vh"
			w="100vw"
			bg="gray.200/90"
			position="absolute"
			top="0"
			left="0"
			zIndex={11}
		>
			<Box bg="gray.50" w="520px" px="20" py="12" borderRadius={6} zIndex={20}>
				<Heading as="h3" mb="8">
					Create Bochánek
				</Heading>
				<Form method="POST">
					{/* NAME INPUT */}
					<Field.Root required mb="4">
						<Field.Label>input name</Field.Label>
						<Input type="text" id="name" name="name" required />
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
					>
						<RadioCard.Label>select gender</RadioCard.Label>
						<Group attached orientation="horizontal">
							<RadioCard.Item value="Male" p="0" h="10" cursor="pointer">
								<RadioCard.ItemHiddenInput required />
								<RadioCard.ItemControl>
									<RadioCard.ItemText mt={"-7px"} fontSize="md">
										MALE
									</RadioCard.ItemText>
								</RadioCard.ItemControl>
							</RadioCard.Item>
							<RadioCard.Item value="Female" p="0" h="10" cursor="pointer">
								<RadioCard.ItemHiddenInput />
								<RadioCard.ItemControl>
									<RadioCard.ItemText mt={"-7px"} fontSize="md">
										FEMALE
									</RadioCard.ItemText>
								</RadioCard.ItemControl>
							</RadioCard.Item>
						</Group>
					</RadioCard.Root>
					{/* SUBMIT */}
					<Button
						type="submit"
						w="100%"
						mb="4"
						colorPalette="orange"
						onClick={handleModalOpen}
						disabled={isSubmitting}
					>
						{isSubmitting ? "CREATING..." : "CREATE"}
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
export default CreateModal;
