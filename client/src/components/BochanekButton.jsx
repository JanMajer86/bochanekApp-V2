import { Box, Button, HStack, Icon, Text } from "@chakra-ui/react";

const BochanekButton = ({ icon, text, type = "" }) => {
	return (
		<Box flex={{ base: "none", sm: 1 }}>
			<Button type={type} variant="outline" w="100%" display={"block"}>
				<HStack>
					<Icon as={icon} />
					<Text display={{ base: "none", sm: "block" }}>{text}</Text>
				</HStack>
			</Button>
		</Box>
	);
};
export default BochanekButton;
