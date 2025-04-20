import { Container } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
	return (
		<Container color="gray.950" bgColor="white" fluid m="0" p="0" minH="100vh">
			<Outlet />
		</Container>
	);
};
export default HomeLayout;
