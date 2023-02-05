
import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import axios from "axios";

import "./App.scss";

import Border from "./Components/Border";
import Header from "./Components/Header";
import UserSelectors from "./Components/UserSelectors";
import DisplayParkInfo from "./Components/DisplayParkInfo";
import Footer from "./Components/Footer";
import Error404 from "./Components/Error404";
import ApiError from "./Components/ApiError";

function App() {
  const [usersState, setUsersState] = useState("");
  const [usersStateFull, setUsersStateFull] = useState("");
  const [inputError, setInputError] = useState(false)
  const [activities, setActivities] = useState([]);
  const [parkInfo, setParkInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  //stores usersState in stateful variable
  const handleStateSelection = (e) => {
    setUsersState(e.target.value);
    setUsersStateFull(e.target.selectedOptions[0].label);
  };

  //adds/removes activities to the stateful activities arr as user clicks
  const handleActivitySelection = (e) => {
    setActivities(() => {
      if (e.target.checked) {
        const selection = activities.concat({ id: e.target.value, name: e.target.name });
        return selection;
      } else {
        const selection = activities.filter((i) => {
          return i.id !== e.target.value;
        });
        return selection;
      }
    })
  };

  const handleButton = (e) => {
    e.preventDefault();
    if (usersState === "" || activities.length === 0) {
      setInputError(true);
    } else {
      getParkInfo();
      navigate("/park-info");
    }
  };

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
          api_key: "7XHElwOipPV6R4gzo3qbRAbY7q8MXA9TGPoKAHVX",
          id: activity.id,
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
          const result = [filteredParkList];
          result.unshift({ id: activity.id, name: activity.name });

          //combine each result from forEach loop into one final arr
          resultArr.push(result);
        }).catch(err => {
          navigate("/MIA");
        })
    })
    //save into stateful variable
    setTimeout(() => {
      setParkInfo(resultArr);
      setIsLoading(false);
    }, 2000);
  };

  return (
    <>
      <Border />
      <Header />
      <main className="wrapper">
        <Routes>
          <Route path="/" element={
            <UserSelectors
              handleStateSelection={handleStateSelection}
              handleActivitySelection={handleActivitySelection}
              handleButton={handleButton}
              inputError={inputError}
            />
          } />
          <Route path="/park-info" element={
            <DisplayParkInfo
              isLoading={isLoading}
              setIsLoading={setIsLoading}
              parkInfo={parkInfo}
              setParkInfo={setParkInfo}
              setUsersState={setUsersState}
              usersStateFull={usersStateFull}
              setUsersStateFull={setUsersStateFull}
              setActivities={setActivities}
              setInputError={setInputError} />
          } />
          <Route path="/MIA" element={<ApiError />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

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