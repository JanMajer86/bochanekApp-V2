import { SegmentGroup, Text, Box } from "@chakra-ui/react";

const SegmentControl = ({
	options,
	selected,
	onChange,
	filter,
	label,
	name,
}) => {
	console.log(selected);
	return (
		<Box>
			<Text mb={2} fontWeight="bold">
				{label || name}
			</Text>
			<SegmentGroup.Root
				value={selected || "all"}
				onValueChange={(e) => {
					console.log(e.value);
					if (e.value === "all") return onChange(filter, null);
					onChange(filter, e.value);
				}}
				size="sm"
				bg="gray.100"
				flexDirection={"row"}
				gap="4"
			>
				<SegmentGroup.Indicator
					// zIndex={-10}
					bg="orange.500"
					borderRadius="lg"
				/>
				{options.map(({ label, value }) => (
					<SegmentGroup.Item
						key={value}
						value={value || "all"}
						color={selected === value ? "white" : "black"}
						cursor={"pointer"}
					>
						<SegmentGroup.ItemHiddenInput />
						<Text fontSize="lg" fontWeight="bold">
							{label}
						</Text>
					</SegmentGroup.Item>
				))}
			</SegmentGroup.Root>
		</Box>
	);
};

export default SegmentControl;
