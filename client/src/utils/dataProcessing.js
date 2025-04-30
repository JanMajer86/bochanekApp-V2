export const dataProcessing = (data, dataParamsObj) => {
	if (!Array.isArray(data)) {
		console.error("data is not array!", data);
		return { processed: [], results: 0, availableLetters: [] };
	}

	// *** FILTERING ***
	const { genderFilter, letterFilter, userFilter } = dataParamsObj;
	const filterFn = (item) =>
		(!genderFilter || item.gender === genderFilter) &&
		(!userFilter || item.createdBy === userFilter);

	const filteredData = data.filter(filterFn);

	// *** GET AVAILABLE LETTERS ***
	const availableLetters = Array.from(
		new Set(data.map((item) => item.name[0]?.toUpperCase()))
	).sort((a, b) => a.localeCompare(b, "cs"));

	const letterFiltered =
		letterFilter && typeof letterFilter === "string"
			? filteredData.filter(
					(item) => item.name[0]?.toUpperCase() === letterFilter.toUpperCase()
			  )
			: filteredData;

	// *** GROUPING ***
	const { groupBy } = dataParamsObj;
	let groupFn;
	if (groupBy === "letter") groupFn = (item) => item.name[0];
	if (groupBy === "gender") groupFn = (item) => item.gender;
	if (groupBy === "user") groupFn = (item) => item.createdBy;

	const groupedData = letterFiltered.reduce((acc, item) => {
		const key = groupFn(item);
		if (!acc[key]) acc[key] = [];
		acc[key].push(item);
		return acc;
	}, {});

	const processed = Object.entries(groupedData)
		.map(([key, names]) => ({
			key,
			names,
		}))
		.sort((a, b) => a.key.localeCompare(b.key, "cs"));

	return { processed, results: letterFiltered.length, availableLetters };
};
