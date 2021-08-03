import React from "react";
import { getAllEvents} from "../../data/dummy-data";
import EventList from "../../components/event/event-list";
import EventSearch from "../../components/event/event-search";
import { useRouter } from "next/router";

const AllEventsPage = () => {
    const events = getAllEvents();
    const router = useRouter();

    const findEventsHandler = (year, month) => {
        const fullPath = `/events/${year}/${month}`;
        router.push(fullPath);
    };

    return(
        <>
            <EventSearch onSearch={findEventsHandler}/>
            <EventList items={events}/>
        </>
    );
};

export default AllEventsPage;