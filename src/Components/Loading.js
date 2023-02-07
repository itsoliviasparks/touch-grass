import CloseButton from "./CloseButton";

const Loading = ({ handleClose }) => {
    return (
        <>
            <CloseButton handleClose={handleClose}/>
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