import { useLoaderData, Outlet, useNavigate } from "react-router-dom";
import customFetch from "../utils/customFetch";
import { useContext, createContext, useMemo, useState } from "react";
import { Header, BochanekList } from "../components";

export const loader = async () => {
	try {
		const { data } = await customFetch.get("/bochanek");
		return { data };
	} catch (error) {
		console.log(error);
	}
};

const GlobalContext = createContext();

const DashboardLayout = () => {
	const navigate = useNavigate();
	const { data } = useLoaderData();
	const user = data.user;
	const bochanci = data.bochanci;

	const [dataParamsObj, setDataParamsObj] = useState({
		groupBy: "letter",
		// sortBy: "alphabet",
		// sortDirection: "asc",
		genderFilter: null,
		letterFilter: null,
		userFilter: null,
	});

	const filteredGroupedSortedData = useMemo(() => {
		// *** FILTERING ***
		const { genderFilter, letterFilter, userFilter } = dataParamsObj;
		const filterFn = (item) =>
			(!genderFilter || item.gender === genderFilter) &&
			(!userFilter || item.createdBy === userFilter);

		const filteredData = bochanci.filter(filterFn);

		// *** GET AVAILABLE LETTERS ***
		const availableLetters = Array.from(
			new Set(bochanci.map((item) => item.name[0].toUpperCase()))
		).sort((a, b) => a.localeCompare(b, "cs"));

		const letterFiltered = letterFilter
			? filteredData.filter(
					(item) => item.name[0].toUpperCase() === letterFilter.toUpperCase()
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

		// process => data into array
		const processed = Object.entries(groupedData)
			.map(([key, names]) => ({
				key,
				names,
			}))
			.sort((a, b) => a.key.localeCompare(b.key, "cs"));

		return { processed, results: letterFiltered.length, availableLetters };
	}, [bochanci, dataParamsObj]);

	const handleSetParamsObj = (key, value) => {
		setDataParamsObj((prev) => ({ ...prev, [key]: value }));
	};

	const logoutUser = async () => {
		await customFetch.get("/auth/logout");
		navigate("/");
	};

	return (
		<GlobalContext.Provider
			value={{
				user,
				logoutUser,
				dataParamsObj,
				handleSetParamsObj,
				filteredGroupedSortedData,
			}}
		>
			<Header />
			{/* this outlet for modal popups */}
			<Outlet />
			{/* BOCHANCI */}
			<BochanekList bochanci={filteredGroupedSortedData} />
		</GlobalContext.Provider>
	);
};
export const useGlobalContext = () => useContext(GlobalContext);
export default DashboardLayout;
