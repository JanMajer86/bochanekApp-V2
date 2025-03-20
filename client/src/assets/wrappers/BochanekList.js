import styled from "styled-components";

const Wrapper = styled.div`
	display: grid;
	grid-template-columns: 5fr 1fr;

	.group-segment {
		display: grid;
		grid-template-columns: 1fr 4fr;
	}

	.group-letter {
		margin: 0.6rem;
	}

	.group-letter h4 {
		font-size: 4rem;
		font-weight: 600;
	}
`;

export default Wrapper;
