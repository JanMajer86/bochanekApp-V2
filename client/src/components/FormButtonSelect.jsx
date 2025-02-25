const FormButtonSelect = ({
	name,
	label,
	value1,
	value2,
	defaultValue = "",
}) => {
	return (
		<div className="form-row mb-24">
			<label htmlFor={name} className="form-label">
				{label || name}
			</label>
			<div className="btn-row">
				<input
					type="radio"
					name={name}
					id={value1}
					value={value1}
					defaultChecked={defaultValue === value1}
					required
					className="checkbox-hidden"
				/>
				<label htmlFor={value1} className="btn btn-radio">
					{value1}
				</label>
				<input
					type="radio"
					name={name}
					id={value2}
					value={value2}
					defaultChecked={defaultValue === value2}
					required
					className="checkbox-hidden"
				/>
				<label htmlFor={value2} className="btn btn-radio">
					{value2}
				</label>
			</div>
		</div>
	);
};
export default FormButtonSelect;
