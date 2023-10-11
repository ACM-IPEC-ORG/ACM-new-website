import { useParams } from "react-router-dom";
import { SyllCard } from "../../Components/Cards"
import { Syllable } from "../../Components/Lists/SigDetail";
import { useState } from "react";
import ImgSource from "../../Components/ImgSource";
// SIG DETAILS
export default function SIGDetails(){
    window.scroll(0,0)
    const { Slugs } = useParams();
    const event = Syllable.find(i => i.slugs === Slugs);
    const{heading,tagline,intro,img,color,logo,YT,tasks,project,info}=event;
    
    return(
        <div>
            <div className="">
                {/* HERO */}
                <div className="grid HERO-details xl:grid-cols-2 lg:grid-cols-1 grid-cols-1 xl:gap-32 lg:gap-0">
                    <div className="text-center lg:py-32 xl:py-24 md:py-48 py-32">
                        <h1 className="xl:text-[10vw] lg:text-[15vw] md:text-[20vw] text-[30vw] font-extrabold text-gray-200">SIG</h1>
                        <h1 className="md:text-7xl text-5xl font-bold text-sky-600 xl:mt-[-12%] md:mt-[-10%] mt-[-15%] lg:mt-[-10%]">{heading}</h1>
                        <h2 className="text-2xl font-semibold leading-tight">{tagline}</h2>
                        <h3 className="text-lg text-justify py-12 px-12 md:px-48">{intro}</h3>
                    </div>
                    <div className="hidden xl:block">
                        <img loading="lazy" src={img} className="absolute right-0 w-1/2"/>
                    </div>
                </div>
                <div className="grid md:grid-flow-col md:gap-0 gap-6 place-items-center text-white py-12 px-10 lg:px-24 xl:px-48 bg-black">
                    <img src={logo} className="xl:w-1/2 lg:w-4/5 border-4 border-sky-500"/>
                    <h3 className="text-md text-justify md:w-10/12 w-11/12">{info}</h3>
                </div>
                {/* SYLLABUS */}
                <div className="bg-syllabus">
                    <h1 className="text-center font-bold xl:text-6xl lg:text-5xl text-4xl text-sky-600 py-12 pb-4">SYLLABUS</h1>
                    <div className="py-12 grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 md:px-12 px-6 gap-10 place-items-center xl:px-96 lg:px-24 xl:gap-24 lg:gap-12 md:gap-10">
                        {tasks.map(data=>{
                            let c=0
                            return(
                                <div className={`${color} p-12 text-center text-white text-xl`}>
                                    <h1 className="font-bold tracking-widest py-2 text-3xl text-center">{data.name}</h1>
                                    <h1 className="text-md">{data.desc}</h1>
                                </div>
                            )
                        })}
                    </div>
                    <div className="py-12 grid grid-rows-1 text-center text-white place-items-center md:px-0 px-12 gap-y-24">
                        <div className={`${color} md:px-48 py-12`}>
                        <h1 className="text-4xl font-bold">PROJECT</h1>
                        <p className="md:text-xl text-md py-4">{project}</p>
                        </div>
                        
                    </div>
                </div>
                {/* YOUTUBE */}
                {/* <div className="grid grid-rows-1 bg-black py-24 place-items-center">
                    <div className="xl:p-64 bg-gray-400 lg:p-48 md:p-36 p-24 aspect-video">
                        
                    </div>

                </div> */}
            </div>
        </div>
    )
}