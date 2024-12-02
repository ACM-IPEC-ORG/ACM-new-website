import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
    session_2019_20, 
    session_2020_21, 
    session_2021_22, 
    session_2022_23,
    // session_2023_24, 
    session_2024_25,
    allEvent 
} from "../../Components/Lists/EventList";
import { EveCard } from "../../Components/Cards";
import "./Event.css"

export default function Events() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    const [menuItem, setMenuItem] = useState(session_2024_25);
    const [selectedSession, setSelectedSession] = useState("s24_25");

    const filter = (button) => {
        let FilterData;
        switch(button) {
            case "s24_25":
                FilterData = session_2024_25;
                break;
            // case "s23_24":
            //     FilterData = session_2023_24;
            //     break;
            case "s22_23":
                FilterData = session_2022_23;
                break;
            case "s21_22":
                FilterData = session_2021_22;
                break;
            case "s20_21":
                FilterData = session_2020_21;
                break;
            case "s19_20":
                FilterData = session_2019_20;
                break;
            default:
                FilterData = session_2024_25;
        }
        setSelectedSession(button);
        setMenuItem(FilterData);
    };

    const sessionButtons = [
        { name: "Session 2024-25", tag: "s24_25" },
        { name: "Session 2023-24", tag: "s23_24" },
        { name: "Session 2022-23", tag: "s22_23" },
        { name: "Session 2021-22", tag: "s21_22" },
        { name: "Session 2020-21", tag: "s20_21" },
        { name: "Session 2019-20", tag: "s19_20" }
    ];

    return (
        <div className="overflow-hidden pt-12 bg-white">
            <div className="divide-y-2 xl:py-12 py-24 divide-gray-200 space-y-10 md:px-24 px-4">
                <ul className="grid lg:flex gap-10 justify-center text-xl text-gray-800">
                    {sessionButtons.map(({ name, tag }) => (
                        <motion.button
                            key={tag}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => filter(tag)}
                            className={`px-4 py-2 cursor-pointer ${
                                selectedSession === tag 
                                ? 'bg-SecGradP text-white' 
                                : 'bg-gray-100 text-gray-800 font-semibold'
                            } hover:scale-110 text-base md:text-xl`}
                        >
                            {name}
                        </motion.button>
                    ))}
                </ul>
                <div>
                    <h1 className="text-center py-4 lg:text-3xl md:text-3xl text-xl tracking-wider font-extrabold text-gray-800">
                        Session {selectedSession.substring(1).replaceAll('_', '-')}
                    </h1>
                    {(selectedSession === "s23_24" || selectedSession === "s24_25") ? (
                        <div className="text-center py-12 text-gray-600">
                            <p className="text-xl">Events for this session are not uploaded yet.</p>
                            <p className="mt-2">Please check back later!</p>
                        </div>
                    ) : (
                        <ul className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-6 md:gap-x-10 gap-y-8 md:gap-y-10 py-8 md:py-12 justify-items-center items-center px-4 md:px-12 xl:w-full">
                            {menuItem && menuItem.map((data) => (
                                <EveCard key={data.slugs} {...data} />
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
}
