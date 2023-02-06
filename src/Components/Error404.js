import CloseButton from "./CloseButton";

const Error404 = ({ handleClose }) => {
    return (
        <>
            <CloseButton handleClose={handleClose}/>
            <h2>404</h2>
            <h3>Lost in the Woods</h3>
        </>
    );
};

export default Error404;

