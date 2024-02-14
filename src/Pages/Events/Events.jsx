import React, { useState } from "react";
import { motion } from "framer-motion";
import { session_2019_20, session_2021_22, session_2020_21, session_2022_23, allEvent } from "../../Components/Lists/EventList";
import { EveCard } from "../../Components/Cards";
// import HERO from "../../assets/Images/club/event.svg"
// import HEROleft from "../../assets/Images/club/events-left.svg"
// import HEROright from "../../assets/Images/club/events-right.svg"
// import { LazyLoadImage } from "react-lazy-load-image-component";
import "./Event.css"

export default function Events() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
    const [menuItem,setMenuItem]=useState(session_2022_23)
    const [selectedSession, setSelectedSession] = useState("s22_23");

    const filter = (button) => {
        let FilterData = allEvent.filter(item => item.tags === button);
        setSelectedSession(button);
        setMenuItem(FilterData);
        // console.log(menuItem)
    }

    const sessionButtons = [
        { name: "Session 2022-23", tag: "s22_23" },
        { name: "Session 2021-22", tag: "s21_22" },
        { name: "Session 2020-21", tag: "s20_21" },
        { name: "Session 2019-20", tag: "s19_20" }
    ];

    return (
        <div className="overflow-hidden pt-12">
            <div className="divide-y-2 xl:py-12 py-24 divide-gray-300 space-y-10 px-24">
                <ul className="grid lg:flex gap-10 justify-center text-xl text-white">
                    {sessionButtons.map(({ name, tag }) => (
                        <motion.button
                            // key={tag}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => filter(tag)}
                            className={`px-4 py-2 cursor-pointer ${selectedSession === tag ? 'bg-SecGradP text-white' : 'bg-white text-black font-semibold'} hover:scale-110`}
                        >
                            {name}
                        </motion.button>
                    ))}
                </ul>
                <div>
                    <h1 className="text-center py-4 lg:text-5xl md:text-3xl text-2xl tracking-wider font-extrabold">Session {selectedSession.substring(1).replaceAll('_', '-')}</h1>
                    <ul className="grid xl:grid-cols-2 xl:px-52 md:grid-cols-1 grid-cols-1 gap-x-32 gap-y-4 py-12 justify-center md:px-24 px-0 xl:w-11/12">
                        {menuItem && menuItem.map((data) => (
                            <EveCard {...data} />
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}
