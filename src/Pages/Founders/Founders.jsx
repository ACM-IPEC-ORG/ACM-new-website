import { useScroll, useTransform } from "framer-motion";
import { CMCard, Founder, HeadD } from "../../Components/Cards";
import FOUNDER from "../../assets/Images/club/foundersteam.webp"
import { motion } from "framer-motion";
import "../Teams/Team.css"
import { useEffect, useRef } from "react";
import { useAuth } from "../../Context/AuthContext";
import { FETCH_TEAM_ROUTE } from "../../services/constant";
import axios from "axios";
export default function Founders(){
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })

    const {team,setTeam}=useAuth();
    async function fetchTeam(){
        await axios.get(FETCH_TEAM_ROUTE)
        .then(res=>{
            console.log(res)
            setTeam(res.data.data)
        })
        .catch(err=>{
            console.log(err)
        })
    }
    useEffect(()=>{
        const loadTeam = async () => {
            await fetchTeam();
        };
        loadTeam();
    },[setTeam])
    const Found=team?
        team
        .filter(ele=>ele.position==="founder")
        .map(ele=>{
            return(
                <Founder
                {...ele}
                />
            )
        }):null;
    const T2022=team?
        team
        .filter(ele=>ele.position==="t2022")
        .map(ele=>{
            return(
                <CMCard
                {...ele}
                />
            )
        }):null
    const block={
        side:{
            backgroundImage:`url(${FOUNDER})`,
            backgroundSize:"cover",
            backgroundPosition:"center",
            backgroundRepeat:"no-repeat",
            // backgroundAttachment:"fixed",
        }
    }
    const T2023=team?
        team
        .filter(ele=>ele.position==="t2023")
        .map(ele=>{
            return(
                <CMCard
                {...ele}
                />
            )
        }):null
    const T2024=team?
        team
        .filter(ele=>ele.position==="t2024")
        .map(ele=>{
            return(
                <CMCard
                {...ele}
                />
            )
        }):null
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
                            {Found!=null?Found:<p>Loading...</p>}
                        </div>
                    </div>
                </div>
                </section>
                {/* TEAM 2022 */}
                <div className="text-center py-4">
                    <h1 className="text-5xl font-bold">TEAM 2022</h1>
                    <div className="grid place-items-center">
                        <div className="flex flex-wrap xl:w-11/12 scale-75 px-32 w-11/12 justify-center gap-12">
                            {T2022!=null?T2022:<p>Loading...</p>}
                        </div>
                    </div>
                </div>
                {/* TEAM 2023 */}
                <div className="text-center py-12">
                    <h1 className="text-5xl font-bold">TEAM 2023</h1>
                    <div className="grid place-items-center">
                        <div className="flex flex-wrap xl:w-11/12 scale-75 px-32 w-11/12 justify-center gap-12">
                            {T2023!=null?T2023:<p>Loading...</p>}
                        </div>
                    </div>
                </div>
                {/* TEAM 2024 */}
                <div className="text-center py-12">
                    <h1 className="text-5xl font-bold">TEAM 2024</h1>
                    <div className="grid place-items-center">
                        <div className="flex flex-wrap xl:w-11/12 scale-75 px-32 w-11/12 justify-center gap-12">
                            {T2024!=null?T2024:<p>Loading...</p>}      
                        </div>
                    </div>
                </div>
                
            </div>
            
        </div>
    )
}