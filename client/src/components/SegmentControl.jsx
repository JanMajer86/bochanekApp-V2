import { SegmentGroup, Text, Box } from "@chakra-ui/react";

const SegmentControl = ({
	label,
	name,
	filter,
	options,
	selected,
	defaultValue,
	onChange,
}) => {
	return (
		<Box>
			<Text mb={2} textStyle={"sm"} fontWeight={"semibold"}>
				{label || name}
			</Text>
			<SegmentGroup.Root
				value={selected || options[0].value}
				onValueChange={(e) => {
					if (e.value === options[0].value)
						return onChange(filter, defaultValue);
					onChange(filter, e.value);
				}}
				size="sm"
				bg="gray.100"
				gap="4"
				position="relative"
			>
				<SegmentGroup.Indicator
					bg="orange.500"
					borderRadius="lg"
					alignSelf={"center"}
				/>
				{options.map(({ label, value }) => {
					if (selected === null) selected = options[0].value;
					return (
						<SegmentGroup.Item
							key={value}
							value={value}
							color={selected === value ? "white" : "black"}
							cursor={"pointer"}
							w="20"
							justifyContent={"center"}
							css={{
								"&::before": { content: "none" },
							}}
						>
							<SegmentGroup.ItemHiddenInput />
							<Text fontSize="lg" fontWeight="bold">
								{label}
							</Text>
						</SegmentGroup.Item>
					);
				})}
			</SegmentGroup.Root>
		</Box>
	);
};

export default SegmentControl;
