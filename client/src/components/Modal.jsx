import { useNavigate } from "react-router-dom";
import Wrapper from "../assets/wrappers/Modal";

const Modal = () => {
	const navigate = useNavigate();
	return (
		<Wrapper>
			<div className="modal">
				modal
				<button onClick={() => navigate(-1)}>Close</button>
			</div>
			;
		</Wrapper>
	);
};
export default Modal;
