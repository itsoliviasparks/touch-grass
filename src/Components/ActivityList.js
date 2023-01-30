import { useEffect, useState } from "react";
import getParkListByActivity from "../getParkListByActivity"

//we have parkListByActivity: arr
    // each item in arr has: [0]: object for activity type, [1]: arr of park objects
//loop thru the parkListByActivity arr and return:
    // list of parks filtered by userState per each activity


const ActivityList = ({ usersState }) => {
    const parkListByActivity = getParkListByActivity(); //
    // console.log(parkListByActivity[0].name); 

    return (
        <>
            <p>{parkListByActivity}</p>
        </>
    );
};

export default ActivityList