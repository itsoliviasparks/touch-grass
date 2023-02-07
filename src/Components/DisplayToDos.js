import { useState, useEffect } from "react";

import firebase from "../firebase";
import { getDatabase, ref, onValue } from 'firebase/database';

import CloseButton from "./CloseButton";

const DisplayToDos = ({ handleClose }) => {
    const [toDos, setToDos] = useState([]);

    useEffect(() => {
        const database = getDatabase(firebase);
        const dbRef = ref(database);
        onValue(dbRef, (res) => {
            setToDos(res.val());
        })
    }, []);

    return (
        <section className="field-notes">
            <CloseButton handleClose={handleClose} />
            <h3>Field Notes</h3>
            <p className="main">Please select <i className="fa-solid fa-circle-check"></i> to mark as completed</p>
            <p className="main">Please select <i className="fa-solid fa-circle-xmark"></i> to remove from your Field Notes</p>
            <p className="main">Please select <i className="fa-solid fa-info"></i> for additional park information</p>
            <div className="to-do-cards">
                <div className="to-do card">
                    <h4>Plan For Your Visit</h4>
                    <ul>
                        {
                            toDos.map(({ isDone, park, state, activity }, i) => {
                                if (isDone === true) {
                                    return null
                                } else {
                                    return (
                                        <li key={i}>
                                            <div className="park-name">
                                                <i className="fa-solid fa-circle-check"></i>
                                                <i className="fa-solid fa-circle-xmark"></i>
                                                <p>{park}, {state}: {activity}</p>
                                            </div>
                                            <a href="#" target="_blank" rel="noreferrer" className="park-info-link">
                                                <i className="fa-solid fa-info"></i>
                                                <p className="sr-only">Park Info Link</p>
                                            </a>
                                        </li>
                                    )
                                }
                            })
                        }
                    </ul>
                </div>
                <div className="to-do card">
                    <h4>Visited</h4>
                    <ul>
                        {
                            toDos.map(({ isDone, park, state, activity }, i) => {
                                if (isDone === false) {
                                    return null
                                } else {
                                    return (
                                        <li key={i}>
                                            <div className="park-name">
                                                <i className="fa-solid fa-circle-xmark"></i>
                                                <p className="done">{park}, {state}: {activity}</p>
                                            </div>
                                            <a href="#" target="_blank" rel="noreferrer" className="park-info-link">
                                                <i className="fa-solid fa-info"></i>
                                                <p className="sr-only">Park Info Link</p>
                                            </a>
                                        </li>
                                    )
                                }
                            })
                        }
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default DisplayToDos;

//when user clicks on activity, it's added to the database:
    //add activity & location
    //add done: false

// shows on FieldNotes component in to-do column.
//when checked off, changes to done: true
    //show on done column