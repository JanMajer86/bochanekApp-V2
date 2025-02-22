import { useLoaderData } from "react-router-dom";
import customFetch from "../utils/customFetch";

export const loader = async () => {
	try {
		const { data } = await customFetch("/bochanek");
		return { data };
	} catch (error) {
		console.log(error);
	}
};

const AllBochaneks = () => {
	const { data } = useLoaderData();
	console.log(data);

	return <div>{data.bochanci[0].name}</div>;
};
export default AllBochaneks;
