import { Link } from "react-router-dom"

const ApiError = ({ handleClose }) => {
    return (
        <>
            <Link to="/" className="close" onClick={handleClose}>
                <p className="sr-only">To Home</p>
                <i className="fa-solid fa-circle-xmark"></i>
            </Link>
            <h2>M.I.A</h2>
            <h3>U.S. National Park Service Data is missing in action</h3>
            <h3>Please try again</h3>
        </>
    );
};

export default ApiError;

