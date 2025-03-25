import styled from "styled-components";

const Wrapper = styled.div`
	width: 100vw;
	height: 100vh;
	position: absolute;
	top: 0;
	left: 0;
	background-color: rgba(91, 112, 131, 0.4);
	display: flex;
	justify-content: center;
	align-items: center;

	.modal {
		width: 384px;
		padding: 16px;

		/* height: 200px; */
		background-color: white;
		border-radius: 5px;
		/* text-align: center; */
	}

	h3 {
		text-align: center;
		margin-bottom: 24px;
	}

	.btn-block {
		margin-bottom: 4px;
	}
`;

export default Wrapper;
