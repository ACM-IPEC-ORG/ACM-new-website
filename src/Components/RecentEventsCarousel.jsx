import React, { useEffect, useState } from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css'; // Default theme for Splide
import Blank from '../assets/Images/Poster/blank.jpg'; // Corrected path relative to this component
import { useAuth } from "../Context/AuthContext";
import axios from "axios";
import { FETCH_EVENT_ROUTE } from "../services/constant";
import { useMediaQuery } from "@uidotdev/usehooks"; // Using the same useMediaQuery as your Home.jsx

export default function RecentEventsCarousel() {
    const { events, setEvents } = useAuth(); // Assuming events are managed in AuthContext

    const isMediumDevice = useMediaQuery(
        "only screen and (min-width : 769px) and (max-width : 992px)"
    );
    const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");

    // Fetch event details if not already loaded (for self-contained component)
    useEffect(() => {
        if (!events) {
            async function fetchEventDetails() {
                try {
                    const response = await axios.get(FETCH_EVENT_ROUTE);
                    setEvents(response.data.data);
                    console.log("RecentEventsCarousel: Events loaded:", response.data.data);
                } catch (error) {
                    console.error("RecentEventsCarousel: Error fetching events:", error);
                }
            }
            fetchEventDetails();
        }
    }, [events, setEvents]);

    // Filter and sort events for the carousel (s24_25 session, newest 5)
    const recentS24_25Events = events
        ? events
            .filter((event) => event.session === 's24_25') // Filter for s24_25 session
            .sort((a, b) => new Date(b.date) - new Date(a.date)) // Sort by date (newest first)
            .slice(0, 5) // Take top 5 recent events from s24_25
        : []; // Return empty array if events is null or undefined

    return (
        // Only render if not a small device and there are recent events
        (!isSmallDevice && recentS24_25Events.length > 0) ? (
            <div className="text-center text-white py-4 bg-SecGradP overflow-hidden">
                <h1 className="xl:text-4xl md:text-5xl text-3xl font-semibold pt-4">Recent Events</h1>
                <h1 className="xl:text-sm md:text-xl text-lg md:leading-9 font-thin">What's going on in IPEC ACM?</h1>
                <div className="py-4 md:py-12">
                    <Splide options={{
                        type: "loop",
                        rewind: true,
                        perPage: "1",
                        perMove: "1",
                        width: "100%", // Use 100% width relative to its container
                        lazyLoad: "sequential",
                        autoplay: true,
                        pauseOnHover: true,
                        heightRatio: isMediumDevice ? 0.6 : 0.32,
                    }} aria-label="Recent Events Carousel" className="w-full">
                        {recentS24_25Events.map(data => (
                            <SplideSlide key={data.id || data.slug} className="flex justify-center items-center w-full gap-12">
                                <img src={data.poster || Blank} alt={data.title} className="h-full object-contain" />
                                <div className="w-[40vw] scroll text-left h-full flex flex-col gap-2">
                                    <h1 className="text-lg lg:text-2xl font-bold">{data.title}</h1>
                                    <h1 className="text-sm lg:text-lg italic ">{data.tagline}</h1>
                                    <h1 className="text-sm lg:text-md ">{data.description}</h1>
                                    <h1 className="md:hidden lg:block text-sm lg:text-md ">{data.info}</h1>
                                    <h1 className="text-sm lg:text-md font-bold">Date : {data.date !== "" ? data.date : new Date(data.createdAt).toDateString()}</h1>
                                    <h1 className="text-sm lg:text-md">Team Size: {data.TS}</h1>
                                    <div className="flex flex-col lg:flex-row">
                                        {/* Instagram Embed Part - Remains Commented Out by default */}
                                        {/* {data.instagram_post && data.instagram_post.length != 0 ? data.instagram_post.map(url => (
                                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                                <InstagramEmbed url={url} width={328} className="h-full" />
                                            </div>
                                        )) :
                                            <h1 className="text-sm lg:text-md font-bold italic">No Post Available</h1>
                                        } */}
                                    </div>
                                </div>
                            </SplideSlide>
                        ))}
                    </Splide>
                </div>
            </div>
        ) : null
    );
}