import React from "react";
import { getAllEvents} from "../../data/dummy-data";
import EventList from "../../components/event/event-list";
import EventSearch from "../../components/event/event-search";

const AllEventsPage = () => {
    const events = getAllEvents();

    return(
        <>
            <EventSearch />
            <EventList items={events}/>
        </>
    );
};

export default AllEventsPage;