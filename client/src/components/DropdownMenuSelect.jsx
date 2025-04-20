import { Portal, Select } from "@chakra-ui/react";

const DropdownMenuSelect = (props) => {
	// const value = null;
	const { label, value, onChange, filter, data } = props;

	return (
		<Select.Root
			value={[value]}
			onValueChange={(e) => {
				const value = e?.value[0] || null;
				if (value === "all") return onChange(filter, null);
				onChange(filter, value);
			}}
			w={{ base: "100%", lg: "40" }}
		>
			<Select.HiddenSelect />
			<Select.Label textStyle={"sm"} fontWeight={"semibold"}>
				{label}
			</Select.Label>
			<Select.Control>
				<Select.Trigger>
					<Select.ValueText>{value || "všechny písmena"}</Select.ValueText>
				</Select.Trigger>
				<Select.IndicatorGroup>
					<Select.Indicator />
				</Select.IndicatorGroup>
			</Select.Control>
			<Portal>
				<Select.Positioner>
					<Select.Content>
						{data.map((item) => (
							<Select.Item key={item.label} item={item.value}>
								{item.label}
							</Select.Item>
						))}
					</Select.Content>
				</Select.Positioner>
			</Portal>
		</Select.Root>
	);
};
export default DropdownMenuSelect;
