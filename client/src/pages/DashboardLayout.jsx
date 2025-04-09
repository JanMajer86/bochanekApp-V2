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

const filterGroupSortData = (data, filterFn, groupFn) => {
	// filtrování
	const filteredData = filterFn ? data.filter(filterFn) : data;
	// groupování
	const groupedData = filteredData.reduce((acc, item) => {
		const key = groupFn(item);
		if (!acc[key]) acc[key] = [];
		acc[key].push(item);
		return acc;
	}, {});

	return { groupedData, results: filteredData.length };
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
			(!letterFilter ||
				item.name[0].toUpperCase() === letterFilter.toUpperCase()) &&
			(!userFilter || item.createdBy === userFilter);

		// *** GROUPING ***
		let groupFn = null;
		if (dataParamsObj.groupBy === "letter") groupFn = (item) => item.name[0];
		const { groupedData, results } = filterGroupSortData(
			bochanci,
			filterFn,
			groupFn
		);
		const processed = Object.entries(groupedData)
			.map(([key, names]) => ({
				key,
				names,
			}))
			.sort((a, b) => a.key > b.key);
		return { processed, results };
	}, [bochanci, dataParamsObj]);

	const logoutUser = async () => {
		await customFetch.get("/auth/logout");
		navigate("/");
	};

	return (
		<GlobalContext.Provider
			value={{
				user,
				logoutUser,
				// handleDataProcessing
			}}
		>
			{/* HEADER */}
			<Header />

			{/* this outlet for modal popups */}
			<Outlet />
			<div>
				{/* BOCHANCI */}
				<BochanekList bochanci={filteredGroupedSortedData} />
			</div>
		</GlobalContext.Provider>
	);
};
export const useGlobalContext = () => useContext(GlobalContext);
export default DashboardLayout;
