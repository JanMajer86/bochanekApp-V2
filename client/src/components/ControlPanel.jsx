import { Box, Portal, Select } from "@chakra-ui/react";
import { useGlobalContext } from "../pages/DashboardLayout";
import { RadioButtonSelect, DropdownMenuSelect, SegmentControl } from "./";

const ControlPanel = ({ isVisible }) => {
	const { dataParamsObj, handleSetParamsObj, filteredGroupedSortedData } =
		useGlobalContext();

	const { availableLetters } = filteredGroupedSortedData;
	const lettersObs = availableLetters.map((letter) => ({
		label: letter,
		value: letter,
	}));
	const letters = [{ label: "Všechny písmena", value: "all" }, ...lettersObs];

	const visible = {
		visibility: "visible",
		opacity: 1,
		height: "400px",
	};

	const hidden = {
		visibility: "hidden",
		opacity: 0,
		height: 0,
	};

	return (
		<Box css={isVisible ? visible : hidden} transition="all 0.3s">
			{/* FILTERING */}
			<SegmentControl
				label="filter by gender"
				name="gender"
				filter="genderFilter"
				options={[
					{ label: "Oboje", value: "all" },
					{ label: "Holky", value: "Female" },
					{ label: "Kluci", value: "Male" },
				]}
				selected={dataParamsObj.genderFilter}
				defaultValue={null}
				onChange={handleSetParamsObj}
			/>
			{/* LETTER DROPDOWN SELECT */}
			<DropdownMenuSelect
				label="filter by first letter"
				value={dataParamsObj.letterFilter}
				onChange={handleSetParamsObj}
				filter="letterFilter"
				data={letters}
			/>
			{/* GROUPING */}
			<SegmentControl
				label="group by"
				name="group"
				filter="groupBy"
				options={[
					{ label: "Abeceda", value: "letter" },
					{ label: "Gender", value: "gender" },
					{ label: "Uživatel", value: "user" },
				]}
				selected={dataParamsObj.groupBy}
				defaultValue="letter"
				onChange={handleSetParamsObj}
			/>
		</Box>
	);
};
export default ControlPanel;
