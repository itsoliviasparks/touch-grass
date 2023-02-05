import { Link } from "react-router-dom"
import Loading from "./Loading";

// gets past parkInfo as props
const DisplayParkInfo =
    ({
        isLoading,
        setIsLoading,
        parkInfo,
        setParkInfo,
        setUsersState,
        usersStateFull,
        setUsersStateFull,
        setActivities
    }) => {
        const handleClose = () => {
            setIsLoading(true)
            setParkInfo([]);
            setUsersState("");
            setUsersStateFull("");
            setActivities([]);
        }
        return (
            <>
                {isLoading ? <Loading /> : (
                    <section className="park-info">
                        <Link to="/" className="close" onClick={handleClose}>
                            <p className="sr-only">To Home</p>
                            <i className="fa-solid fa-circle-xmark"></i>
                        </Link>
                        <h2 className="state">{usersStateFull}</h2>
                        <div className="info">
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
                        </div>
                    </section>
                )}
            </>
        );
    };

export default DisplayParkInfo;