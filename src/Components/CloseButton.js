import { Link } from "react-router-dom";

const CloseButton = ({ handleClose }) => {
    return (
        <Link to="/" className="close" onClick={handleClose}>
            <p className="sr-only">To Home</p>
            <i className="fa-solid fa-circle-xmark"></i>
        </Link>
    );
};

export default CloseButton;