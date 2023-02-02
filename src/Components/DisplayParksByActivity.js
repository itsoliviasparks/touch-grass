// gets past parkListByActivity as props

const DisplayParksByActivity = ({ parksByActivityAndState }) => {
    console.log(parksByActivityAndState)
        return (
            <div>
                {parksByActivityAndState.forEach((arr) => {
                    return(
                        arr.map((activity) => {
                            console.log(activity);
                        })
                    )
                })}
            </div>
        )

};

export default DisplayParksByActivity;

// arr of arrs of objs

// for each array in parksByActivityAndState:
    // arr.map((object, index) => {
        // if the arr is length of 1- show "nothing"

        // if longer than one show:
        //  heading: activity[0].activity
        //  ul:
        //       li: activity[1].name
        //       li: activity[2].name
        //       li: activity[3].name
        //       li: etc

 //   })


 //input is an arr of arr

//parksByActivityAndState.forEach
    //put arr[0].activity (activity name) on the page
    // if arr is length of 1
        // add "no places to touch grass" under name
    // if arr is longer than one
        // map arr[2 thru end]
        // add arr[x].name to the page