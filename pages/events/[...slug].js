import React from "react";
import { useRouter } from "next/router";
import { getFilteredEvents } from "../../data/dummy-data";
import EventList from "../../components/event/event-list";
import DefaultErrorPage from "next/error";
import ResultsTitle from "../../components/event/results-title";

const FilteredEventsPage = () => {
  const router = useRouter();

  const filteredData = router.query.slug;

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
    return <DefaultErrorPage statusCode={404} />;
  }

  const filteredEvents = getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  if(!filteredEvents || filteredEvents.length === 0){
    return <p>No events found</p>;
  }
  
  const date = new Date(numYear, numMonth - 1);
  
  return filteredData ? (
    <>
      <ResultsTitle date={date} />
      <EventList items={filteredEvents} />
    </>
  ) : (
    <p className="center">Loading...</p>
  );
};

export default FilteredEventsPage;
