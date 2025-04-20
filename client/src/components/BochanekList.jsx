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
				w={{ base: "95vw", lg: "90vw" }}
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

						<Heading mb="4" size={{ base: "sm", lg: "lg" }}>
							results: {numOfResults}
						</Heading>
						{/* BOCHANEK LIST */}
						{names.map((group) => {
							return (
								<Grid templateColumns={"72px auto"} key={group.key}>
									<GridItem mb={{ base: "2", lg: 0 }}>
										<Heading as="h2">{group.key}</Heading>
									</GridItem>
									<GridItem
										gridRow={{ base: "2", lg: "1" }}
										gridColumn={{ base: "1/-1", lg: "2/-1" }}
									>
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
					<Sidebar
						isControlPanel={isControlPanel}
						handleControlPanel={handleControlPanel}
					/>
				</GridItem>
			</Grid>
		</Center>
	);
};
export default BochanekList;
