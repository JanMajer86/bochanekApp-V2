import styled from "styled-components";

const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

	border: 2px solid var(--black);
	width: 90%;

	box-shadow: var(--shadow-1);
	padding: 0.2rem;
	margin: 0.6rem;

	.name {
		border-bottom: 2px solid var(--grey-600);
		text-transform: uppercase;
	}
	.name svg {
		margin-right: 0.4rem;
	}

	.buttons {
		display: flex;
		height: max-content;
	}

	.btn {
		margin-left: 0.2rem;
		padding: 0.375rem;
		display: flex;
		place-items: center;
	}
	.btn svg {
		margin-right: 0.2rem;
	}
`;

export default Wrapper;
