import styled from "styled-components";

const Wrapper = styled.div`
	.control-panel {
		background-color: var(--grey-200);
		transition: all 0.3s;
	}
	.hidden {
		visibility: hidden;
		opacity: 0;
		height: 0;
	}
	.visible {
		visibility: visible;
		opacity: 1;
		height: 200px;
	}
`;

export default Wrapper;
