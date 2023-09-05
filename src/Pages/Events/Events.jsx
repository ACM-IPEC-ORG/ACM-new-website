import React, { useState } from "react";
// import Footer from "../../Components/Footer";
// import Navbar from "../../Components/Navbar";
import { session_2019_20,session_2021_22,session_2020_21, session_2022_23, allEvent } from "../../Components/Lists/EventList";
import { motion } from "framer-motion";
import { EveCard } from "../../Components/Cards";
import HERO from "../../assets/Images/club/event.svg"
import HEROleft from "../../assets/Images/club/events-left.svg"
import HEROright from "../../assets/Images/club/events-right.svg"
import "./Event.css"
export default function Events(){
    let flag=0;
    if(flag=0){
        window.scroll(0,0);
        flag=1
    }
    const [menuItem, setMenuItem]=useState(session_2022_23);
    const filter=(button)=>{
        let FilterData=allEvent.filter(item=>item.tags===button);

        setMenuItem(FilterData);
    }

    const [sesname,setname]=useState("Session 2022-23")
    return(
        <div className="overflow-hidden">
        
        {/* Hero Section */}
        <motion.div className="absolute overflow-hidden bottom-24 xl:p-96 lg:p-56 bottom-0 aspect-square"
            initial={{left:"-100%" }}
            animate={{left:"10%",}}
            transition={{duration:"0.8",ease:"easeInOut"}}
            style={{
                backgroundImage: `url(${HEROleft})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "bottom",
                backgroundSize: "contain",
            }}
        ></motion.div>
        <motion.div className="absolute overflow-hidden xl:p-96 lg:p-56 top-0 right-0 aspect-square"
            initial={{right:"-100%"}}
            transition={{duration:"0.8",ease:"easeInOut"}}
            animate={{right:"10%"}}
            style={{
                backgroundImage: `url(${HEROright})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "start",
                backgroundSize: "contain",
            }}
        ></motion.div>
        <div className="xl:w-full h-[100vh] md:h-[90vh] justify-center Eve-Hero"
            style={{
                backgroundImage: `url(${HERO})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "contain",
            }}
        >
            <div className="pt-96 text-center text-white justify-center">
                <h1 className="md:text-9xl text-6xl font-bold">EVENTS</h1>
                <h2 className="md:text-3xl text-2xl">Stay updated with our upcoming events and activities</h2>
            </div>

        </div>
        <div className="divide-y-2 xl:py-12 lg:py-24 divide-gray-300 space-y-10 px-24">
            <ul className="grid lg:flex gap-10 justify-center text-xl text-white">
                <motion.button whileTap={{scale:0.9}} onClick={()=>{filter("s22_23");setname("Session 2022-23")}} className={` px-4 py-2 bg-SecGradP cursor-pointer`}>Session 2022-23</motion.button>
                <motion.button whileTap={{scale:0.9}} onClick={()=>{filter("s21_22");setname("Session 2021-22")}} className={` px-4 py-2 bg-SecGradP cursor-pointer`}>Session 2021-22</motion.button>
                <motion.button whileTap={{scale:0.9}} onClick={()=>{filter("s20_21");setname("Session 2020-21")}} className={` px-4 py-2 bg-SecGradP cursor-pointer`}>Session 2020-21</motion.button>
                <motion.button whileTap={{scale:0.9}} onClick={()=>{filter("s19_20");setname("Session 2019-20")}} className={` px-4 py-2 bg-SecGradP cursor-pointer`}>Session 2019-20</motion.button>
            </ul>

            <div>
            <h1 className="text-center py-4 lg:text-5xl md:text-3xl text-2xl tracking-wider font-extrabold">{sesname}</h1>
                
            <ul className="grid xl:grid-cols-[40rem_40rem] lg:grid-cols-1 gap-x-32 gap-y-4 py-12 justify-center md:px-0 w-11/12">
                
                {menuItem && menuItem.map((data)=>{
                    return(
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