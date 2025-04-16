import {
	Avatar,
	Box,
	Button,
	Flex,
	Heading,
	HStack,
	Text,
} from "@chakra-ui/react";
// import Wrapper from "../assets/wrappers/Header";
import { useGlobalContext } from "../pages/DashboardLayout";

const Header = () => {
	const { user, logoutUser } = useGlobalContext();
	return (
		// <Wrapper>
		<Flex
			as="header"
			justify="space-between"
			align="center"
			bgColor="orange.50"
			color="gray.900"
			px="4"
			py="2"
		>
			<Heading size="4xl">bochanekApp</Heading>
			<Box>
				{/* <span>user: {user.name}</span> */}
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
		// </Wrapper>
	);
};
export default Header;
