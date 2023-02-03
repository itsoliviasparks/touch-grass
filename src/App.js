
import { useEffect, useState } from 'react';
import axios from "axios";
import './App.css';
import StateSelector from "./Components/StateSelector";
import ActivitySelector from "./Components/ActivitySelector";
import DisplayParkInfo from "./Components/DisplayParkInfo";

function App() {
  const [usersState, setUsersState] = useState("");
  const [activities, setActivities] = useState([]);
  const [parkInfo, setParkInfo] = useState([]);

  //stores usersState in stateful variable
  const handleStateSelection = (e) => {
    setUsersState(e.target.value)
  };

  //adds/removes activities to the stateful activities arr as user clicks
  const handleActivitySelection = (e) => {
    setActivities(() => {
      if (e.target.checked) {
        const selection = activities.concat([e.target.value]);
        return selection;
      } else {
        const selection = activities.filter((i) => {
          return i !== e.target.value
        });
        return selection;
      }
    })
  }

  // //when usersActivitySelection is updated, make API call using usersActivitySelection as params
  // //API DOCS: https://developer.nps.gov/api/v1/parks?parkCode=acad&api_key=7XHElwOipPV6R4gzo3qbRAbY7q8MXA9TGPoKAHVX
  const getParkInfo = () => {
    const resultArr = [];
    activities.forEach((activity) => {
      axios({
        url: "https://developer.nps.gov/api/v1/activities/parks",
        method: "GET",
        dataResponse: "json",
        params: {
          // api_key: "7XHElwOipPV6R4gzo3qbRAbY7q8MXA9TGPoKAHVX",
          //👆mine, 👇fake
          api_key: "QAEc6W16eLjqeZ6Qd5VbExugf0AEYofsTOUG6XHG",
          id: activity,
        },
      })
        .then((res) => {
          //each res is an object containing a park list for all parks nationally with that activity
          const parkList = res.data.data[0].parks;

          //filter out all parks that are not in the usersState. Returned arr does not have activity object
          const filteredParkList = parkList.filter((park) => {
            return park.states === usersState;
          })

          //format data with activity object
          const result = [filteredParkList]
          result.unshift({activity : activity});

          //combine each result from forEach loop into one final arr
          resultArr.push(result);
        }).catch(err => {
          //need to add some error handling
          console.log(err);
        })
    })
    //save into stateful variable
    setTimeout(() => {
      setParkInfo(resultArr);
    }, 1000)
  }

  return (
    <>
      <h1>Let's Go Touch Some Grass!</h1>
      <StateSelector handleStateSelection={handleStateSelection} />
      <ActivitySelector handleActivitySelection={handleActivitySelection}/>
      <button onClick={getParkInfo}>Go!</button>
      <DisplayParkInfo parkInfo={parkInfo} /> 
    </>
  );
}

export default App;


// ❌❌Problem- API call is updating state with each loop, we need to wait until all loops are done to update.❌❌

//on app mount
//user select states, from list (or from interactive map- stretch goal)
//on click/select, pop of window lists state parks and activities with check boxes
//when user selects activities is is added to their to-do list
// when user closes activity selection window, list of to-dos is under screen
// when user checks off activity they have done, we update database


//7XHElwOipPV6R4gzo3qbRAbY7q8MXA9TGPoKAHVX
//https://developer.nps.gov/api/v1/parks?parkCode=acad&api_key=7XHElwOipPV6R4gzo3qbRAbY7q8MXA9TGPoKAHVX



// 1st user picks the state they want to see activities in
  // get userState from dropdown & store in a piece of state
  // API call for list of all parks by activity offered
    // API returns list of all parks nationally by activity
    // make arr with name of activity, state, and name of park in each item
    // then filter through array by state to return list of parks that offer each activity in the usersState
  // loop through each activity, and add parks that match userState to an activity arr
  // display activity arr on page (with to-do checklist as stretch goal)
  // if no parks for the activity, show null (do not show that activity)
// make database of user activity choices as a to-do that displays on page when activity window is closed (stretch goal)
//when user closes activity window they can pick another US state





// state: checkbox selections
// state: US state dropdown

// handleChange of the dropdown
// handleChange of checkboxes

// on click of submit
	// 