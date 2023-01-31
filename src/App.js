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



import { useEffect, useState } from "react";
import axios from "axios";
import './App.css';
import StateSelector from "./Components/StateSelector";
import ActivitySelector from "./Components/ActivitySelector";
import DisplayParksByActivity from "./Components/DisplayParksByActivity";

function App() {
 return (
    <>
    <h1>Let's Go Touch Some Grass!</h1>
    <StateSelector />
    <ActivitySelector />
    {/* <DisplayParksByActivity /> */}
    </>
  );
}

export default App;