import { Link } from "react-router-dom"

const Loading = ({ handleClose }) => {
    return (
        <>
            <Link to="/" className="close" onClick={handleClose}>
                <p className="sr-only">To Home</p>
                <i className="fa-solid fa-circle-xmark"></i>
            </Link>
            <div className="loading">
                <i className="fa-solid fa-tree"></i>
                <i className="fa-solid fa-tree"></i>
                <i className="fa-solid fa-tree"></i>
                <p className="sr-only">Loading</p>
            </div>
        </>
    );
};

export default Loading;