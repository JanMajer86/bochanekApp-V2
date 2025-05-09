import { Box, Button, HStack, Icon, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";

import { useGlobalContext } from "../pages/DashboardLayout";

import { MdOutlineSettings, MdOutlineAddCircleOutline } from "react-icons/md";
import { IoMdLogOut } from "react-icons/io";

const Sidebar = ({ isControlPanel, handleControlPanel }) => {
	const { logoutUser, handleModalOpen } = useGlobalContext();

	return (
		<Box
			as="aside"
			display="flex"
			justifyContent="space-between"
			h={{ base: "60px", lg: "calc(100vh - 60px)" }}
			w={{ base: "100vw", lg: "min-content" }}
			flexDirection={{ base: "row", lg: "column" }}
			gap="2"
			p="3"
			position={"fixed"}
			top={{ base: 12, lg: 16 }}
			left={{ base: 0, lg: "auto" }}
			zIndex={10}
			bg={"white"}
		>
			{/* CONTROL PANEL BUTTON */}
			<Button
				colorPalette="orange"
				variant={isControlPanel ? "surface" : "outline"}
				onClick={handleControlPanel}
				size={{ base: "sm" }}
				flex={{ base: "none", sm: "1", lg: "none" }}
			>
				<Icon as={MdOutlineSettings} />
				<Text display={{ base: "none", sm: "block" }}>CONTROL PANEL</Text>
			</Button>
			{/* ADD NEW BOCHÁNEK BUTTON */}
			<ChakraLink
				as={Link}
				to="/all-bochaneks/create-bochanek"
				flex={{ base: 1, lg: "none" }}
				justifyContent="center"
			>
				<Button
					colorPalette="orange"
					variant="solid"
					w={{ sm: "100%" }}
					size={{ base: "sm" }}
					onClick={handleModalOpen}
				>
					<Icon as={MdOutlineAddCircleOutline} /> ADD NEW
				</Button>
			</ChakraLink>
			{/* LOGOUT (HIDDEN WHEN LG)  */}
			<Button
				colorPalette="orange"
				onClick={logoutUser}
				variant="outline"
				display={{ base: "block", lg: "none" }}
				size={{ base: "sm" }}
				flex={{ base: "none", sm: "1" }}
			>
				<HStack>
					<Icon as={IoMdLogOut} />
					<Text display={{ base: "none", sm: "block" }}>LOGOUT</Text>
				</HStack>
			</Button>
		</Box>
	);
};
export default Sidebar;
