import { Link } from "react-router-dom"

const Error404 = () => {
    return (
        <>
            <Link to="/" className="close">
                <p className="sr-only">To Home</p>
                <i className="fa-solid fa-circle-xmark"></i>
            </Link>
            <h2>404</h2>
            <h3>Lost in the Woods</h3>
        </>
    );
};

export default Error404;

