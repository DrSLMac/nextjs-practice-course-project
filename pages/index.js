import { getFeaturedEvents } from "../helpers/api_util";
import EventList from "@/components/events/event-list";
import Head from 'next/head'
import { useState } from "react";

function HomePage(props) {

    // 1. the goal is to show the featured events, which means we must first get the featured events
    //function in dummy-data file (getFeaturedEvents()), filter events by event.isFeatured set to true
    //invoke the function, then output the events in the return
    //create a standard react component for that.

    return (
    <div>
        <Head>
            <title>NextJS Events</title>
            <meta name="description" content="Find a lot of great events that allow you to evolve..."/>
        </Head>
        <EventList items={props.events} />
    </div>
    )
}

export async function getStaticProps() {
    const featuredEvents = await getFeaturedEvents();

    return {
        props: {
            events: featuredEvents
        },
        revalidate: 1800,
    }
}

// export async function getStaticProps() {
//     return fetch('https://next-props-default-rtdb.firebaseio.com/events.json')
//     .then((response) => response.json())
//     .then(data => {
//         const transformedEvents = []
        
//         for (const key in data) {
//             transformedEvents.push({
//                 id: key,
//                 title: data[key].title,
//                 description: data[key].description,
//                 location: data[key].location,
//                 date: data[key].date,
//                 image: data[key].image,
//                 isFeatured: data[key].isFeatured,
//             });
//         }
//         return { 
//             props: { 
//                 featuredEvents: transformedEvents 
//                 },
//             revalidate: 10 }
//     })
// }

export default HomePage;