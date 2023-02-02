//displays all activity options on app mount

//via props:
    //stores users activity choices into stateful variable usersActivitySelection
    //when usersActivitySelection is updated, API call is made

const ActivitySelector = ({ handleActivityClick, handleActivitySubmit }) => {
    const activityIds = [
        { id: "13A57703-BB1A-41A2-94B8-53B692EB7238", name: "Astronomy" },
        { id: "071BA73C-1D3C-46D4-A53C-00D5602F7F0E", name: "Boating" },
        { id: "A59947B7-3376-49B4-AD02-C0423E08C5F7", name: "Camping" },
        { id: "BA316D0F-92AE-4E00-8C80-DBD605DC58C3", name: "Caving" },
        { id: "B12FAAB9-713F-4B38-83E4-A273F5A43C77", name: "Climbing" },
        { id: "BFF8C027-7C8F-480B-A5F8-CD8CE490BFBA", name: "Hiking" },
        { id: "5FF5B286-E9C3-430E-B612-3380D8138600", name: "Ice Skating" },
        { id: "7779241F-A70B-49BC-86F0-829AE332C708", name: "Playground" },
        { id: "42CF4021-8524-428E-866A-D33097A4A764", name: "SCUBA Diving" },
        { id: "F9B1D433-6B86-4804-AED7-B50A519A3B7C", name: "Skiing" },
        { id: "3EBF7EAC-68FC-4754-B6A4-0C38A1583D45", name: "Snorkeling" },
        { id: "01D717BC-18BB-4FE4-95BA-6B13AD702038", name: "Snowshoeing" },
        { id: "AE3C95F5-E05B-4A28-81DD-1C5FD4BE88E2", name: "Surfing" },
        { id: "587BB2D3-EC35-41B2-B3F7-A39E2B088AEE", name: "Swimming" },
        { id: "8A1C7B17-C2C6-4F7C-9539-EA1E19971D80", name: "Water Skiing" },
        { id: "0B685688-3405-4E2A-ABBA-E3069492EC50", name: "Wildlife Watching" },
    ];

    return (
        <form onSubmit={handleActivitySubmit}>
            <fieldset>
                <legend>What do you like to do outside?</legend>
                {activityIds.map((activity) => (
                    <div key={activity.id}>
                        <input
                            type="checkbox"
                            name={activity.name}
                            value={activity.id}
                            onClick={handleActivityClick} />
                        <label htmlFor={activity.name}>{activity.name}</label>
                    </div>
                ))}
                <button type="submit">Let's Go!</button>
            </fieldset>
        </form>
    );
};

export default ActivitySelector;
