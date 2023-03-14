import { getFeaturedEvents } from "@/dummy-data";
import EventList from "@/components/events/event-list";

import { Fragment } from "react";

function HomePage() {
    // 1. the goal is to show the featured events, which means we must first get the featured events
    //function in dummy-data file (getFeaturedEvents()), filter events by event.isFeatured set to true
    //invoke the function, then output the events in the return
    //create a standard react component for that.

    const featuredEvents = getFeaturedEvents();

    return (
    <Fragment>
        
        <EventList items={featuredEvents} />
    </Fragment>
    )
}

export default HomePage;