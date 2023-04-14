# Touch Grass 🏕️
<a href="https://itsoliviasparks-touch-grass.netlify.app">Live Site</a>

## About
An app for those needing to get outside, Touch Grass is crafted with the <a href="https://www.nps.gov/subjects/developer/api-documentation.htm">U.S. National Park Service API</a>.
This app allows users to search all National Parks by State & activity. Then, the user can add their activities to their Field Notes to-do list.

## Project Purpose & Goal
The U.S. National Park API is a great resource, but its search abilities are limited. Therefore, when looking at the National Park website, you can either see a list of all National Parks with a specific activity or see a list of all National Parks within each state. When planning my outdoor trips, I always want to be able to see a filtered list of National Parks in the state I'm traveling to that have the activities I'm interested in. I built Touch Grass to solve that problem.

## Tech Stack
React, Firebase, an API, & Sass

## Use
- On app mount, the user is presented with a drop-down list of U.S. States & checkboxes for various outdoor activities. The user can select as many activities as they like before clicking the "Your Adventure Awaits" button
- After clicking the button, the user is taken to the results screen, which displays a list of all National Parks in their selected state that offer the chosen activities. Each park is displayed with a hyperlink to its respective information site
- The user can click on each park to add it to their "Field Notes" section
- The "Field Notes" section serves as a to-do list, where the user can add, delete, and move activities between the "Planning to Visit" and "Visited" columns

## Problems Solved
Manipulating the data I got back from the API was my biggest challenge. Previous to this project I found data manipulation quite intimadating, but working through this project has made me feel much more confident!

### How I Manipulated the Data:
This logic is located in `App.js`
```
const getParkInfo = () => {
    const resultArr = [];
      // /API call using activities as params. Filters results by usersState
      // //API DOCS: https://developer.nps.gov/api/v1/parks?parkCode=acad&api_key=7XHElwOipPV6R4gzo3qbRAbY7q8MXA9TGPoKAHVX
    const fetchData = (activity) => {
      return axios({
        url: "https://developer.nps.gov/api/v1/activities/parks",
        method: "GET",
        dataResponse: "json",
        params: {
          api_key: apiKey,
          id: activity.id,
        },
      }).then((res) => {
        // //each res is an object containing a park list for all parks nationally with that activity
        const parkList = res.data.data[0].parks;

        // //filter out all parks that are not in the usersState. Returned arr does not have activity object
        const filteredParkList = parkList.filter((park) => {
          return park.states === usersState;
        })

        // //format data with activity object
        const result = [filteredParkList];
        result.unshift({ id: activity.id, name: activity.name });

        return result
      })
    };
    activities.forEach((activity) => {
      resultArr.push(fetchData(activity))
    })

    //save result into stateful variable & turn off loading state
    Promise.all(resultArr).then((res) => {
      setParkInfo(res);
      setIsLoading(false);
    }).catch(() => {
      navigate("/MIA");
    })
  };
```
- When the user selects their activities, they are stored into the `activities` stateful array
- For each activity in the `activities` array, an API call is triggered:
  - The activity is used as the param in the API call
  - The API call returns an object containing all parks nationally with the activity
  - The results are then filtered to only include parks that are in the user's selected state
  - To ensure the data stays organized, an object with the activity name and ID is added to the results
  - The final results are then added to the `resultsArr`
- Once all API calls are complete, the `resultsArr` is saved into state


## Next Steps
- Currently all users share a singular Field Notes page
- I am working on implementing User Authentication via Firebase to allow each user to have an individualized & private Field Notes page
