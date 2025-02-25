import styled from "styled-components";

const Wrapper = styled.div`
	.btn-row {
		display: flex;
		justify-content: space-between;
	}

	.btn-radio {
		width: 48%;
	}

	.checkbox-hidden {
		display: block;
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
	}
	input[type="radio"] {
		opacity: 0;
		visibility: hidden;
		z-index: 100;
	}

	input[type="radio"]:checked + label {
		background: red;
	}
`;
export default Wrapper;
