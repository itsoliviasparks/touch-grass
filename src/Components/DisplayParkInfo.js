// gets past parkInfo as props

const DisplayParkInfo = ({ parkInfo }) => {
    return (
        <>
            {
                parkInfo.map(arr => {
                    //if list of parks is empty, display that there are no parks
                    if (arr[1].length === 0) {
                        return (
                            <div key={arr[0].id}>
                                <h3>{arr[0].name}</h3>
                                    <p>There are no parks with this activity</p>
                            </div>
                        )
                        //otherwise, return list os all the parks    
                    } else {
                        return (
                            <div key={arr[0].id}>
                                <h3>{arr[0].name}</h3>
                                <ul>
                                    {
                                        arr[1].map((park) => {
                                            return (
                                                <li key={park.parkCode}>{park.name}</li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        )
                    }
                })
            }
        </>
    );
};

export default DisplayParkInfo;