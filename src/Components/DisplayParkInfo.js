import { Link } from "react-router-dom"
import Loading from "./Loading";

const DisplayParkInfo =
    ({
        isLoading,
        parkInfo,
        usersStateFull,
        handleClose
    }) => {
        
        return (
            <>
                {/* conditionally show section depending on loading state */}
                {isLoading ? <Loading handleClose={handleClose}/> : (
                    <section className="park-info">
                        <Link to="/" className="close" onClick={handleClose}>
                            <p className="sr-only">To Home</p>
                            <i className="fa-solid fa-circle-xmark"></i>
                        </Link>
                        <h2 className="state">{usersStateFull}</h2>
                        <ul className="info">
                            {
                                parkInfo.map(arr => {
                                    //if list of parks is empty, display that there are no parks
                                    if (arr[1].length === 0) {
                                        return (
                                            <li
                                                className="activity-card" key={arr[0].id}>
                                                <h3>{arr[0].name}</h3>
                                                <p className="no-parks">There are no parks with this activity</p>
                                            </li>
                                        )
                                        //otherwise, return list of all the parks    
                                    } else {
                                        return (
                                            <li className="activity-card" key={arr[0].id}>
                                                <h3>{arr[0].name}</h3>
                                                <ul className="park-list">
                                                    {
                                                        arr[1].map((park) => {
                                                            return (
                                                                <li className="park" key={park.parkCode}>
                                                                    <a href={park.url} target="_blank" rel="noreferrer">{park.name}</a>
                                                                </li>
                                                            )
                                                        })
                                                    }
                                                </ul>
                                            </li>
                                        )
                                    }
                                })
                            }
                        </ul>
                    </section>
                )}
            </>
        );
    };

export default DisplayParkInfo;