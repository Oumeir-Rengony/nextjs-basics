import { getFeaturedEvents } from "../helpers/api-util";
import EventList from "../components/event/event-list";
import NewsletterRegistration from "../components/input/newsletter-registration";

const HomePage = ({events}) => {

  return (
    <>
      <NewsletterRegistration />
      <EventList items={events}/>
    </>
  )
}

export const getStaticProps = async () => {

  const featuredEvents = await getFeaturedEvents();

  return {
    props:{
      events: featuredEvents
    },
    revalidate: 1800
  };
}

export default HomePage;
