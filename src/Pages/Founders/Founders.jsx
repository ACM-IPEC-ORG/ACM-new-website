import { useScroll, useTransform } from "framer-motion";
import { CMCard, Founder, HeadD } from "../../Components/Cards";
import { FoundersList, Team2022List, Team2023List, Team2024List } from "../../Components/Lists/TeamList";
import FOUNDER from "../../assets/Images/club/foundersteam.webp"
import { motion } from "framer-motion";
import "../Teams/Team.css"
import { useRef } from "react";
export default function Founders(){
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
    const Found=FoundersList.map(ele=>{
        return(
            <Founder
            {...ele}
            />
        )
    })
    const T2022=Team2022List.map(ele=>{
        return(
            <CMCard
            {...ele}
            />
        )
    })
    const block={
        side:{
            backgroundImage:`url(${FOUNDER})`,
            backgroundSize:"cover",
            backgroundPosition:"center",
            backgroundRepeat:"no-repeat",
            // backgroundAttachment:"fixed",
        }
    }
    const T2023=Team2023List.map(ele=>{
        return(
            <CMCard
            {...ele}
            />
        )
    })
    const T2024=Team2024List.map(ele=>{
        return(
            <CMCard
            {...ele}
            />
        )
    })
    const ref=useRef(null)
    const {scrollYProgress}=useScroll({
        target:ref,
        offset:["start start","end start"]
    })
    const y=useTransform(scrollYProgress,[0,1],["0%","50%"])
    return(
        <div>
            
            <div className="" >
                <section ref={ref}>
            <motion.div className="Team-Hero py-10" style={{y}}>
                    <div className="grid xl:px-44 place-items-center lg:px-24 px-10 overflow-hidden xl:grid-flow-col lg:grid-flow-row justify-center lg:gap-32 gap-16 py-12 " >
                        <div>
                            <h1 className="font-extrabold text-4xl w-12">Dear Founders,</h1>
                            <h2 className="text-xs">Thanks for having the vision, courage and determination to create a society. For having a dream which has turned into our present reality. You were determined and creative and generous. It was not an easy task! A lot of appreciations as well as a lot more of applauses which you deserve because the work you have done for the welfare of our college not every one actually have these many guts to do so. The contributions you have made to this chapter before the five years back have been invaluable to us.</h2>
                        </div>

                        <div style={block.side} className="md:px-[25vw] hidden md:block py-52 rounded-3xl"></div>
                        
                    </div>
                </motion.div>
                {/* Founder */}
                
                <div className="text-center xl:py-32 lg:py-52 md:py-52">
                    <h1 className="text-5xl font-bold text-sky-500">FOUNDERS</h1>
                    <div className="grid place-items-center">
                        <div className="flex flex-wrap scale-75 xl:w-11/12 w-11/12 justify-center gap-12">
                            {Found}
                        </div>
                    </div>
                </div>
                </section>
                {/* TEAM 2022 */}
                <div className="text-center py-4">
                    <h1 className="text-5xl font-bold">TEAM 2022</h1>
                    <div className="grid place-items-center">
                        <div className="flex flex-wrap xl:w-11/12 scale-75 px-32 w-11/12 justify-center gap-12">
                            {T2022}
                        </div>
                    </div>
                </div>
                {/* TEAM 2023 */}
                <div className="text-center py-12">
                    <h1 className="text-5xl font-bold">TEAM 2023</h1>
                    <div className="grid place-items-center">
                        <div className="flex flex-wrap xl:w-11/12 scale-75 px-32 w-11/12 justify-center gap-12">
                            {T2023}
                        </div>
                    </div>
                </div>
                {/* TEAM 2024 */}
                <div className="text-center py-12">
                    <h1 className="text-5xl font-bold">TEAM 2024</h1>
                    <div className="grid place-items-center">
                        <div className="flex flex-wrap xl:w-11/12 scale-75 px-32 w-11/12 justify-center gap-12">
                            {T2024}
                        </div>
                    </div>
                </div>
                
            </div>
            
        </div>
    )
}