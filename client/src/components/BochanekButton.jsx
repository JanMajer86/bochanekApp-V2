import { Button, HStack, Icon, Text } from "@chakra-ui/react";

const BochanekButton = ({ icon, text }) => {
	return (
		<Button variant="outline">
			<HStack>
				<Icon as={icon} />
				<Text display={{ base: "none", lg: "block" }}>{text}</Text>
			</HStack>
		</Button>
	);
};
export default BochanekButton;
