import { Form, redirect, useNavigation } from "react-router-dom";
import customFetch from "../utils/customFetch";
import { USERS } from "../../../server/utils/constants";
import {
	Box,
	Button,
	Center,
	Field,
	Input,
	HStack,
	RadioCard,
	Heading,
} from "@chakra-ui/react";

export const action = async ({ request }) => {
	const formData = await request.formData();
	const data = Object.fromEntries(formData);
	console.log(data);
	try {
		await customFetch.post("/auth/login", data);
		return redirect("/all-bochaneks");
	} catch (error) {
		console.log(error);
		return error;
	}
};

const Login = () => {
	const isSubmitting = useNavigation().state === "submitting";
	const userNames = Object.values(USERS);

	return (
		<Center h="100vh" w="100vw" bg="gray.200">
			<Box bg="gray.50" w="520px" px="20" py="12" borderRadius={6}>
				<Heading as="h3" mb="8" align={"right"}>
					bochanekApp login
				</Heading>
				<Form method="POST">
					{/* USER SELECT */}

					<RadioCard.Root
						name="name"
						variant="solid"
						mb="4"
						colorPalette="orange"
						orientation="horizontal"
						align="center"
						justify="start"
					>
						<RadioCard.Label>select user</RadioCard.Label>
						<HStack align="stretch">
							{userNames.map((user) => {
								return (
									<RadioCard.Item
										key={user}
										value={user}
										p="0"
										h="10"
										cursor="pointer"
									>
										<RadioCard.ItemHiddenInput required />
										<RadioCard.ItemControl>
											<RadioCard.ItemText mt={"-7px"} fontSize="md">
												{user}
											</RadioCard.ItemText>
										</RadioCard.ItemControl>
									</RadioCard.Item>
								);
							})}
						</HStack>
					</RadioCard.Root>

					{/* PASSWORD */}

					<Field.Root required mb="10" colorPalette="orange">
						<Field.Label>password</Field.Label>
						<Input type="password" name="password" h="10" />
					</Field.Root>

					{/* SUBMIT BUTTON  */}

					<Button type="submit" colorPalette="orange" w="100%" h="10">
						{isSubmitting ? "logging in..." : "login"}
					</Button>
				</Form>
			</Box>
		</Center>
	);
};
export default Login;
