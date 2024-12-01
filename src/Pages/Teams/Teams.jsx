import { HeadD, CMCard, ConveyerD } from "../../Components/Cards";
import "./Team.css"
import { motion } from "framer-motion";
import { CMList, ConveyersList, HeadsDList, PrimeCMList } from "../../Components/Lists/TeamList";
import TEAM from "../../assets/Images/club/TEAM.webp"
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Teams() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })

    const HEADsD = HeadsDList.map(ele => <HeadD {...ele} />);

    const Conveyer = ConveyersList.map(ele => <ConveyerD {...ele} />);

    const PM = PrimeCMList.map(ele => <CMCard {...ele} />);

    const CM = CMList.map(ele => <CMCard {...ele} />);

    let ref = useRef(null);
    let { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    let opacity = useTransform(scrollYProgress, [0, 1], ["100", "0%"]);
    let scale = useTransform(scrollYProgress, [0, 1], ["1", "0"]);
    let y = useTransform(scrollYProgress, [0, 1], ["0%", "-120%"]);

    return (
        <div>

            {/* HERO */}
            <div className="mb-24">
                <section ref={ref}>
                    <motion.div className="Team-Hero py-10" style={{ y }}>
                        <div className="grid lg:px-12 px-6 overflow-hidden xl:grid-cols-[20vw_50vw] lg:grid-cols-1 xl:place-items-center justify-center lg:gap-32 md:gap-24 py-12">
                            <div className="text-center lg:text-left">
                                <h1 className="font-extrabold text-3xl lg:text-5xl">WE WATCH, LEARN, GROW</h1>
                                <h2 className="text-lg lg:w-72 mt-4">Meet the Dedicated <b>TEAM</b> behind ACM IPEC</h2>
                            </div>
                            <img
                                className="h-64 lg:h-96 w-full rounded-lg object-cover object-center"
                                src={TEAM}
                                alt="Team"
                            />
                        </div>
                    </motion.div>

                    {/* Head of Department */}
                    <div className="grid place-items-center xl:px-64 lg:px-10 pt-12">
                        <div className="w-full grid xl:grid-cols-2 lg:grid-cols-1 gap-12">
                            <div className="xl:w-full md:px-24 px-6 lg:text-center">
                                <h1 className="text-2xl py-4 font-semibold">Head of Department</h1>
                                <p className="text-sm lg:text-justify">The Heads of Department are experienced faculty members who play a crucial role in guiding and mentoring students in their respective fields of study. They are responsible for creating a conducive learning environment and imparting knowledge to the students. The Heads of Departments collaborate with other faculty members and the administration to ensure the smooth functioning of the institute.</p>
                            </div>
                            <div className="grid scale-90 md:grid-cols-3 grid-cols-1 place-items-center">
                                {HEADsD}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Conveyers */}
                <div className="grid grid-cols-1 place-items-center px-6 lg:px-24 pt-12">
                    <div className="xl:px-96 lg:px-24 text-center">
                        <h1 className="text-2xl py-4 font-semibold">CONVEYERS</h1>
                        <p className="text-sm">The Conveners are responsible for organizing and coordinating various events and activities of the ACM IPEC. They work closely with other team members to ensure successful execution of events and strive to provide meaningful opportunities to the members.</p>
                    </div>
                    <div className="grid md:grid-flow-col scale-90 grid-cols-1 md:grid-cols-2 justify-center xl:px-96 lg:px-12 px-10 py-8">
                        {Conveyer}
                    </div>
                </div>

                {/* Prime Core Members */}
                <div className="grid grid-cols-1 place-items-center px-6 lg:px-32 pt-6">
                    <div className="xl:px-96 text-center pb-12">
                        <h1 className="text-2xl py-4 font-semibold">PRIME CORE MEMBERS</h1>
                        <p className="text-sm">Prime core members are leaders of IPEC ACM who exhibit exceptional dedication and contribution to the society. They oversee and execute various initiatives to promote learning and growth in the field of computing.</p>
                    </div>
                    <div className="flex flex-wrap gap-x-12 gap-y-4 justify-center w-full lg:w-3/4">
                        {PM}
                    </div>
                </div>

                {/* Core Members */}
                <div className="grid grid-cols-1 place-items-center px-6 lg:px-32 pt-6">
                    <div className="xl:px-96 text-center pb-12">
                        <h1 className="text-2xl py-4 font-semibold">CORE MEMBERS</h1>
                        <p className="text-sm">Core members are the backbone of our team, they work dedicatedly and effectively in every aspect of the organization. They contribute greatly to the success of our society.</p>
                    </div>
                    <div className="flex flex-wrap gap-x-12 gap-y-4 justify-center w-full lg:w-3/4">
                        {CM}
                    </div>
                </div>
            </div>
        </div>
    );
}
