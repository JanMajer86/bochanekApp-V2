import {
	Avatar,
	Box,
	Center,
	Button,
	Flex,
	Heading,
	HStack,
	Text,
} from "@chakra-ui/react";
import { useGlobalContext } from "../pages/DashboardLayout";

const Header = () => {
	const { user, logoutUser } = useGlobalContext();
	return (
		<Center
			as="header"
			align="center"
			bgColor="orange.50"
			color="gray.900"
			px="4"
			py="2"
			mb="4"
		>
			<Flex justify="space-between" width="90vw" maxW={"1200px"}>
				<Heading size="4xl">bochanekApp</Heading>
				<Box>
					<HStack>
						<Avatar.Root colorPalette="orange">
							<Avatar.Fallback />
						</Avatar.Root>
						<Text mr="8" fontWeight="semibold">
							{user.name}
						</Text>
						<Button colorPalette="orange" onClick={logoutUser}>
							logout
						</Button>
					</HStack>
				</Box>
			</Flex>
		</Center>
	);
};
export default Header;
