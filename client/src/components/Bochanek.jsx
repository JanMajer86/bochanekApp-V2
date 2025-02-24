import { useBochanekContext } from "../pages/AllBochaneks";

const Bochanek = ({ name, gender, createdBy }) => {
	const user = useBochanekContext();
	const isOwned = user.name === createdBy;
	console.log(isOwned);
	return (
		<>
			{name} <span>{gender}</span> <span>{createdBy}</span>
			<br />
			{isOwned && (
				<>
					<span>edit</span> <span>delete</span>
				</>
			)}
		</>
	);
};
export default Bochanek;
