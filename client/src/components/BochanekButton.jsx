import { Box, Button, HStack, Icon, Text } from "@chakra-ui/react";

const BochanekButton = ({ icon, text }) => {
	return (
		<Box flex={{ base: "none", sm: 1 }}>
			<Button variant="outline" w="100%" display={"block"}>
				<HStack>
					<Icon as={icon} />
					<Text display={{ base: "none", sm: "block" }}>{text}</Text>
				</HStack>
			</Button>
		</Box>
	);
};
export default BochanekButton;
