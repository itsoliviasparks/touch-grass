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
            <h2>Field Notes</h2>
            <div className="to-do-cards">
                <div className="to-do card">
                    <h3>Plan For Your Visit</h3>
                    <ul>
                        {
                            toDos.map(({ isDone, park, state, activity }, i) => {
                                if (isDone === true) {
                                    return null
                                } else {
                                    return (
                                        <li key={i}>
                                            <p>{park}, {state}: {activity}</p>
                                        </li>
                                    )
                                }
                            })
                        }
                    </ul>
                </div>
                <div className="done card">
                    <h3>Visited</h3>
                    <ul>
                        {
                            toDos.map(({ isDone, park, state, activity }, i) => {
                                if (isDone === false) {
                                    return null
                                } else {
                                    return (
                                        <li key={i}>
                                            <p>{park}, {state}: {activity}</p>
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