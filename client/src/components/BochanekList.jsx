import {
	Box,
	Center,
	Grid,
	GridItem,
	Heading,
	ListRoot,
} from "@chakra-ui/react";
import { Bochanek, Sidebar } from "./";
import ControlPanel from "./ControlPanel";
import { useState } from "react";

const BochanekList = ({ bochanci }) => {
	const names = bochanci.processed;
	const numOfResults = bochanci.results;
	const [isControlPanel, setIsControlPanel] = useState(false);

	const handleControlPanel = () => {
		setIsControlPanel(!isControlPanel);
	};

	return (
		<Center>
			<Grid
				templateColumns="repeat(6, 1fr)"
				// border={"1px solid black"}
				w="90vw"
				maxW="1200px"
			>
				{/* MAIN */}
				<GridItem
					as="main"
					colSpan={{ base: 6, lg: 5 }}
					gridRowStart={{ base: 2, lg: 1 }}
				>
					<Box bg="white" h="100%">
						{/* CONTROL PANEL */}
						{/* HIDDEN BY DEFAULT */}
						<ControlPanel isVisible={isControlPanel} />

						<Heading mb="4">results: {numOfResults}</Heading>
						{/* BOCHANEK LIST */}
						{names.map((group) => {
							return (
								<Grid templateColumns={"48px auto"} key={group.key}>
									<GridItem>
										<Heading as="h2">{group.key}</Heading>
									</GridItem>
									<GridItem>
										<ListRoot>
											{group.names.map((bochanek) => (
												<Bochanek key={bochanek._id} {...bochanek} />
											))}
										</ListRoot>
									</GridItem>
								</Grid>
							);
						})}
					</Box>
				</GridItem>
				{/* SIDEBAR */}
				<GridItem as="aside" colSpan={{ base: 6, lg: 1 }}>
					<Sidebar handleControlPanel={handleControlPanel} />
				</GridItem>
			</Grid>
		</Center>
	);
};
export default BochanekList;
