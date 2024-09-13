import { useParams } from "react-router-dom";
import { allEvent } from "../../Components/Lists/EventList";
import { motion } from "framer-motion";
import { CMCard, Slider, UpcomingCard } from "../../Components/Cards";
import { GalleryList } from "../../Components/Lists/GalleryList";
import { useState } from "react";
import { FaInstagram } from "react-icons/fa";
import TypewriterComponent from "typewriter-effect";
export default function EventDetails(){
    window.scroll(0,0)
    const [hidden,sethidden]=useState(false)
    const { Slugs } = useParams();
    const event = allEvent.find(i => i.slugs === Slugs);
    const{heading,tagline,intro,date,time,rules,cno,TS,winners,img,contact}=event;
    const Win = winners.map(ele => {
        return (
            <CMCard
                {...ele}
            />
        )
    })
    const gallerypic=GalleryList.find(i=>i.slugs===Slugs);
    const{allimg}=gallerypic;
    const gallery=allimg.map((data)=>{
        return(
            <div style={{backgroundImage:`url(${data})`,backgroundSize:"cover",backgroundPosition:"center"}} className="p-28" onClick={()=>sethidden(true)}/>

        )
    })
    function handleclick(){
        document.getElementById("win").scrollIntoView({behavior:"smooth"})
    }
    return(
        <div>
            <div className="">
                {/* HERO SECTION */}
                <div className="grid xl:px-64 lg:px-12 md:px-12 px-12 lg:py-32 lg:grid-cols-2 md:grid-cols-1 grid-cols-1  py-32 place-items-center h-full Team-Hero overflow-x-hidden gap-12 md:gap-12">
                    <div className="text-lg">
                        <h1 className="text-7xl font-bold text-sky-500 tracking-wide">{heading}</h1>
                        <div className="">
                        <TypewriterComponent
                        onInit={(typewriter)=>{
                            typewriter
                            .typeString(tagline)
                            .pause()
                            .start();
                        }}/>
                        </div>
                        {date &&<p className="font-bold ">Date: {date}</p>}
                        {time &&<p className=" font-bold ">Time: {time}</p>}
                        <p className=" font-bold">Team Size: {TS}</p>
                        <motion.button whileHover={{scale:1.05}}
                                whileTap={{scale:0.8}} className="bg-TerGradS text-sm my-4 text-white px-8 py-4" onClick={handleclick}>Know More!</motion.button>
                    </div>
                <div>
                    <a target="_blank_" href="https://www.instagram.com/ipec_acm_chapter/" className="text-2xl "><FaInstagram className="hover:text-secondary"/></a>
                    <div className="xl:p-64 lg:p-48 p-48 md:p-72 rounded-2xl aspect-square bg-gray-400"
                        style={{
                            backgroundImage:`url(${img})`,
                            backgroundSize:"cover",
                            backgroundPosition:"center"
                        }}/>
                </div>
                    
                </div>
                {/* WINNERS */}
            {Win.length>0 && <div id="win" className="grid place-items-center py-10">
                    <h1 className="text-5xl font-bold py-6">WINNERS!</h1>
                    <div className="grid place-items-center">
                        <div className="flex flex-wrap justify-center gap-x-12 py-8">
                            {Win}
                        </div>
                    </div>
                </div>}
               
                {/* About */}
                <div className="grid py-24 place-items-center">
                    <div className="grid md:grid-cols-2 grid-cols-1 xl:px-64 lg:px-24 px-12 xl:gap-24 lg:gap-12 gap-10 py-10 w-full">
                        <UpcomingCard img={img}/>
                        <div className="grid gap-y-24">
                            <div>
                                <h1 className="text-4xl font-bold trancking-wide">About Event</h1>
                                <p className={"xl:text-lg lg:text-md text-md trasition-colors py-4 font-regular tracking widest"}>{intro}</p>

                            </div>
                            <div>
                                <h1 className="text-4xl font-bold trancking-wide">Event rules</h1>
                                <ol className="list-decimal">
                                    {rules.map(d=>{
                                        return(
                                            <li className="xl:text-xl lg:text-lg text-md trasition-colors py-4 font-semibold tracking widest">{d}</li>
                                        )
                                    })}
                                </ol>
                                

                            </div>

                            <div>
                                <p className={"lg:text-xl text-md trasition-colors py-4 font-semibold tracking widest leading-3"}>{contact}</p>
                                <ol className="list-disc">
                                {cno.map(d=>{
                                        return(
                                            <li className="xl:text-xl lg:text-lg text-md py-4 font-semibold tracking widest leading-3">{d}</li>
                                        )
                                    })}
                                </ol>
                                
                            </div>
                        </div>
                    </div>


                </div>
                
                {/* Gallery */}
                {gallery.length>0 && <div className="text-center grid gap-5 gallery py-14">
                    <div>
                        <h1 className="xl:text-5xl lg:text-4xl text-3xl py-8 font-bold text-primary">GALLERY</h1>
                        <div className="grid place-items-center">
                            <div className="lg:w-1/2 md:w-4/5">
                                <div className="flex flex-wrap justify-center gap-12">
                                {gallery}

                                </div>

                            </div>
                        </div>
                    </div>
                    {hidden && <Slider hidden={hidden} img={allimg} sethidden={sethidden}/>}

                    
                </div>}
            </div>
            </div>
    )
}