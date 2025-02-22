import styled from "styled-components";

const Wrapper = styled.div`
	input {
		/* display: block; */
	}
	input[type="radio"] {
		opacity: 0.01;
		z-index: 100;
	}

	input[type="radio"]:checked + label {
		background: red;
	}
`;
export default Wrapper;
