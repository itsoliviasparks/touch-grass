import { useEffect, useState } from "react";
import getParkListByActivity from "../getParkListByActivity"

// take arr from getParkListByActivity
// filter by userState
// display results on the page

const ActivityList = ({ usersState }) => {
    const parkListByActivity = getParkListByActivity();
    // console.log(parkListByActivity);


    const parksWithCaving = parkListByActivity.filter((park) => park.states == "AR");
    // console.log(parksWithCaving)






    return (
        <>
            {/* <p>{parkListByActivity}</p> */}
        </>
    );
};

export default ActivityList