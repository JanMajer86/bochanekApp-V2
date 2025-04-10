import Wrapper from "../assets/wrappers/ControlPanel";
import { useGlobalContext } from "../pages/DashboardLayout";
import { FilterButtonSelect } from "./";

const ControlPanel = ({ isVisible }) => {
	const { dataParamsObj, handleSetParamsObj } = useGlobalContext();

	return (
		<Wrapper>
			<div className={`control-panel ${isVisible ? "visible" : "hidden"}`}>
				<h4>ControlPanel</h4>
				{/* FILTERING */}
				<FilterButtonSelect
					label="filter by gender"
					name="gender"
					filter="genderFilter"
					options={[
						{ label: "Oboje", value: null },
						{ label: "Holky", value: "Female" },
						{ label: "Kluci", value: "Male" },
					]}
					selected={dataParamsObj.genderFilter}
					onChange={handleSetParamsObj}
				/>
				{/* GROUPING */}
				<FilterButtonSelect
					label="group by"
					name="group"
					filter="groupBy"
					options={[
						{ label: "Abeceda", value: "letter" },
						{ label: "Gender", value: "gender" },
						{ label: "Uživatel", value: "user" },
					]}
					selected={dataParamsObj.groupBy}
					onChange={handleSetParamsObj}
				/>
			</div>
		</Wrapper>
	);
};
export default ControlPanel;
