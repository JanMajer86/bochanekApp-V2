const FormButtonSelect = ({ name, value1, value2 }) => {
	return (
		<div className="form-row">
			<label htmlFor={name} className="form-label">
				select user
			</label>
			<div className="btn-row">
				<input
					type="radio"
					name="name"
					id={value1}
					value={value1}
					required
					className="checkbox-hidden"
				/>
				<label htmlFor={value1} className="btn btn-user">
					{value1}
				</label>
				<input
					type="radio"
					name="name"
					id={value2}
					value={value2}
					required
					className="checkbox-hidden"
				/>
				<label htmlFor={value2} className="btn btn-user">
					{value2}
				</label>
			</div>
		</div>
	);
};
export default FormButtonSelect;
