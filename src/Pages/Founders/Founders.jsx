import { useScroll, useTransform } from "framer-motion";
import { CMCard, Founder } from "../../Components/Cards";
import { FoundersList, Team2022List, Team2023List } from "../../Components/Lists/TeamList";
import FOUNDER from "../../assets/Images/club/foundersteam.jpeg";
import { motion } from "framer-motion";
import "../Teams/Team.css";
import { useRef } from "react";

export default function Founders() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    const Found = FoundersList.map((ele) => {
        return <Founder {...ele} />;
    });
    
    const T2022 = Team2022List.map((ele) => {
        return <CMCard {...ele} />;
    });

    const T2023 = Team2023List.map((ele) => {
        return <CMCard {...ele} />;
    });

    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

    return (
        <div>
            {/* HERO SECTION */}
            <section ref={ref}>
                <motion.div className="Team-Hero py-10" style={{ y }}>
                    <div className="grid xl:px-44 lg:px-24 px-10 lg:grid-cols-[20%_70%] justify-center lg:gap-32 gap-16 py-12">
                        <div>
                            <h1 className="font-extrabold text-4xl w-12">Dear Founders,</h1>
                            <h2 className="text-md">
                                Thanks for having the vision, courage and determination to create a society. 
                                For having a dream which has turned into our present reality. You were determined and 
                                creative and generous. It was not an easy task! The contributions you have made to this 
                                chapter five years ago have been invaluable to us.
                            </h2>
                        </div>

                        <img
                            className="w-full rounded-lg object-cover object-center"
                            src={FOUNDER}
                            loading="lazy"
                            alt="founders"
                        />
                    </div>
                </motion.div>

                {/* FOUNDERS */}
                <div className="text-center xl:pt-32 lg:pt-52 md:pt-52 grid place-items-center">
                    <h1 className="text-5xl font-bold text-sky-500">FOUNDERS</h1>
                    <div className="flex pt-12 flex-wrap gap-x-8 gap-y-6 justify-center w-11/12 max-w-[90rem]">
                        {Found}
                    </div>
                </div>
            </section>

            {/* TEAM 2022 */}
            <div className="text-center py-4 grid place-items-center">
                <h1 className="text-5xl font-bold">TEAM 2022</h1>
                <div className="flex pt-12 flex-wrap gap-x-8 gap-y-6 justify-center w-11/12 max-w-[90rem]">
                    {T2022}
                </div>
            </div>

            {/* TEAM 2023 */}
            <div className="text-center py-12 grid place-items-center">
                <h1 className="text-5xl font-bold">TEAM 2023</h1>
                <div className="flex flex-wrap gap-x-8 gap-y-6 pt-12 justify-center w-11/12 max-w-[90rem]">
                    {T2023}
                </div>
            </div>
        </div>
    );
}
