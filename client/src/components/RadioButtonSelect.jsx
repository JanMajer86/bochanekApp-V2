import { Flex, Group, RadioCard } from "@chakra-ui/react";

const RadioButtonSelect = ({
	label,
	name,
	filter,
	options,
	selected,
	onChange,
}) => {
	return (
		<Flex>
			<RadioCard.Root
				value={selected || ""}
				colorPalette="orange"
				size="sm"
				variant="surface"
			>
				<RadioCard.Label>{label || name}</RadioCard.Label>
				<Group attached>
					{options.map(({ label, value }) => (
						<RadioCard.Item
							key={label}
							value={value || ""}
							onChange={() => onChange(filter, value)}
						>
							<RadioCard.ItemHiddenInput />
							<RadioCard.ItemControl>
								<RadioCard.ItemText fontSize="lg" fontWeight="bold">
									{label}
								</RadioCard.ItemText>
								<RadioCard.ItemIndicator />
							</RadioCard.ItemControl>
						</RadioCard.Item>
					))}
				</Group>
			</RadioCard.Root>
		</Flex>
	);
};
export default RadioButtonSelect;
