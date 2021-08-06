import React from "react";
import { getFilteredEvents } from "../../helpers/api-util";
import EventList from "../../components/event/event-list";
import ResultsTitle from "../../components/event/results-title";
import Button from "../../components/button/button";
import ErrorAlert from "../../components/error-alert/error-alert";

const FilteredEventsPage = ({ hasError, events, date }) => {
  const { year, month } = date;
  const formattedDate = new Date(year, month - 1);

  if (hasError) {
    return (
      <>
        <ErrorAlert>
          <p>Invalid filter. Please adjust your values</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </>
    );
  }

  if (!events || events.length === 0) {
    return (
      <>
        <Head>
          <title>Filtered Events</title>
          <meta name="description" content={`All events for ${month}/${year}`} />
        </Head>
        <ErrorAlert>
          <p>No events found</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </>
    );
  }


  return (
    <>
      <ResultsTitle date={formattedDate} />
      <EventList items={events} />
    </>
  );
};

export const getServerSideProps = async ({ params }) => {
  const filteredData = params.slug;
  const [year, month] = filteredData;

  const numYear = +year;
  const numMonth = +month;

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return {
      props: {
        hasError: true,
      },
    };
  }

  const filteredEvents = await getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  return {
    props: {
      events: filteredEvents,
      date: {
        year: numYear,
        month: numMonth,
      },
    },
  };
};

export default FilteredEventsPage;
