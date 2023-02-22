import activityIds from "../assets/activityIds";
import usStates from "../assets/usStates";

import InputError from "./InputError";
import FieldNotesButton from "./FieldNotesButton";

const UserSelectors =
    ({
        handleStateSelection,
        handleActivitySelection,
        handleButton,
        inputError
    }) => {

        return (
            <>
                <form>
                    <fieldset className="state-selector">
                        <label htmlFor="stateSelector">
                            <h2>
                                Where is your field trip taking you?
                            </h2>
                        </label>
                        <select
                            name="stateSelector"
                            id="stateSelector"
                            onChange={handleStateSelection}>
                            <option value="">Select a State:</option>
                            {usStates.map((state) => {
                                return <option value={state.abbreviation}>{state.name}</option>
                            })}
                        </select>
                    </fieldset>
                    <fieldset className="activity-selector">
                        <legend>
                            <h2>
                                What do you want to do outside?
                            </h2>
                        </legend>
                        <ul>
                            {activityIds.map((activity) => (
                                <li key={activity.id}>
                                    <input
                                        type="checkbox"
                                        className="sr-only"
                                        name={activity.name}
                                        value={activity.id}
                                        id={activity.name}
                                        onClick={handleActivitySelection} />
                                    <label htmlFor={activity.name}>
                                        {activity.name}
                                    </label>
                                </li>
                            ))}
                        </ul>
                    </fieldset>
                    <button onClick={handleButton}>Your Adventure Awaits</button>
                    {inputError === true ? <InputError /> : null}
                </form>
                <FieldNotesButton />
            </>
        );
    };

export default UserSelectors;