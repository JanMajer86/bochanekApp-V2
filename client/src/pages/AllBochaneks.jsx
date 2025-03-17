import { useLoaderData, Outlet, Link } from "react-router-dom";
import customFetch from "../utils/customFetch";
import Bochanek from "../components/Bochanek";
import { useContext, createContext, useMemo } from "react";
import { BochanekList } from "../components";

export const loader = async () => {
	try {
		const { data } = await customFetch("/bochanek");
		return { data };
	} catch (error) {
		console.log(error);
	}
};

const BochanekContext = createContext();

const AllBochaneks = () => {
	const { data } = useLoaderData();
	const user = data.user;
	const bochanci = data.bochanci;

	const groupedBochanci = useMemo(() => {
		const obj = bochanci.reduce((acc, c) => {
			const letter = c.name[0];
			acc[letter] = (acc[letter] || [])
				.concat(c)
				.sort((a, b) => a.name.localeCompare(b.name));
			return acc;
		}, {});
		return Object.entries(obj)
			.map(([letter, names]) => {
				return { letter, names };
			})
			.sort((a, b) => a.letter > b.letter);
	}, [bochanci]);

	console.log(groupedBochanci);

	return (
		<BochanekContext.Provider value={user}>
			{/* this outlet for modal popups */}
			<Outlet />
			<div>
				<Link to="/all-bochaneks/create-bochanek">
					<button className="btn">ADD NEW</button>
				</Link>
				{/* BOCHANCI */}
				<BochanekList bochanci={groupedBochanci} />
			</div>
		</BochanekContext.Provider>
	);
};
export const useBochanekContext = () => useContext(BochanekContext);
export default AllBochaneks;
