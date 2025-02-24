import styled from "styled-components";

const Wrapper = styled.div`
	/* width: 300px; */
	display: flex;
	justify-content: space-between;
	border: 2px solid var(--grey-500);
	border-radius: var(--border-radius);
	box-shadow: var(--shadow-1);
	padding: 1rem;
	margin: 0.6rem;

	.first-letter {
		background-color: ${(props) => (props.$gender === "male" ? "blue" : "red")};
		border-radius: 2px;
		color: var(--white);
		text-transform: uppercase;
	}

	div {
		display: flex;
		flex-direction: column;
		height: 70px;
	}

	.info {
		justify-content: space-between;
	}

	.actions {
		margin-left: 4rem;
	}

	.btn {
		margin: 0.2rem;
	}
`;

export default Wrapper;
