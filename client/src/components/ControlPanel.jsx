import { Box } from "@chakra-ui/react";
import { useGlobalContext } from "../pages/DashboardLayout";
import { RadioButtonSelect } from "./";

const ControlPanel = ({ isVisible }) => {
	const { dataParamsObj, handleSetParamsObj, filteredGroupedSortedData } =
		useGlobalContext();
	const { availableLetters } = filteredGroupedSortedData;
	console.log(availableLetters);

	const visible = {
		visibility: "visible",
		opacity: 1,
		height: "200px",
	};

	const hidden = {
		visibility: "hidden",
		opacity: 0,
		height: 0,
	};

	return (
		<Box
			css={isVisible ? visible : hidden}
			transition="all 0.3s"
			border="2px solid"
		>
			{/* FILTERING */}
			<RadioButtonSelect
				label="filter by gender"
				name="gender"
				filter="genderFilter"
				options={[
					{ label: "Oboje", value: null },
					{ label: "Holky", value: "Female" },
					{ label: "Kluci", value: "Male" },
				]}
				selected={dataParamsObj.genderFilter}
				onChange={handleSetParamsObj}
			/>

			{/* GROUPING */}
			<RadioButtonSelect
				label="group by"
				name="group"
				filter="groupBy"
				options={[
					{ label: "Abeceda", value: "letter" },
					{ label: "Gender", value: "gender" },
					{ label: "Uživatel", value: "user" },
				]}
				selected={dataParamsObj.groupBy}
				onChange={handleSetParamsObj}
			/>
		</Box>
	);
};
export default ControlPanel;
