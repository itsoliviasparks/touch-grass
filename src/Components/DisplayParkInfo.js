import CloseButton from "./CloseButton";
import Loading from "./Loading";
import FieldNotesButton from "./FieldNotesButton";

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
                {isLoading ? <Loading handleClose={handleClose} /> : (
                    <section className="park-info">
                        <CloseButton handleClose={handleClose}/>
                        <h3>{usersStateFull}</h3>
                        <p className="main">Please select <i className="fa-solid fa-circle"></i> to add to your Field Notes</p>
                        <p className="main">Please select <i className="fa-solid fa-info"></i> for additional park information</p>
                        <ul className="info">
                            {
                                parkInfo.map(arr => {
                                    //if list of parks is empty, display that there are no parks
                                    if (arr[1].length === 0) {
                                        return (
                                            <li
                                                className="card" key={arr[0].id}>
                                                <h4>{arr[0].name}</h4>
                                                <p className="no-parks">There are no parks with this activity</p>
                                            </li>
                                        )
                                        //otherwise, return list of all the parks    
                                    } else {
                                        return (
                                            <li className="card" key={arr[0].id}>
                                                <h4>{arr[0].name}</h4>
                                                <ul className="park-list">
                                                    {
                                                        arr[1].map((park) => {
                                                            return (
                                                                <li className="park" key={park.parkCode}>
                                                                    <div className="park-name">
                                                                        <i className="fa-solid fa-circle"></i>
                                                                        <p>{park.name}</p>
                                                                    </div>
                                                                    <a href={park.url} target="_blank" rel="noreferrer" className="park-info-link">
                                                                        <i className="fa-solid fa-info"></i>
                                                                        <p className="sr-only">Park Info Link</p>
                                                                    </a>
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
                        <FieldNotesButton />
                    </section>
                )}
            </>
        );
    };

export default DisplayParkInfo;