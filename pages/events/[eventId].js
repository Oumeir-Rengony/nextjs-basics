import React from "react";
import { getEventById, getAllEvents } from "../../helpers/api-util";
import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";
import ErrorAlert from "../../components/error-alert/error-alert";

const EventDetailPage = ({ event }) => {

  if (!event) {
    return (
      <ErrorAlert>
        <p>No events found</p>
      </ErrorAlert>
    );
  }

  return (
    <>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </>
  );
};

export const getStaticProps = async ({ params }) => {
  const { eventId } = params;

  const event = await getEventById(eventId);

  return {
    props: {
      event: event,
    },
  };
};

export const getStaticPaths = async () => {
  const events = await getAllEvents();

  const paths = events.map((event) => ({ params: { eventId: event.id } }));

  return {
    paths: paths,
    fallback: false
  }
};

export default EventDetailPage;
