import React from "react";
import { getAllEvents} from "../../helpers/api-util";
import EventList from "../../components/event/event-list";
import EventSearch from "../../components/event/event-search";
import { useRouter } from "next/router";

const AllEventsPage = ({events}) => {
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

export const getStaticProps = async () => {

    const events = await getAllEvents();
  
    return {
      props:{
        events: events
      },
      revalidate: 1800
    };
  }

export default AllEventsPage;