import CloseButton from "./CloseButton";

const Error404 = ({ handleClose }) => {
    return (
        <>
            <CloseButton handleClose={handleClose}/>
            <h3>404</h3>
            <h4>Lost in the Woods</h4>
        </>
    );
};

export default Error404;

