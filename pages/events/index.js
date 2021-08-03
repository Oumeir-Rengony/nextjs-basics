import React from "react";
import { getAllEvents} from "../../data/dummy-data";
import EventList from "../../components/event/event-list";

const AllEventsPage = () => {
    const events = getAllEvents();

    return(
        <div>
            <EventList items={events}/>
        </div>
    );
};

export default AllEventsPage;