import CloseButton from "./CloseButton";

const FieldNotes = ({ handleClose }) => {
    return (
        <section className="field-notes">
        <CloseButton handleClose={handleClose}/>
        </section>
    );
};

export default FieldNotes;