import { getFeaturedEvents } from "../data/dummy-data";
import EventList from "../components/event/event-list";

function HomePage() {

  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <EventList items={featuredEvents}/>
    </div>
  )
}

export default HomePage;
