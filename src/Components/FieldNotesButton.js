import { Link } from "react-router-dom";

const FieldNotesButton = () => {
    return (
        <Link to={"/field-notes"}>
            <button className="field-notes">Field Notes</button>
        </Link>
    )
}

export default FieldNotesButton;