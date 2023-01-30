import axios from "axios";

//API call to get arr of parks that offer each activity
const activityIds = [
  { id: "BA316D0F-92AE-4E00-8C80-DBD605DC58C3", name: "Caving" },
  { id: "AE3C95F5-E05B-4A28-81DD-1C5FD4BE88E2", name: "Surfing" },
  { id: "A59947B7-3376-49B4-AD02-C0423E08C5F7", name: "Camping" },
  { id: "587BB2D3-EC35-41B2-B3F7-A39E2B088AEE", name: "Swimming" },
  { id: "BFF8C027-7C8F-480B-A5F8-CD8CE490BFBA", name: "Hiking" },
  { id: "B12FAAB9-713F-4B38-83E4-A273F5A43C77", name: "Climbing" },
  { id: "F9B1D433-6B86-4804-AED7-B50A519A3B7C", name: "Skiing" },
];

const getParkListByActivity = () => {
  let parkListByActivity = [];
  activityIds.forEach((activity) => {
    axios({
      url: "https://developer.nps.gov/api/v1/activities/parks",
      method: "GET",
      dataResponse: "json",
      params: {
        api_key: "7XHElwOipPV6R4gzo3qbRAbY7q8MXA9TGPoKAHVX",
        //👆mine, 👇fake
        // api_key: "QAEc6W16eLjqeZ6Qd5VbExugf0AEYofsTOUG6XHG",
        id: activity.id,
      },

    }).then((res) => {
        const parkList = res.data.data[0].parks;
        parkList.forEach((park) => {
          parkListByActivity.push({activity, ...park });
        });
        // setIsLoading(false);
    }).catch(err => {
      console.log(err);
    })
  });
  console.log(parkListByActivity)
//returns an array of objects, each object contains the activity object, & park info key pairs
return parkListByActivity;

};

export default getParkListByActivity;


//arr and filer to get a new arr of just parknamesß