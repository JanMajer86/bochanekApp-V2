import { useLoaderData, Outlet, Link } from "react-router-dom";
import customFetch from "../utils/customFetch";
import Bochanek from "../components/Bochanek";
import { useContext, createContext, useEffect, useState, useMemo } from "react";

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
			<Outlet />
			<div>
				<Link to="/all-bochaneks/create-bochanek">
					<button className="btn">ADD NEW</button>
				</Link>
				<ul>
					{/* {data.bochanci.map((bochanek, index) => {
						return (
							<li key={index}>
								<Bochanek {...bochanek} />
							</li>
						);
					})} */}
					{groupedBochanci.map((group) => {
						console.log(group);
						return (
							<h4 key={group.letter}>
								{group.letter} - {group.names.length}
							</h4>
						);
					})}
				</ul>
			</div>
		</BochanekContext.Provider>
	);
};
export const useBochanekContext = () => useContext(BochanekContext);
export default AllBochaneks;
