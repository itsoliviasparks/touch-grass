import CloseButton from "./CloseButton";

const ApiError = ({ handleClose }) => {
    return (
        <>
            <CloseButton handleClose={handleClose}/>
            <h3>M.I.A</h3>
            <h4>U.S. National Park Service Data is missing in action</h4>
            <h4>Please try again</h4>
        </>
    );
};

export default ApiError;

