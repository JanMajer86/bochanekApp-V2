import { useLoaderData, Outlet, useNavigate } from "react-router-dom";
import customFetch from "../utils/customFetch";
import { useContext, createContext, useMemo, useState, useEffect } from "react";
import { Header, BochanekList } from "../components";
import { dataProcessing } from "../utils/dataProcessing";

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

	const [isModalOpen, setIsModalOpen] = useState(false);
	const handleModalOpen = () => {
		setIsModalOpen(!isModalOpen);
	};

	const [dataParamsObj, setDataParamsObj] = useState({
		groupBy: "letter",
		genderFilter: null,
		letterFilter: null,
		userFilter: false,
	});

	const filteredGroupedSortedData = useMemo(() => {
		return dataProcessing(bochanci, dataParamsObj);
	}, [bochanci, dataParamsObj]);

	const handleSetParamsObj = (key, value) => {
		setDataParamsObj((prev) => ({ ...prev, [key]: value }));
	};

	const logoutUser = async () => {
		await customFetch.get("/auth/logout");
		navigate("/");
	};

	useEffect(() => {
		if (isModalOpen) {
			document.body.style.overflowY = "hidden";
		} else {
			document.body.style.overflowY = "auto";
		}
	});

	return (
		<GlobalContext.Provider
			value={{
				user,
				logoutUser,
				dataParamsObj,
				handleSetParamsObj,
				handleModalOpen,
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
