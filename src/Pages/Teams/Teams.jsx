import { HeadD, CMCard } from "../../Components/Cards";
import "./Team.css"
import { motion } from "framer-motion";
import TEAM from "../../assets/Images/club/TEAM.webp"
import { useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import ImgSource from "../../Components/ImgSource";
import { useAuth } from "../../Context/AuthContext";
import axios from "axios";
import { FETCH_TEAM_ROUTE } from "../../services/constant";
export default function Teams() {
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

    const HEADsD = team?
        team
        .filter(ele=>ele.position==="HOD")
        .map(ele => {
            return (
                <HeadD
                    {...ele}
                />
            )
        }):null;
    const Conveyer = team?
        team
        .filter(ele=>ele.position==="conveyner")
        .map(ele => {
            return (
                <HeadD
                    {...ele}
                />
            )
        }):null
    const block={
        side:{
            backgroundImage:`url(${TEAM})`,
            backgroundSize:"cover",
            backgroundPosition:"center",
            backgroundRepeat:"no-repeat",
            // backgroundAttachment:"fixed",
        }
    }
    const PM = team?
        team
        .filter(ele=>ele.position==="prime")
        .map(ele => {
            return (
                <CMCard
                    {...ele}
                />
            )
        }):null
    const CM = team?
        team
        .filter(ele=>ele.position==="core")
        .map(ele => {
            return (
                <CMCard
                    {...ele}
                />
            )
        }):null
    let ref=useRef(null);
    let {scrollYProgress}=useScroll({
        target:ref,
        offset:["start start","end start"],
    });
    let opacity=useTransform(scrollYProgress,[0,1],["100","0%"]);
    let scale=useTransform(scrollYProgress,[0,1],["1","0"]);
    let y=useTransform(scrollYProgress,[0,1],["0%","-120%"]);
    return (
        <div>
            
            {/* HERO */}
            <div className="">
                <section ref={ref}> 
               
                <motion.div className="Team-Hero py-10" style={{y}}>
                    <div className="grid lg:px-12 px-12 overflow-hidden xl:grid-cols-[20vw_50vw] lg:grid-cols-1 xl:place-items-center justify-center lg:gap-32 md:gap-24 py-12 " >
                        <div className="">
                        <h1 className="font-extrabold text-5xl w-12">WE WATCH, LEARN, GROW</h1>
                            <h2 className="text-lg w-72">Meet the Dedicated <b>TEAM</b> behind ACM IPEC</h2>
                        </div>

                        {/* <img src={TEAM}  className="hidden md:block xl:px-[25vw] md:px-[45vw] py-52 rounded-3xl"></img> */}
                        <ImgSource src={TEAM}/>
                    </div>
                </motion.div>
                
                {/* Head of Department */}
                <div className="grid xl:grid-cols-2 gap-0 lg:grid-cols-1 xl:px-64 lg:px-10 pt-12">
                    <div className="xl:w-11/12 md:px-24 px-12 lg:text-center">
                        <h1 className="text-2xl py-4 font-semibold">Head of Department</h1>
                        <p className="text-xs lg:text-justify">The Heads of Department are experienced faculty members who play a crucial role in guiding and mentoring students in their respective fields of study. They are responsible for creating a conducive learning environment and imparting knowledge to the students. The Heads of Departments collaborate with other faculty members and the administration to ensure the smooth functioning of the institute.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3  place-items-center">
                        {HEADsD!=null?HEADsD:<p>Loading...</p>}
                    </div>
                </div>
                </section>
                
                
                {/* Conveyers */}
                <div className="grid grid-cols-1 place-items-center px-24 pt-12">
                    <div className="xl:px-96 lg:px-24 text-center">
                        <h1 className="text-2xl py-4 font-semibold">CONVEYERS</h1>
                        <p className="text-xs ">The Conveners are responsible for organizing and coordinating various events and activities of the ACM IPEC. They work closely with other team members to ensure successful execution of events and strive to provide meaningful opportunities to the members.</p>
                    </div>
                    <div className="grid  scale-75 md:grid-cols-2 grid-cols-1 justify-evenly xl:px-64 lg:px-12 md:gap-12 px-10 py-8">
                        {Conveyer!=null?Conveyer:<p>Loading...</p>}
                    </div>
                </div>
                {/* PM */}
                <div className="grid grid-cols-1 place-items-center px-32 px-10 pt-6">
                    <div className="xl:px-96 text-center">
                        <h1 className="text-2xl py-4 font-semibold">PRIME CORE MEMBERS</h1>
                        <p className="text-xs ">Prime core members are leaders of IPEC ACM who exhibit exceptional dedication and contribution to the society. They oversee and execute various initiatives to promote learning and growth in the field of computing.</p>
                    </div>
                    <div className="grid place-items-center">
                        <div className="flex scale-75 flex-wrap xl:w-11/12 lg:w-11/12 w-full justify-center gap-x-12">
                            {PM!=null?PM:<p>Loading...</p>}
                        </div>
                    </div>
                    
                </div>
                {/* Conveyers */}
                <div className="grid grid-cols-1 place-items-center px-32 pt-6">
                    <div className="xl:px-96 text-center">
                        <h1 className="text-2xl py-4 font-semibold">CORE MEMBERS</h1>
                        <p className="text-xs ">Core members are the backbone of our team, they work dedicatedly and effectively in every aspect of the organization. They contribute greatly to the success of our society.</p>
                    </div>
                    <div className="grid place-items-center">
                        <div className="flex scale-75 flex-wrap xl:w-11/12 lg:w-11/12 w-full justify-center gap-x-12 py-8">
                            {CM!=null?CM:<p>Loading...</p>}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}