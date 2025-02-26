import styled from "styled-components";

const Wrapper = styled.div`
	/* width: 300px; */
	border: 2px solid var(--black);
	width: 400px;

	box-shadow: var(--shadow-1);
	padding: 1rem;
	margin: 0.6rem;

	.name svg {
		margin-right: 8px;
	}

	.name {
		border-bottom: 2px solid var(--grey-600);
		width: max-content;
		text-transform: uppercase;
		margin-bottom: 24px;
	}

	.actions {
		display: flex;
	}

	.buttons {
		display: flex;
	}

	.btn {
		margin: 0.2rem;
		padding: 0.375rem;
		background: transparent;
		border-radius: 100px;
		border: none;
	}
	.btn svg {
		size: 3rem;
	}
`;

export default Wrapper;
