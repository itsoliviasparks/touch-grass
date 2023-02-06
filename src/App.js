
import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import axios from "axios";

import "./App.scss";

import Border from "./Components/Border";
import Header from "./Components/Header";
import UserSelectors from "./Components/UserSelectors";
import DisplayParkInfo from "./Components/DisplayParkInfo";
import Footer from "./Components/Footer";
import ApiError from "./Components/ApiError";
import Error404 from "./Components/Error404";

function App() {
  const [usersState, setUsersState] = useState("");
  const [usersStateFull, setUsersStateFull] = useState("");
  const [activities, setActivities] = useState([]);
  const [inputError, setInputError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [parkInfo, setParkInfo] = useState([]);

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

  //triggers inputError message or API call on button click. Navigates to DisplayParkInfo Component
  const handleButton = (e) => {
    e.preventDefault();
    if (usersState === "" || activities.length === 0) {
      setInputError(true);
    } else {
      getParkInfo();
      navigate("/park-info");
    }
  };

  //view close button on all windows
  const handleClose = () => {
    setIsLoading(true)
    setParkInfo([]);
    setUsersState("");
    setUsersStateFull("");
    setActivities([]);
    setInputError(false);
  };

  // /API call using activities as params. Filters results by usersState
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
              setInputError={setInputError}
              handleClose={handleClose} />
          } />
          <Route path="/MIA" element={<ApiError handleClose={handleClose} />} />
          <Route path="*" element={<Error404 handleClose={handleClose} />} />
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
//on click/select, popup of window lists state parks and activities with check boxes
//when user selects activities is is added to their to-do list
// when user closes activity selection window, list of to-dos is under screen
// when user checks off activity they have done, we update database
