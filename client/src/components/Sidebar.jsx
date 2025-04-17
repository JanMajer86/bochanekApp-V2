import { Box, Button, Icon } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import { MdOutlineSettings, MdOutlineAddCircleOutline } from "react-icons/md";

const Sidebar = ({ handleControlPanel }) => {
	return (
		<Box
			display="flex"
			justifyContent="space-between"
			style={{ height: "calc(100vh - 60px)" }}
			flexDirection={{ base: "row", lg: "column" }}
		>
			<Button
				colorPalette="orange"
				variant="surface"
				onClick={handleControlPanel}
			>
				<Icon as={MdOutlineSettings} /> CONTROL PANEL
			</Button>

			<Link to="/all-bochaneks/create-bochanek">
				<Button colorPalette="orange" variant="solid" w={{ lg: "100%" }}>
					<Icon as={MdOutlineAddCircleOutline} /> ADD NEW
				</Button>
			</Link>
		</Box>
	);
};
export default Sidebar;
