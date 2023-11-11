import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {AiOutlineArrowRight,AiOutlineArrowLeft} from "react-icons/ai"
import {BsInstagram,BsFacebook,BsLinkedin} from "react-icons/bs"
import {RxDotFilled} from "react-icons/rx"
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import HeroImg from "../../assets/Images/club/hero_home.webp"
import React, { useRef, useState } from "react";
import {  FeatureList, GalleryList } from "../../Components/Lists/GalleryList";
import { UpcomingList, featurelist, session_2020_21 } from "../../Components/Lists/EventList";
import { Carasouel, MarqueR, Slider, UpcomingCard } from "../../Components/Cards";
// import { Carousel, Gallerycard } from "../../Components/Cards";
import { useScroll, useTransform } from "framer-motion";
import IMG1 from "../../assets/Images/Gallery/BUGSMASH/1.jpeg"
import IMG2 from "../../assets/Images/Gallery/BUGSMASH/2.jpeg"
import IMG3 from "../../assets/Images/Gallery/BUGSMASH/3.jpeg"
import TypewriterComponent from "typewriter-effect";
import { LazyLoadImage } from "react-lazy-load-image-component";
export default function Home(){
    window.scroll(0,0)
    const upcome=UpcomingList.find(items=>items.upcome);
    const [img,setimage]=useState("")
    const [Name,setName]=React.useState("")
    const [Email,setEmail]=React.useState("")
    const [Mssg,setMssg]=React.useState("")
    
    const [clickedImg,setClickedImg]=useState(null);
    const [clickedIndex,setCurentIndex]=useState(null);
    const [hidden,sethidden]=useState(false)
    const handleImage=(items,index)=>{
        setCurentIndex(index)
        setClickedImg(item.img)
    }
    const gallery=FeatureList.map((data)=>{
        return(
            <div>
                <h1 className="text-2xl font-bold pt-8 pb-4">{data.name}</h1>
                <div className="grid place-items-center">
                    <div className="xl:w-1/3 md:w-4/5  w-11/12 grid md:grid-cols-3 grid-cols-2 gap-8 place-items-center" onClick={()=>setimage(data.img)}>
                        {data.img.map((d)=>{
                            return(
                                <div style={{backgroundImage:`url(${d})`,backgroundSize:"cover",backgroundPosition:"center"}} className="md:p-28 p-20" onClick={()=>{
                                    sethidden(true),
                                    handleImage(item,index)
                                }}/>

                            )

                        })}
                    </div>
                </div>
                
            </div>
        )
    })
    function handleClick(){
        document.getElementById("more").scrollIntoView({behavior:"smooth",block:"start"})
    }
    function handleContact(){
        document.getElementById("contact").scrollIntoView({behavior:"smooth",block:"start"})
    }
    return(
        <div>
            <div className="w-full ">
                {/* Hero */}
                <div
                className="grid xl:grid-cols-2 lg:grid-cols-1 pb-6 xl:gap-12 lg:gap-0 h-full overflow-x-hidden">
                    <div className="md:px-0 xl:w-11/12 lg:w-4/5 md:w-11/12 w-full h-full xl:py-48 md:pl-24 pl-12 lg:py-24 md:pt-32 pt-32  px-10">
                        <h1 className="text-2xl font-semibold">Welcome to</h1>
                        <h1 className="xl:text-7xl lg:text-6xl md:text-5xl text-4xl py-2 font-bold text-sky-500 tracking-wide">Association For Computing Machinery</h1>
                        <h2 className="text-2xl font-semibold">IPEC | Student Chapter</h2>
                        <p className="text-md py-8">ACM is a renowned educational and scientific society established in New York in 1947. It connects researchers, educators, and professionals, encourages discourse, and addresses challenges in computing. The IPEC ACM Student Chapter is a representative association that promotes high standards of honor and civic responsibility, cooperation between students, faculty, and administration, and an increased interest in computing. Chartered by ACM, the Chapter operates for educational and scientific purposes to improve students' learning and working environments, promote modern computing, and foster communication among those interested in computing.</p>
                        <div className="flex gap-12">
                           
                            <motion.button whileHover={{scale:1.05}}
                                whileTap={{scale:0.8}} onClick={handleClick} className="bg-SecGradP text-white px-8 py-4">Know More!</motion.button>
                            <motion.button whileHover={{scale:1.05}}
                                whileTap={{scale:0.8}} onClick={handleContact} className="bg-TerGradP text-white px-8 py-4">Contact Us</motion.button>
                        </div>
                        
                    </div>
                    <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1,ease:"easeInOut"}}>
                    <LazyLoadImage src={HeroImg} loading="lazy" className="hidden xl:block xl:ml-52"  draggable="false"></LazyLoadImage>
                    </motion.div>
                </div>
                <div id="more">
                {/* Upcoming Event */}
                    {upcome &&<section
                    // ref={targetRef}
                    className=" h-full">
                        <div className="sticky grid place-items-center py-16">
                            <h1 className="xl:text-6xl lg:text-5xl md:text-4xl text-3xl font-bold text-secondary">Upcoming Event</h1>
                            
                                {UpcomingList.map(data=>{
                                    return(
                                        <div className="grid grid-cols-1 md:grid-cols-2 xl:px-64 lg:px-12 px-12 xl:gap-24 py-10 w-full">
                                            <UpcomingCard img={data.img}/>
                                            <div className="grid gap-y-24 py-4">
                                                <div>
                                                    <h1 className="xl:text-4xl lg:text-3xl text-2xl font-bold trancking-wide">{data.name}</h1>
                                                    <p className={"xl:text-lg text-md  trasition-colors py-4 font-regular tracking widest"}>{data.intro}</p>

                                                </div>
                                                <ul className="list-disc">
                                                        {data.points.map(d=>{
                                                            return(
                                                                <li className="xl:text-xl lg:text-lg text-md trasition-colors py-4 font-semibold tracking widest">{d}</li>
                                                            )
                                                        })}
                                                    </ul>
                                                <div>
                                                    <h1 className="xl:text-4xl lg:text-3xl text-2xl font-bold trancking-wide">Event rules</h1>
                                                    <ol className="list-decimal">
                                                        {data.rules.map(d=>{
                                                            return(
                                                                <li className="xl:text-xl lg:text-lg text-md trasition-colors py-4 font-semibold tracking widest">{d}</li>
                                                            )
                                                        })}
                                                    </ol>
                                                    

                                                </div>

                                                <div>
                                                    <p className={"xl:text-xl lg:text-lg text-md trasition-colors py-4 font-semibold tracking widest leading-3"}>{data.contact}</p>
                                                    <ol className="list-disc">
                                                    {data.cno.map(d=>{
                                                            return(
                                                                <li className="xl:text-xl lg:text-lg text-md py-4 font-semibold tracking-wider leading-3">{d}</li>
                                                            )
                                                        })}
                                                    </ol>
                                                    <a href={data.register}><motion.button whileHover={{scale:1.05}}
                                    whileTap={{scale:0.8}} className="bg-SecGradP text-white px-8 py-4">Register Now!</motion.button></a>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                                }
                            

                        </div>
                    </section>}
                    
                    {/* Events */}
                    <div className="text-center text-white bg-SecGradP">
                        <h1 className="lg:text-6xl md:text-5xl text-3xl font-semibold pt-4">Recent Events</h1>
                        <h1 className="lg:text-2xl md:text-xl text-lg md:leading-9 font-thin">What's going on in IPEC ACM?</h1>
                        <div className="py-4 md:py-12">
                            <MarqueR/>
                        </div>
                    
                    
                    </div>
                </div>
                
                {/* Gallery */}
                <div className="text-center grid gap-5 gallery py-24">
                    <div>
                    <h1 className="xl:text-7xl lg:text-6xl text-5xl font-bold text-primary">GALLERY</h1>
                    <div className="xl:text-xl lg:text-lg md:text-md text-secondary font-semibold ">
                        <TypewriterComponent
                        onInit={(typewriter)=>{
                            typewriter
                            .typeString("What goes on in the Events?")
                            .pause()
                            .start();
                        }}
                        />
                    </div>
                    <h1 className="xl:px-96 lg:px-32 px-12 tracking-wide md:text-md text-md py-4">Explore our gallery page to see some of the exciting activities we've held at IPEC ACM. From workshops and seminars to coding competitions and social events, our society is dedicated to providing a vibrant community for students interested in computing. Check out the photos to get a sense of the energy and enthusiasm that permeates our events, and join us for our next gathering to experience it for yourself!</h1>
                    </div>
                    {gallery}
                    <div>
                    <Link to="/Gallery"><button className="bg-SecGradP text-white px-8 py-4">Know More!</button></Link>
                    </div>
                    
                    {hidden && <Slider clickedImg={clickedImg} img={img} hidden={hidden} sethidden={sethidden}/>}
                </div>
                {/* Contact */}
                <div id="contact" className="bg-black py-16 grid place-items-center">
                    <h1 className="text-gray-500 font-bold xl:text-9xl lg:text-8xl text-6xl pb-12">CONTACT</h1>
                    
                    <div className="grid xl:grid-cols-2 lg:grid-cols-1 xl:px-72 lg:px-24 place-items-center xl:gap-10 lg:gap-32 gap-16">
                        <div className="space-y-5 md:px-0 px-5">
                            <h1 className="text-white text-3xl font-semibold flex gap-3">Get in <p className="text-primary font-bold">touch</p> with us</h1>
                            <form className="space-y-2 text-white">
                                <input placeholder="Name" className="py-4 w-full px-5 bg-transparent border border-secondary md:text-lg outline-0" value={Name} onChange={(e)=>setName(e.target.value)}/>
                                <input placeholder="Email" className="py-4 w-full px-5 bg-transparent border border-secondary outline-0 md:text-lg" value={Email} onChange={(e)=>setEmail(e.target.value)}/>
                                <textarea placeholder="Message" className="py-4 w-full bg-transparent px-5 h-72 border border-tertiary outline-0 md:text-lg" value={Mssg} onChange={(e)=>setMssg(e.target.value)}/>
                            </form>
                            <div className="grid md:grid-cols-2 grid-cols-1 md:gap-52 gap-12 text-white">
                                <div className="grid place-items-start">
                                    <h1 className="lg:text-xl text-lg font-semibold tracking-widest">Follow Us.</h1>
                                    <div className="flex gap-5 text-primary text-3xl md:py-2">
                                        <a target="_blank_" href="https://www.instagram.com/ipec_acm_chapter/" className="hover:text-tertiary"><BsInstagram/></a>
                                        <a target="_blank_" href="https://www.facebook.com/IpecACM/" className="hover:text-tertiary"><BsFacebook/></a>
                                        <a target="_blank_" href="https://www.linkedin.com/company/ipec-acm-chapter/" className="hover:text-tertiary"><BsLinkedin/></a>
                                    </div>
                                </div>
                                <a href={`mailto:ipecacm@gmail.com?subject=${Email}&body=${"I am "+Name+", \n"+Mssg}`}><motion.button
                                whileHover={{scale:1.05}}
                                whileTap={{scale:0.8}}
                                className="bg-TerGradP font-semibold px-24 sm:px-12 py-4 text-xl text-white">Submit</motion.button></a>

                            </div>

                        </div>
                        
                        <div className="text-xl w-4/5 md:w-2/3 font-semibold grid lg:text-start lg:space-y-2 space-y-2 xl:text-end">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.0205455012906!2d77.33738751205372!3d28.65910348277012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfa9b30000001%3A0xf8c8e01b5759ffb0!2sInderprastha%20Engineering%20College!5e0!3m2!1sen!2sin!4v1693133804073!5m2!1sen!2sin" className="xl:w-[24vw] lg:w-[52vw] md:w-[64vw] w-[80vw] h-[40vh]" style={{border:0,borderRadius:"5%"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            <h1 className="text-tertiary">IPEC ACM Student Chapter</h1>
                            <p className="text-primary">Inderprastha Engineering College63 Site IV,Sahibabad Industrial Area,Surya Nagar Flyover Road Sahibabad,Ghaziabad-U.PPIN Code-201010</p>
                        </div>
                        
                    </div>

                </div>
                <div>
                </div>
                {/* Footer */}
            </div>
        </div>
    )
}
