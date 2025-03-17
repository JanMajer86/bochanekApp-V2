import { useLoaderData, Outlet, Link } from "react-router-dom";
import customFetch from "../utils/customFetch";
import Bochanek from "../components/Bochanek";
import { useContext, createContext } from "react";

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

	const groupNames = () => {
		const obj = data.bochanci.reduce((acc, c) => {
			const letter = c.name[0];
			acc[letter] = (acc[letter] || [])
				.concat(c)
				.sort((x, y) => x.name.localeCompare(y.name));
			return acc;
		}, []);
		return obj;
	};

	console.log(groupNames());

	return (
		<BochanekContext.Provider value={user}>
			<Outlet />
			<div>
				<Link to="/all-bochaneks/create-bochanek">
					<button className="btn">ADD NEW</button>
				</Link>
				<ul>
					{data.bochanci.map((bochanek, index) => {
						return (
							<li key={index}>
								<Bochanek {...bochanek} />
							</li>
						);
					})}
				</ul>
			</div>
		</BochanekContext.Provider>
	);
};
export const useBochanekContext = () => useContext(BochanekContext);
export default AllBochaneks;
