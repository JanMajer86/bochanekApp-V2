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
			bgColor="orange.100"
			color="gray.900"
			px="4"
			py="2"
			mb="4"
		>
			<Flex
				justify="space-between"
				align="center"
				width={{ base: "100vw", lg: "90vw" }}
				maxW={"1200px"}
			>
				<Heading size={{ base: "2xl", lg: "4xl" }}>bochanekApp</Heading>
				<Box>
					<HStack>
						{/* USER ICON & NAME */}
						<Avatar.Root colorPalette="orange" size={{ base: "xs", lg: "md" }}>
							<Avatar.Fallback />
						</Avatar.Root>
						<Text fontWeight="semibold">{user.name}</Text>
						{/* LOGOUT */}
						<Button
							colorPalette="orange"
							onClick={logoutUser}
							display={{ base: "none", lg: "block" }}
							ml={8}
						>
							logout
						</Button>
					</HStack>
				</Box>
			</Flex>
		</Center>
	);
};
export default Header;
