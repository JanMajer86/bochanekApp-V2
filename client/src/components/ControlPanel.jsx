import { Box, Portal, Select } from "@chakra-ui/react";
import { useGlobalContext } from "../pages/DashboardLayout";
import { RadioButtonSelect } from "./";

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
				// w="120px"
				value={[dataParamsObj.letterFilter]}
				alignContent={"start"}
				onValueChange={(e) => {
					const value = e?.value[0] || null;
					console.log(value);
					if (value === "all") return handleSetParamsObj("letterFilter", null);

					handleSetParamsObj("letterFilter", e.value[0]);
				}}
			>
				<Select.HiddenSelect />
				<Select.Label>filter by first letter</Select.Label>
				<Select.Control>
					<Select.Trigger>
						<Select.ValueText>
							{dataParamsObj.letterFilter || "všechny písmena"}
						</Select.ValueText>
					</Select.Trigger>
					<Select.IndicatorGroup>
						<Select.Indicator />
					</Select.IndicatorGroup>
				</Select.Control>
				<Portal>
					<Select.Positioner>
						<Select.Content>
							{letters.map((letter) => (
								<Select.Item
									key={letter.label}
									value={letter.value}
									item={letter.value}
								>
									{letter.label}
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
