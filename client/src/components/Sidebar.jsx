import { Box, Button, HStack, Icon, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import { useGlobalContext } from "../pages/DashboardLayout";

import { MdOutlineSettings, MdOutlineAddCircleOutline } from "react-icons/md";
import { IoMdLogOut } from "react-icons/io";

const Sidebar = ({ isControlPanel, handleControlPanel }) => {
	const { logoutUser } = useGlobalContext();

	return (
		<Box
			as="aside"
			display="flex"
			justifyContent="space-between"
			h={{ base: "min-content", lg: "calc(100vh - 86px)" }}
			flexDirection={{ base: "row", lg: "column" }}
			gap="2"
			mb={{ base: "3", lg: "0" }}
		>
			{/* CONTROL PANEL CONTROL */}
			<Button
				colorPalette="orange"
				variant={isControlPanel ? "surface" : "outline"}
				onClick={handleControlPanel}
				size={{ base: "sm" }}
			>
				<Icon as={MdOutlineSettings} />
				<Text display={{ base: "none", lg: "block" }}>CONTROL PANEL</Text>
			</Button>
			{/* ADD NEW BOCHÁNEK BUTTON */}
			<Link to="/all-bochaneks/create-bochanek">
				<Button
					colorPalette="orange"
					variant="solid"
					w={{ lg: "100%" }}
					size={{ base: "sm" }}
				>
					<Icon as={MdOutlineAddCircleOutline} /> ADD NEW
				</Button>
			</Link>
			{/* LOGOUT (HIDDEN WHEN LG)  */}
			<Button
				colorPalette="orange"
				onClick={logoutUser}
				variant="outline"
				display={{ base: "block", lg: "none" }}
				size={{ base: "sm" }}
			>
				{" "}
				<HStack>
					<Icon as={IoMdLogOut} />
					<Text display={{ base: "none" }}>LOGOUT</Text>
				</HStack>
			</Button>
		</Box>
	);
};
export default Sidebar;
