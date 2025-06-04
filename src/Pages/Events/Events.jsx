import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { EveCard } from "../../Components/Cards";
import "./Event.css";
import { useAuth } from "../../Context/AuthContext";
import { FETCH_EVENT_ROUTE } from "../../services/constant";

export default function Events() {
    const { events, setEvents } = useAuth();
    const [selectedSession, setSelectedSession] = useState("s24_25");

    // Scroll to top when the component is loaded
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }, []);

    // Fetch event details from the server
    async function fetchEventDetails() {
        try {
            const response = await axios.get(FETCH_EVENT_ROUTE);
            setEvents(response.data.data);
            console.log("API Response Data:", response.data);
            console.log("Events loaded into AuthContext:", response.data.data);
        } catch (error) {
            console.error("Error fetching events:", error);
        }
    }

    // Load events if not already loaded
    useEffect(() => {
        if (!events) {
            fetchEventDetails();
        }
    }, [events]);

    // Session buttons data
    const sessionButtons = [
        { name: "Session 2024-25", tag: "s24_25" },
        { name: "Session 2023-24", tag: "s23_24" },
        { name: "Session 2022-23", tag: "s22_23" },
        { name: "Session 2021-22", tag: "s21_22" },
        { name: "Session 2020-21", tag: "s20_21" },
        { name: "Session 2019-20", tag: "s19_20" },
    ];

    return (
        <div className="overflow-hidden pt-12 bg-white">
            <div className="divide-y-2 xl:py-12 py-24 divide-gray-200 space-y-10 md:px-24 px-4">
                {/* Session buttons */}
                <ul className="grid lg:flex gap-10 justify-center text-xl text-gray-800">
                    {sessionButtons.map(({ name, tag }) => (
                        <motion.button
                            key={tag}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => setSelectedSession(tag)}
                            className={`px-4 py-2 cursor-pointer ${
                                selectedSession === tag
                                    ? "bg-SecGradP text-white"
                                    : "bg-gray-100 text-gray-800 font-semibold"
                            } hover:scale-110 text-base md:text-xl`}
                        >
                            {name}
                        </motion.button>
                    ))}
                </ul>

                {/* Event listing */}
                <div>
                    <h1 className="text-center py-4 lg:text-3xl md:text-3xl text-xl tracking-wider font-extrabold text-gray-800">
                        Session {selectedSession.substring(1).replace("_", "-")}
                    </h1>
                    {events && events.filter((event) => event.session === selectedSession).length > 0 ? (
                        <ul
                            // MODIFIED CLASSES HERE for Flexbox:
                            className="flex flex-wrap justify-center gap-x-6 md:gap-x-10 gap-y-8 md:gap-y-10 py-8 md:py-12 px-4 md:px-12 xl:w-full"
                        >
                            {events
                                .filter((event) => event.session === selectedSession)
                                .map((event) => (
                                    <EveCard key={event.id} {...event} />
                                ))}
                        </ul>
                    ) : (
                        <div className="text-center py-12 text-gray-600">
                            <p className="text-xl">Events for this session are not uploaded yet.</p>
                            <p className="mt-2">Please check back later!</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}