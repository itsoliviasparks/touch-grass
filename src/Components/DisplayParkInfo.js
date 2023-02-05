// gets past parkInfo as props

const DisplayParkInfo = ({ parkInfo }) => {
    return (
        <section className="park-info">
            {
                parkInfo.map(arr => {
                    //if list of parks is empty, display that there are no parks
                    if (arr[1].length === 0) {
                        return (
                            <div
                            className="activity-card" key={arr[0].id}>
                                <h3>{arr[0].name}</h3>
                                    <p className="no-parks">There are no parks with this activity</p>
                            </div>
                        )
                        //otherwise, return list os all the parks    
                    } else {
                        return (
                            <div className="activity-card" key={arr[0].id}>
                                <h3>{arr[0].name}</h3>
                                <ul className="park-list">
                                    {
                                        arr[1].map((park) => {
                                            return (
                                                <li className="park" key={park.parkCode}>
                                                    <a href={park.url} target="_blank">{park.name}</a>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        )
                    }
                })
            }
        </section>
    );
};

export default DisplayParkInfo;