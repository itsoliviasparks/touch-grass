import { useState, useEffect } from "react";

import firebase from "../firebase";
import { getDatabase, ref, onValue, update, remove } from 'firebase/database';

import CloseButton from "./CloseButton";

const DisplayToDos = ({ handleClose }) => {
    const [toDos, setToDos] = useState([]);

    useEffect(() => {
        const database = getDatabase(firebase);
        const dbRef = ref(database);
        onValue(dbRef, (res) => {
            const responseArr = [];
            const response = res.val();
            //change object response from firebase into an array
            for (let key in response) {
                responseArr.push({ key: key, data: response[key] });
            }
            setToDos(responseArr);
        })
    }, []);


    const handleVisitedButton = (toDo) => {
        const database = getDatabase(firebase);
        const dbRef = ref(database, `/${toDo.key}`);
        return update(dbRef, {isDone: true})
    };

    const handleDeleteButton = (toDo) => {
        const database = getDatabase(firebase);
        const dbRef = ref(database, `/${toDo.key}`);
        remove(dbRef);
    };

    const handleUnvisitedButton = (toDo) => {
        const database = getDatabase(firebase);
        const dbRef = ref(database, `/${toDo.key}`);
        return update(dbRef, {isDone: false})
    };

    return (
        <section className="field-notes">
            <CloseButton handleClose={handleClose} />
            <h3>Field Notes</h3>
            <p className="instruction">How to write your Field Notes:</p>
            <p className="instruction"><i className="fa-solid fa-circle-check"></i> marks the activity as visited</p>
            <p className="instruction"><i className="fa-solid fa-circle-xmark"></i> removes the activity from your Field Notes</p>
            <p className="instruction"><i className="fa-solid fa-circle-arrow-left"></i> moves the activity from <em>Visited</em> and into <em>Plan For Your Visit</em></p>
            <p className="instruction"><i className="fa-solid fa-info"></i> navigates to the U. S. National Park's official website</p>
            <div className="to-do-cards">
                <div className="to-do card">
                    <h4>Plan For Your Visit</h4>
                    <ul>
                        {
                            toDos.map((toDo) => {
                                if (toDo.data.isDone === true) {
                                    return null
                                } else {
                                    return (
                                        <li key={toDo.key}>
                                            <div className="park-name">
                                                <div className="buttons">
                                                    <button className="to-do-button" onClick={() => handleVisitedButton(toDo)}>
                                                        <i className="fa-solid fa-circle-check"></i>
                                                    </button>
                                                    <button className="to-do-button" onClick={() => handleDeleteButton(toDo)}>
                                                        <i className="fa-solid fa-circle-xmark"></i>
                                                    </button>
                                                </div>
                                                <p><span>{toDo.data.park}</span>: {toDo.data.activity}</p>
                                            </div>
                                            <a href={toDo.data.url} target="_blank" rel="noreferrer" className="park-info-link">
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
                            toDos.map((toDo) => {
                                if (toDo.data.isDone === false) {
                                    return null
                                } else {
                                    return (
                                        <li key={toDo.key}>
                                            <div className="park-name">
                                                <div className="buttons">
                                                    <button className="to-do-button" onClick={() => handleUnvisitedButton(toDo)}>
                                                        <i className="fa-solid fa-circle-arrow-left"></i>
                                                    </button>
                                                </div>
                                                <p className="done"><span>{toDo.data.park}</span>: {toDo.data.activity}</p>
                                            </div>
                                            <a href={toDo.data.url} target="_blank" rel="noreferrer" className="park-info-link">
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