import { Link } from "react-router-dom";
import "./Sig.css"
import { motion, useInView } from "framer-motion";
import Web from "../../assets/Images/sigs/SIG Web.png"
import Tech from "../../assets/Images/sigs/SIG Tech.png"
import Graph from "../../assets/Images/sigs/SIG Graph.png"
import Python from "../../assets/Images/sigs/SIG Python.png"
import Foundation from "../../assets/Images/sigs/SIG Foundation.png"
import sig from "../../assets/Images/club/SIG.png"
import SIGHero from "../../assets/Images/club/SIGHERO.svg"
import { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";
import TypewriterComponent from "typewriter-effect";
export default function SIGs() {
    window.scroll(0,0)
    let ref=useRef(null);
    let {scrollYProgress}=useScroll({
        target:ref,
        offset:["start start","end start"],
    });
    let y=useTransform(scrollYProgress,[0,1],["0%","-150%"]);
    return (
        <div className="w-screen">
            <div ref={ref} className="">
                {/* HERO */}
                <motion.div className=" grid xl:grid-cols-2 lg:grid-cols-1 gap-0 h-[96vh] overflow-x-hidden"
                    style={{
                        backgroundImage: `url(${SIGHero})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize:"cover",
                        backgroundPosition: "center",
                    y                    }}
                >
                    <div className="w-full md:px-32 px-10 py-64 h-full">
                        <div className="text-7xl font-bold text-secondary tracking-wide">
                        <TypewriterComponent
                        onInit={(typewriter=>{
                            typewriter
                            .typeString("SPECIAL INTEREST GROUPS.")
                            .pause()
                            .start()
                        })}
                        />
                        </div>
                        <h2 className="text-2xl font-semibold">Exploring Special Interests in Computer Technology</h2>
                        <p className="text-lg py-8">The SIG (Special Interest Group) page of ACM IPEC showcases the different groups within the organization that focus on specific areas of interest. These SIGs provide a platform for members to collaborate, learn, and network with like-minded individuals. From machine learning to web development, there is a SIG for everyone. Explore our SIG page to discover the SIG that aligns with your interests and start engaging with the community</p>
                        
                    </div>
                    <motion.div
                    initial={{x:"150%"}}
                    animate={{x:"0%"}}
                    
                    >
                    <img src={sig} className="hidden xl:block Hero-right"></img>
                    </motion.div>
                </motion.div>
                <div className=" grid grid-cols-1 gap-32 justify-center xl:ml-32 xl:px-96 md:px-12 px-6 py-12">
                    {/* SIG Tech */}
                    <div >
                        <div className="md:flex grid gap-2 place-items-center">
                            <div className="ImageSIG">
                                <img src={Tech}  />
                            </div>
                            <div className="text-center xl:py-36 lg:py-24 md:px-32 px-6 Tech text-white BG-info xl:w-4/6 lg:w-4/5 w-11/12 w-full py-10">
                                <h1 className="text-4xl font-bold">SIG TECH</h1>
                                <h2 className="font-semibold xl:text-lg lg:text-md p-2">Empowering information through technology</h2>
                                <h3 className="md:text-md text-sm text-justify py-12">The SIG Tech is a special interest group under the ACM IPEC, dedicated to advancing technology through collaboration. Our members are passionate about exploring the latest technologies and discussing their potential applications. We strive to foster a community of like-minded individuals who can share their knowledge and expertise to promote innovation. Our regular meetings cover a variety of topics related to technology, including programming languages, software development, artificial intelligence, and much more. Join us to learn, share, and network with other technology enthusiasts!</h3>
                                <Link to={`/SIG/Tech`}><motion.button whileHover={{scale:1.05}} whileTap={{scale:0.9}} className="bg-SecGradP shadow-2xl px-8 py-4">Know More!</motion.button></Link>
                            </div>
                            {/* <div className="Image-drop Tech"></div> */}
                        </div>
                    </div>
                    
                    {/* SIG Web*/}
                    <div >
                        <div className="md:flex grid gap-2 place-items-center">
                            {/* <div className="Image-dropL Web"></div>                        */}
                            <div className={`text-center xl:py-36 lg:py-24 md:px-32 px-6 Web text-white BG-info xl:w-4/6 lg:w-4/5 md:w-11/12 py-10`}>
                                <h1 className="text-4xl font-bold">SIG WEB</h1>
                                <h2 className="font-semibold xl:text-lg lg:text-md p-2">Empowering information through technology</h2>
                                <h3 className="text-md text-justify py-12">The SIG Tech is a special interest group under the ACM IPEC, dedicated to advancing technology through collaboration. Our members are passionate about exploring the latest technologies and discussing their potential applications. We strive to foster a community of like-minded individuals who can share their knowledge and expertise to promote innovation. Our regular meetings cover a variety of topics related to technology, including programming languages, software development, artificial intelligence, and much more. Join us to learn, share, and network with other technology enthusiasts!</h3>
                                <Link to="/SIG/Web"><motion.button whileHover={{scale:1.05}} whileTap={{scale:0.9}} className="bg-SecGradP shadow-2xl px-8 py-4">Know More!</motion.button></Link>

                            </div>
                            <div className="ImageSIGR">
                                <img src={Web}/>
                            </div>
                        </div>
                    </div>
                    {/* SIG Graph */}
                    <div className="md:flex grid gap-2 place-items-center">
                        <div className="ImageSIG">
                            <img src={Graph}  />
                        </div>
                        <div className="text-center xl:py-36 lg:py-24 md:px-32 px-6 Graph text-white BG-info xl:w-4/6 lg:w-4/5 md:w-11/12 py-10">
                            <h1 className="text-4xl font-bold">SIG GRAPH</h1>
                            <h2 className="font-semibold xl:text-lg lg:text-md p-2">Empowering information through technology</h2>
                            <h3 className="text-md text-justify py-12">The SIG Tech is a special interest group under the ACM IPEC, dedicated to advancing technology through collaboration. Our members are passionate about exploring the latest technologies and discussing their potential applications. We strive to foster a community of like-minded individuals who can share their knowledge and expertise to promote innovation. Our regular meetings cover a variety of topics related to technology, including programming languages, software development, artificial intelligence, and much more. Join us to learn, share, and network with other technology enthusiasts!</h3>
                            <Link to="/SIG/Graph"><motion.button whileHover={{scale:1.05}} whileTap={{scale:0.9}} className="bg-SecGradP shadow-2xl px-8 py-4">Know More!</motion.button></Link>

                        </div>
                        {/* <div className="Image-drop Graph"></div> */}

                    </div>
                    {/* SIG Foundation*/}
                    <div className="md:flex grid gap-2 place-items-center">
                        {/* <div className="Image-dropL Foundation"></div>                        */}

                        <div className="text-center xl:py-36 lg:py-24 md:px-32 px-6 Foundation text-white BG-info xl:w-4/6 lg:w-4/5 md:w-11/12 py-10">
                            <h1 className="text-4xl font-bold">SIG FOUNDATION</h1>
                            <h2 className="font-semibold xl:text-lg lg:text-md p-2">Empowering information through technology</h2>
                            <h3 className="text-md text-justify py-12">The SIG Tech is a special interest group under the ACM IPEC, dedicated to advancing technology through collaboration. Our members are passionate about exploring the latest technologies and discussing their potential applications. We strive to foster a community of like-minded individuals who can share their knowledge and expertise to promote innovation. Our regular meetings cover a variety of topics related to technology, including programming languages, software development, artificial intelligence, and much more. Join us to learn, share, and network with other technology enthusiasts!</h3>
                            <Link to="/SIG/Foundation"><motion.button whileHover={{scale:1.05}} whileTap={{scale:0.9}} className="bg-SecGradP shadow-2xl px-8 py-4">Know More!</motion.button></Link>

                        </div>
                        <div className="ImageSIGR">
                            <img src={Foundation} />
                        </div>
                    </div>
                    {/* SIG Python */}
                    <div className="md:flex grid gap-2 place-items-center">
                        <div className="ImageSIG">
                            <img src={Python}/>
                        </div>
                        <div className="text-center xl:py-36 lg:py-24 md:px-32 px-6 Python text-white BG-info xl:w-4/6 lg:w-4/5 md:w-11/12 py-10">
                            <h1 className="text-4xl font-bold">SIG Python</h1>
                            <h2 className="font-semibold xl:text-lg lg:text-md p-2">Empowering information through technology</h2>
                            <h3 className="text-md text-justify py-12">The SIG Tech is a special interest group under the ACM IPEC, dedicated to advancing technology through collaboration. Our members are passionate about exploring the latest technologies and discussing their potential applications. We strive to foster a community of like-minded individuals who can share their knowledge and expertise to promote innovation. Our regular meetings cover a variety of topics related to technology, including programming languages, software development, artificial intelligence, and much more. Join us to learn, share, and network with other technology enthusiasts!</h3>
                            <Link to="/SIG/Python"><motion.button whileHover={{scale:1.05}} whileTap={{scale:0.9}} className="bg-SecGradP shadow-2xl px-8 py-4">Know More!</motion.button></Link>

                        </div>
                        {/* <div className="Image-drop Python"></div> */}
                    </div>
                </div>
                
            </div>
        </div>
    )
}