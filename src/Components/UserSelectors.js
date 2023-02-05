import { useEffect } from "react";
import InputError from "./InputError";

const UserSelectors = ({ handleStateSelection, handleActivitySelection, handleButton, inputError }) => {
    const activityIds = [
        { id: "BFF8C027-7C8F-480B-A5F8-CD8CE490BFBA", name: "Hiking" },
        { id: "A59947B7-3376-49B4-AD02-C0423E08C5F7", name: "Camping" },
        { id: "0B685688-3405-4E2A-ABBA-E3069492EC50", name: "Wildlife Watching" },
        { id: "13A57703-BB1A-41A2-94B8-53B692EB7238", name: "Stargazing" },
        { id: "7779241F-A70B-49BC-86F0-829AE332C708", name: "Playground Playing" },
        { id: "B12FAAB9-713F-4B38-83E4-A273F5A43C77", name: "Rock Climbing" },
        { id: "BA316D0F-92AE-4E00-8C80-DBD605DC58C3", name: "Caving" },
        { id: "F9B1D433-6B86-4804-AED7-B50A519A3B7C", name: "Skiing & Snowboarding" },
        { id: "5FF5B286-E9C3-430E-B612-3380D8138600", name: "Ice Skating" },
        { id: "01D717BC-18BB-4FE4-95BA-6B13AD702038", name: "Snowshoeing" },
        { id: "587BB2D3-EC35-41B2-B3F7-A39E2B088AEE", name: "Swimming" },
        { id: "071BA73C-1D3C-46D4-A53C-00D5602F7F0E", name: "Boating" },
        { id: "8A1C7B17-C2C6-4F7C-9539-EA1E19971D80", name: "Water Skiing" },
        { id: "42CF4021-8524-428E-866A-D33097A4A764", name: "SCUBA Diving" },
        { id: "3EBF7EAC-68FC-4754-B6A4-0C38A1583D45", name: "Snorkeling" },
        { id: "AE3C95F5-E05B-4A28-81DD-1C5FD4BE88E2", name: "Surfing" },
    ];

    return (
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
                    <option value="AL">Alabama</option>
                    <option value="AK">Alaska</option>
                    <option value="AZ">Arizona</option>
                    <option value="AR">Arkansas</option>
                    <option value="CA">California</option>
                    <option value="CO">Colorado</option>
                    <option value="CT">Connecticut</option>
                    <option value="DE">Delaware</option>
                    <option value="DC">District Of Columbia</option>
                    <option value="FL">Florida</option>
                    <option value="GA">Georgia</option>
                    <option value="HI">Hawaii</option>
                    <option value="ID">Idaho</option>
                    <option value="IL">Illinois</option>
                    <option value="IN">Indiana</option>
                    <option value="IA">Iowa</option>
                    <option value="KS">Kansas</option>
                    <option value="KY">Kentucky</option>
                    <option value="LA">Louisiana</option>
                    <option value="ME">Maine</option>
                    <option value="MD">Maryland</option>
                    <option value="MA">Massachusetts</option>
                    <option value="MI">Michigan</option>
                    <option value="MN">Minnesota</option>
                    <option value="MS">Mississippi</option>
                    <option value="MO">Missouri</option>
                    <option value="MT">Montana</option>
                    <option value="NE">Nebraska</option>
                    <option value="NV">Nevada</option>
                    <option value="NH">New Hampshire</option>
                    <option value="NJ">New Jersey</option>
                    <option value="NM">New Mexico</option>
                    <option value="NY">New York</option>
                    <option value="NC">North Carolina</option>
                    <option value="ND">North Dakota</option>
                    <option value="OH">Ohio</option>
                    <option value="OK">Oklahoma</option>
                    <option value="OR">Oregon</option>
                    <option value="PA">Pennsylvania</option>
                    <option value="RI">Rhode Island</option>
                    <option value="SC">South Carolina</option>
                    <option value="SD">South Dakota</option>
                    <option value="TN">Tennessee</option>
                    <option value="TX">Texas</option>
                    <option value="UT">Utah</option>
                    <option value="VT">Vermont</option>
                    <option value="VA">Virginia</option>
                    <option value="WA">Washington</option>
                    <option value="WV">West Virginia</option>
                    <option value="WI">Wisconsin</option>
                    <option value="WY">Wyoming</option>
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
            {inputError === true ? <InputError />: null}
        </form>
    );
};

export default UserSelectors;