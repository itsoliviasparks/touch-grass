import CloseButton from "./CloseButton";

const ApiError = ({ handleClose }) => {
    return (
        <>
            <CloseButton handleClose={handleClose}/>
            <h2>M.I.A</h2>
            <h3>U.S. National Park Service Data is missing in action</h3>
            <h3>Please try again</h3>
        </>
    );
};

export default ApiError;

