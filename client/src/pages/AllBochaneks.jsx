import { useLoaderData } from "react-router-dom";
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

	return (
		<BochanekContext.Provider value={user}>
			<div>
				<ul>
					{data.bochanci.map((bochanek) => {
						return (
							<li key={bochanek.name}>
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
