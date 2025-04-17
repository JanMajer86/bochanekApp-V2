import { Box, Center, Container, Grid, GridItem } from "@chakra-ui/react";
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
		<Center mt={4}>
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
						<ControlPanel isVisible={isControlPanel} />

						<h4>results: {numOfResults}</h4>
						{/* BOCHANEK LIST */}
						{/* {names.map((group) => {
						return (
							<article className="group-segment" key={group.key}>
								<div className="group-letter">
									<h4>{group.key}</h4>
								</div>
								<div className="group-names">
									<ul>
										{group.names.map((bochanek) => (
											<Bochanek key={bochanek._id} {...bochanek} />
										))}
									</ul>
								</div>
							</article>
						);
					})} */}
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
