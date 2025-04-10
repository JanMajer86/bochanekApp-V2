import React from "react";

const FilterButtonSelect = ({
	label,
	name,
	filter,
	options,
	selected,
	onChange,
}) => {
	console.log(selected);
	return (
		// <fieldset style={{ border: "none", padding: 0, margin: "1rem 0" }}>
		// 	<legend>
		// 		<strong>{label}</strong>
		// 	</legend>
		// 	{options.map(({ label, value }) => (
		// 		<label key={label} style={{ marginRight: "1rem" }}>
		// 			<input
		// 				type="radio"
		// 				name={label}
		// 				value={value ?? ""}
		// 				checked={selected === value}
		// 				onChange={() => onChange("genderFilter", value)}
		// 				className="checkbox-hidden"
		// 			/>
		// 			{label}
		// 		</label>
		// 	))}
		// </fieldset>
		<div className="form-row mb-24">
			<label htmlFor={name} className="form-label">
				{label || name}
			</label>
			<div className="btn-row">
				{options.map(({ label, value }) => (
					<React.Fragment key={label}>
						<input
							key={name}
							type="radio"
							name={name}
							id={label}
							value={value ?? ""}
							checked={value === selected}
							onChange={() => onChange(filter, value)}
							className="checkbox-hidden"
						/>
						<label htmlFor={label} className="btn btn-radio">
							{label}
						</label>
					</React.Fragment>
				))}
			</div>
		</div>
	);
};
export default FilterButtonSelect;
