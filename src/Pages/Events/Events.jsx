import React, { useState } from "react";
// import Footer from "../../Components/Footer";
// import Navbar from "../../Components/Navbar";
import { session_2019_20, session_2021_22, session_2020_21, session_2022_23, allEvent } from "../../Components/Lists/EventList";
import { motion } from "framer-motion";
import { EveCard } from "../../Components/Cards";
import HERO from "../../assets/Images/club/event.svg"
import HEROleft from "../../assets/Images/club/events-left.svg"
import HEROright from "../../assets/Images/club/events-right.svg"
import "./Event.css"
import { LazyLoadImage } from "react-lazy-load-image-component";
export default function Events() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
    const [menuItem, setMenuItem] = useState(session_2022_23);
    const filter = (button) => {
        let FilterData = allEvent.filter(item => item.tags === button);

        setMenuItem(FilterData);
    }

    const [sesname, setname] = useState("Session 2022-23")
    return (
        <div className="overflow-hidden">

            {/* Hero Section */}

            {/* <motion.div
                className="absolute z-10 overflow-hidden p-52 xl:p-80 lg:p-56 top-0 left-0 aspect-square"
                initial={{ right: "0%" }}
                transition={{ duration: "0.8", ease: "easeInOut" }}
                animate={{ right: "10%" }}
            >
                <LazyLoadImage
                    src={HEROright}
                    alt="Your Alt Text"
                    effect="opacity" // Add blur effect or remove this line if you don't want it
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain', // or other fitting style you prefer
                    }}
                />
            </motion.div> */}
            {/* <div className="z-20">
            <motion.div
                    className="absolute mr-[0%] mt-[-15%] p-52 xl:p-72 lg:p-56 right-0 aspect-square"
                    initial={{ right: "-100%" }}
                    animate={{ right: "0%" }}
                    transition={{ duration: "0.8", ease: "easeInOut" }}
                >
                    <LazyLoadImage
                        src={HEROright}
                        alt="Your Alt Text"
                        effect="opacity" // Add blur effect or remove this line if you don't want it
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'contain', // or other fitting style you prefer
                        }}
                    />
                </motion.div>
                <motion.div
                    className="absolute ml-[0%] p-52 xl:p-72 lg:p-56 mt-[5%] aspect-square"
                    initial={{ left: "-100%" }}
                    animate={{ left: "0%" }}
                    transition={{ duration: "0.8", ease: "easeInOut" }}
                >
                    <LazyLoadImage
                        src={HEROleft}
                        alt="Your Alt Text"
                        effect="opacity" // Add blur effect or remove this line if you don't want it
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'contain', // or other fitting style you prefer
                        }}
                    />
                </motion.div>
            </div> */}


            <div className="flex items-center justify-center h-screen">
                <div className="w-full xl:w-[50vw] md:h-[90vh] bg-TerGradP text-white text-center">
                    <div className="pt-80">
                        <h1 className="md:text-9xl text-6xl font-bold">EVENTS</h1>
                        <h2 className="md:text-3xl text-2xl">Stay updated with our upcoming events and activities</h2>
                    </div>
                </div>
            </div>
            <div className="divide-y-2 xl:py-12 lg:py-24 divide-gray-300 space-y-10 px-24">
                <ul className="grid lg:flex gap-10 justify-center text-xl text-white">
                    <motion.button whileTap={{ scale: 0.9 }} onClick={() => { filter("s22_23"); setname("Session 2022-23") }} className={` px-4 py-2 bg-SecGradP cursor-pointer`}>Session 2022-23</motion.button>
                    <motion.button whileTap={{ scale: 0.9 }} onClick={() => { filter("s21_22"); setname("Session 2021-22") }} className={` px-4 py-2 bg-SecGradP cursor-pointer`}>Session 2021-22</motion.button>
                    <motion.button whileTap={{ scale: 0.9 }} onClick={() => { filter("s20_21"); setname("Session 2020-21") }} className={` px-4 py-2 bg-SecGradP cursor-pointer`}>Session 2020-21</motion.button>
                    <motion.button whileTap={{ scale: 0.9 }} onClick={() => { filter("s19_20"); setname("Session 2019-20") }} className={` px-4 py-2 bg-SecGradP cursor-pointer`}>Session 2019-20</motion.button>
                </ul>

                <div>
                    <h1 className="text-center py-4 lg:text-5xl md:text-3xl text-2xl tracking-wider font-extrabold">{sesname}</h1>

                    <ul className="grid xl:grid-cols-[40rem_40rem] lg:grid-cols-1 gap-x-32 gap-y-4 py-12 justify-center md:px-0 w-11/12">

                        {menuItem && menuItem.map((data) => {
                            return (
                                <EveCard
                                    {...data}
                                />
                            )
                        })}

                    </ul>
                </div>
            </div>


        </div>

    )
}