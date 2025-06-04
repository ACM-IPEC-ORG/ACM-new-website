import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
// Removed unused imports based on your requirements (CMCard, Slider, GalleryList, UpcomingCard)
import { FaInstagram } from "react-icons/fa";
import TypewriterComponent from "typewriter-effect";
import { useAuth } from "../../Context/AuthContext";
import axios from "axios";
import { BASE_URL } from "../../services/constant"; // Adjust path if needed

export default function EventDetails() {
    window.scroll(0, 0);

    // Removed hidden, sethidden, clickedImg, setClickedImg as they are related to gallery/slider
    // if you decide to add gallery back later, you can re-introduce these states.

    const { events } = useAuth(); // All events from AuthContext
    const { Slugs } = useParams(); // The slug from the URL

    const [localEventData, setLocalEventData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // --- CRITICAL DEBUGGING CONSOLE LOGS ---
    console.log("EventDetails: URL Slugs param:", Slugs);
    console.log("EventDetails: All events from AuthContext on render:", events);
    // --- END DEBUGGING CONSOLE LOGS ---

    useEffect(() => {
        const fetchEvent = async () => {
            setLoading(true);
            setError(null);

            let foundEvent = null;

            // 1. Try to find the event in the AuthContext's 'events' array first
            if (events && Array.isArray(events)) {
                foundEvent = events.find(i => i.slug.toLowerCase() === Slugs.toLowerCase());
            }

            // 2. If not found in AuthContext, fetch it individually
            if (!foundEvent) {
                try {
                    // IMPORTANT: Confirm this URL matches your backend route for a single event by slug!
                    const response = await axios.get(`${BASE_URL}/events/slug/${Slugs}`);

                    if (response.data && response.data.data) {
                        foundEvent = response.data.data;
                    } else if (response.data) {
                        foundEvent = response.data;
                    } else {
                        setError("Event data not found in API response.");
                    }
                } catch (err) {
                    console.error("Error fetching individual event:", err);
                    if (err.response && err.response.status === 404) {
                        setError("Event not found on the server.");
                    } else {
                        setError("Failed to load event details. Please check your network and try again.");
                    }
                }
            }

            setLocalEventData(foundEvent);
            setLoading(false);
        };

        if (Slugs) {
            fetchEvent();
        } else {
            setLoading(false);
            setError("No event slug specified in the URL.");
        }
    }, [Slugs, events]);

    const eventToRender = localEventData;

    // --- CRITICAL DEBUGGING CONSOLE LOG ---
    console.log("EventDetails: Found event object (after fetch/find):", eventToRender);
    // --- END DEBUGGING CONSOLE LOG ---

    if (loading) {
        return <div className="p-8 text-center text-2xl">Loading event details...</div>;
    }

    if (error) {
        return <div className="p-8 text-center text-2xl text-red-600">Error: {error}</div>;
    }

    if (!eventToRender) {
        return <div className="p-8 text-center text-2xl">Event not found.</div>;
    }

    // Destructure ONLY the properties you need, plus 'slug' for the URL and any other essential for internal logic
    const {
        title: heading = "",
        tagline = "",
        description: intro = "",
        poster: img = "",
        date = "",
        info = "", // Added info as per your requirement
    } = eventToRender;

    // Removed Win, gallery, gallerypic, allimg, handleclick as they are not needed for the requested data points

    return (
        <div>
            <div>
                {/* HERO SECTION */}
                <div className="grid xl:px-64 lg:px-12 md:px-12 px-12 lg:py-32 lg:grid-cols-2 md:grid-cols-1 grid-cols-1 py-32 place-items-center h-full Team-Hero overflow-x-hidden gap-12 md:gap-12">
                    {/* Image at left, title at right */}
                    <div>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/ipec_acm_chapter/" className="text-2xl">
                            <FaInstagram className="hover:text-secondary" />
                        </a>
                        <div
                            className="xl:p-64 lg:p-48 p-48 md:p-72 rounded-2xl aspect-square bg-gray-400"
                            style={{
                                backgroundImage: `url(${img})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center"
                            }}
                        />
                    </div>
                    <div className="text-lg flex flex-col justify-center">
                        <h1 className="text-7xl font-bold text-sky-500 tracking-wide">{heading}</h1>
                        <div>
                            <TypewriterComponent
                                onInit={(typewriter) => {
                                    typewriter
                                        .typeString(tagline)
                                        .pauseFor(2000)
                                        .start();
                                }}
                            />
                        </div>
                        {date && <p className="font-bold">Date: {date}</p>}
                        {/* Removed Time, Team Size (TS) as per your requirements */}
                        {/* Removed Know More button as it scrolled to sections that are now removed */}
                    </div>
                </div>

                {/* Removed WINNERS SECTION */}

                {/* About Section */}
                <div className="grid py-24 place-items-center">
                    <div className="grid md:grid-cols-2 grid-cols-1 xl:px-64 lg:px-24 px-12 xl:gap-24 lg:gap-12 gap-10 py-10 w-full">
                        {/* Replaced UpcomingCard with a simple div for image */}
                        <div
                            className="xl:p-64 lg:p-48 p-48 md:p-72 rounded-2xl aspect-square bg-gray-400"
                            style={{
                                backgroundImage: `url(${img})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center"
                            }}
                        />
                        <div className="grid gap-y-24">
                            <div>
                                <h1 className="text-4xl font-bold tracking-wide">About Event</h1>
                                <p className="xl:text-lg lg:text-md text-md transition-colors py-4 font-regular tracking-widest">{intro}</p>
                                {/* Displaying 'info' field */}
                                {info && <p className="xl:text-lg lg:text-md text-md transition-colors py-4 font-regular tracking-widest">More Info: {info}</p>}
                            </div>
                            {/* Removed Event rules section */}
                            {/* Removed Contact info section */}
                        </div>
                    </div>
                </div>

                {/* Removed GALLERY SECTION */}

            </div>
        </div>
    );
}