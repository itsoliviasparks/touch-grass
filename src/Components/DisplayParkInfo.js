// gets past parkInfo as props

const DisplayParkInfo = ({ parkInfo }) => {
    return (
        <>
            {
                parkInfo.map(arr => {
                    if (arr[1].length === 0) {
                        return (
                            <>
                                <h3>{arr[0].activity}</h3>
                                <ul>
                                    <li>There are no parks with this activity</li>
                                </ul>
                            </>
                        )
                    } else {
                        return (
                            <>
                                <h3>{arr[0].activity}</h3>
                                <ul>
                                    {
                                        arr[1].map((park) => {
                                            return (
                                                <li>{park.name}</li>
                                            )
                                        })
                                    }
                                </ul>
                            </>
                        )
                    }
                })
            }
        </>
    );
};

export default DisplayParkInfo;