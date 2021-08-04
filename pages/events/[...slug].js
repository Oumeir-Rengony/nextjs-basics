import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { getFilteredEvents } from "../../data/dummy-data";
import EventList from "../../components/event/event-list";
import ResultsTitle from "../../components/event/results-title";
import Button from "../../components/button/button";
import ErrorAlert from "../../components/error-alert/error-alert";

export const getServerSideProps = async ({params}) => {
  const slug = params.slug;
  return {
     props: { slug }
  }
}

const FilteredEventsPage = ({ slug }) => {

  const [year, month] = slug;

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

  const filteredEvents = getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <>
        <ErrorAlert>
          <p>No events found</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </>
    );
  }

  const date = new Date(numYear, numMonth - 1);

  return slug ? (
    <>
      <ResultsTitle date={date} />
      <EventList items={filteredEvents} />
    </>
  ) : (
    <p className="center">Loading...</p>
  );
};

export default FilteredEventsPage;
