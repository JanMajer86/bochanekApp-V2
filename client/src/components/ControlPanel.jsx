import { Box, Portal, Select } from "@chakra-ui/react";
import { useGlobalContext } from "../pages/DashboardLayout";
import { RadioButtonSelect } from "./";
// import { TbLetterM } from "react-icons/tb";

const ControlPanel = ({ isVisible }) => {
	const { dataParamsObj, handleSetParamsObj, filteredGroupedSortedData } =
		useGlobalContext();

	const { availableLetters } = filteredGroupedSortedData;

	const visible = {
		visibility: "visible",
		opacity: 1,
		height: "214px",
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
			// border="2px solid"
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

			{/* LETTER SELECT */}
			<Select.Root
				w="120px"
				value={[dataParamsObj.letterFilter]}
				onValueChange={(e) => {
					const value = e?.value[0] || null;
					console.log(value);
					handleSetParamsObj("letterFilter", e.value[0]);
				}}
			>
				<Select.HiddenSelect />
				<Select.Label>filter by first letter</Select.Label>
				<Select.Control>
					<Select.Trigger>
						<Select.ValueText placeholder="všechny písmena" />
					</Select.Trigger>
					<Select.IndicatorGroup>
						<Select.Indicator />
					</Select.IndicatorGroup>
				</Select.Control>
				<Portal>
					<Select.Positioner>
						<Select.Content>
							{availableLetters.map((letter) => (
								<Select.Item key={letter} value={letter} item={letter}>
									{letter}
								</Select.Item>
							))}
						</Select.Content>
					</Select.Positioner>
				</Portal>
			</Select.Root>

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
