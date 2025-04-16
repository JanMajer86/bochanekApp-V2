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
			<Box
				bg="gray.50"
				w="480px"
				alignContent="center"
				px="16"
				py="12"
				borderRadius={6}
			>
				<Form method="POST">
					{/* USER SELECT */}

					<RadioCard.Root
						name="name"
						mb="8"
						colorPalette="orange"
						align="center"
						variant="solid"
					>
						<RadioCard.Label>select user</RadioCard.Label>
						<HStack align="stretch">
							{userNames.map((user) => {
								return (
									<RadioCard.Item key={user} value={user} p="0">
										<RadioCard.ItemHiddenInput />
										<RadioCard.ItemControl>
											<RadioCard.ItemText fontSize="md">
												{user}
											</RadioCard.ItemText>
											{/* <RadioCard.ItemIndicator /> */}
										</RadioCard.ItemControl>
									</RadioCard.Item>
								);
							})}
						</HStack>
					</RadioCard.Root>

					{/* PASSWORD */}

					<Field.Root required mb="12" colorPalette="orange">
						<Field.Label>password</Field.Label>
						<Input type="password" name="password" />
					</Field.Root>

					{/* SUBMIT BUTTON  */}

					<Button type="submit" colorPalette="orange" w="100%">
						{isSubmitting ? "logging in..." : "login"}
					</Button>
				</Form>
			</Box>
		</Center>
	);
};
export default Login;
