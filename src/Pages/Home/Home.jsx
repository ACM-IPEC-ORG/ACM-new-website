import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai"
import { BsInstagram, BsFacebook, BsLinkedin } from "react-icons/bs"
import { RxDotFilled } from "react-icons/rx"
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import HeroImg from "../../assets/Images/club/hero_home.webp"
import React, { useEffect, useRef, useState } from "react";
import { FeatureList, GalleryList } from "../../Components/Lists/GalleryList";
import { MarqueR, Slider, UpcomingCard } from "../../Components/Cards";
// import { Carousel, Gallerycard } from "../../Components/Cards";
import { useScroll, useTransform } from "framer-motion";
import TypewriterComponent from "typewriter-effect";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { useMediaQuery } from "@uidotdev/usehooks";
import { InstagramEmbed } from 'react-social-media-embed';
import { useAuth } from "../../Context/AuthContext";
import axios from "axios"
import { FETCH_EVENT_ROUTE } from "../../services/constant";
import Blank from "../../assets/Images/Poster/blank.jpg";


export default function Home() {
    const {open,setOpen,events,setEvents}=useAuth();
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })

    const fetchHomeEvent=async()=>{
        await axios.get(FETCH_EVENT_ROUTE)
        .then(res=>{
            setEvents(res.data.data);
        })
        .catch(err=>{
            console.log(err)
        })
    }
    const isMediumDevice = useMediaQuery(
        "only screen and (min-width : 769px) and (max-width : 992px)"
      );
      const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");
    const [img, setimage] = useState("")
    const [Name, setName] = React.useState("")
    const [Email, setEmail] = React.useState("")
    const [Mssg, setMssg] = React.useState("")

    const [clickedImg, setClickedImg] = useState(null);
    const [clickedIndex, setCurentIndex] = useState(null);
    const handleImage = (items, index) => {
        setCurentIndex(index)
        setClickedImg(items.img)
    }
    const gallery = FeatureList.map((data, index) => {
        return (
            <div key={index}>
                <h1 className="text-2xl font-bold pt-8 pb-4">{data.name}</h1>
                <div className="grid place-items-center">
                    <div className="xl:w-1/3 md:w-4/5  w-11/12 grid md:grid-cols-3 grid-cols-2 gap-8 place-items-center" onClick={() => setimage(data.img)}>
                        {data.img.map((d, imgIndex) => {
                            return (
                                <div 
                                    key={imgIndex}
                                    style={{ backgroundImage: `url(${d})`, backgroundSize: "cover", backgroundPosition: "center" }} 
                                    className="md:p-28 p-20" 
                                    onClick={() => {
                                        setOpen(true),
                                        setClickedImg(d)
                                    }} 
                                />
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    })
    function handleClick() {
        document.getElementById("more").scrollIntoView({ behavior: "smooth", block: "start" })
    }
    function handleContact() {
        document.getElementById("contact").scrollIntoView({ behavior: "smooth", block: "start" })
    }

    useEffect(()=>{
        if(events===null){
            fetchHomeEvent();
        }
    },[])

    return (
        <div>
            <div className="w-full ">
                {/* Hero */}
                <div
                    className="grid xl:grid-cols-2 lg:grid-cols-1 pb-6 xl:gap-12 lg:gap-0 h-full overflow-x-hidden">
                    <div className="md:px-0 xl:w-11/12 lg:w-4/5 md:w-11/12 w-full h-full xl:py-48 md:pl-24 pl-12 lg:py-24 md:pt-32 pt-32  px-10">
                        <h1 className="text-lg font-semibold">Welcome to</h1>
                        <h1 className="xl:text-5xl lg:text-5xl md:text-5xl text-4xl py-2 font-bold text-sky-500 tracking-wide">Association For Computing Machinery</h1>
                        <h2 className="text-lg font-semibold">IPEC | Student Chapter</h2>
                        <p className="text-xs py-8">ACM is a renowned educational and scientific society established in New York in 1947. It connects researchers, educators, and professionals, encourages discourse, and addresses challenges in computing. The IPEC ACM Student Chapter is a representative association that promotes high standards of honor and civic responsibility, cooperation between students, faculty, and administration, and an increased interest in computing. Chartered by ACM, the Chapter operates for educational and scientific purposes to improve students' learning and working environments, promote modern computing, and foster communication among those interested in computing.</p>
                        <div className="flex gap-12">

                            <motion.button whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.8 }} onClick={handleClick} className="bg-SecGradP hover:font-bold text-sm text-white px-8 py-4">Know More!</motion.button>
                            <motion.button whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.8 }} onClick={handleContact} className="bg-TerGradP hover:font-bold text-sm text-white px-8 py-4">Contact Us</motion.button>
                        </div>

                    </div>
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, ease: "easeInOut" }}>
                        <LazyLoadImage src={HeroImg} loading="lazy" className="hidden xl:block xl:ml-52" draggable="false"></LazyLoadImage>
                    </motion.div>
                </div>
                <div id="more">
                    {/* Upcoming Event */}
                    <section className="h-full">
                        <div className="sticky grid place-items-center py-16">
                            <h1 className="xl:text-4xl lg:text-5xl md:text-4xl text-3xl font-semibold text-secondary">
                                Upcoming Event
                            </h1>
                            {events!=null&&events.filter(event => new Date(event.date) >= new Date()).length > 0 ? (
                                events
                                    .filter(event => new Date(event.date) >= new Date())
                                    .map(data => (
                                        <div key={data.id} className="flex justify-center items-start w-full gap-12 py-10">
                                            <img src={data.poster} alt="Image 1" className="h-[70vh]" />
                                            <div className="w-[40vw] scroll text-left h-full flex flex-col gap-3">
                                                <h1 className="text-lg lg:text-2xl font-bold">{data.slugs}</h1>
                                                <h1 className="md:hidden lg:block text-sm lg:text-md font-bold">{data.info}</h1>
                                                <h1 className="text-sm lg:text-md"><b>Description:</b> <br></br>{data.intro}</h1>
                                                <h1 className="text-sm lg:text-md"><b>Rules:</b> {data.rules.map(li=>(
                                                    <li>{li}</li>
                                                ))}</h1>
                                                <h1 className="text-sm lg:text-md font-bold">Date: {new Date(data.date).toDateString()}</h1>
                                                <h1 className="text-sm lg:text-md"><b>Team Size: </b>{data.TS}</h1>
                                                <Link to="/Gallery"> <motion.button whileHover={{ scale: 1.05 }}
                                                    whileTap={{ scale: 0.8 }} className="bg-SecGradP hover:font-bold text-sm text-white px-4 py-2">Register!</motion.button></Link>
                                            </div>
                                        </div>
                                    ))
                            ) : (
                                // No Events Message
                                <div className="grid place-items-center py-10">
                                    <h2 className="text-2xl text-gray-600 font-medium">No events right now</h2>
                                    <p className="text-gray-500 mt-2 text-center">Stay tuned for our upcoming events!</p>
                                </div>
                            )}



                        </div>
                    </section>

                    {/* Events */}
                    {!isSmallDevice&&events!=null && <div className="text-center text-white py-4 bg-SecGradP overflow-hidden">
                        <h1 className="xl:text-4xl md:text-5xl text-3xl font-semibold pt-4">Recent Events</h1>
                        <h1 className="xl:text-sm md:text-xl text-lg md:leading-9 font-thin">What's going on in IPEC ACM?</h1>
                        <div className="py-4 md:py-12">
                            <Splide options={{
                                type:"loop",
                                rewind: true,
                                perPage: "1",
                                perMove: "1",
                                width:"100vw",
                                lazyLoad:"sequential",
                                autoplay:true,
                                pauseOnHover:true,
                                heightRatio:isMediumDevice?0.6:0.32
                            }} aria-label="React Splide Example" className="w-full">
                                {events
                                    .sort((a, b) => new Date(b.date) - new Date(a.date)) // Sort events by date (newest first)
                                    .slice(0, 5).map(data => <SplideSlide className="flex justify-center items-center w-full gap-12">
                                        <img src={data.poster??Blank} alt="Image 1" className="h-full" />
                                        <div className="w-[40vw] scroll text-left h-full flex flex-col gap-2">
                                            <h1 className="text-lg lg:text-2xl font-bold">{data.slug}</h1>
                                            <h1 className="text-sm lg:text-lg italic ">{data.tagline}</h1>
                                            <h1 className="text-sm lg:text-md ">{data.description}</h1>
                                            <h1 className="md:hidden lg:block text-sm lg:text-md ">{data.info}</h1>

                                            <h1 className="text-sm lg:text-md font-bold">Date : {data.date!=""?data.date:new Date(data.createdAt).toDateString()}</h1>
                                            <h1 className="text-sm lg:text-md">Team Size: {data.TS}</h1>
                                            <div className="flex flex-col lg:flex-row">
                                                {/* YE VALA PART BHT FUDDU ERROR DERA H */}
                                                {/* {data.instagram_post && data.instagram_post.length != 0 ? data.instagram_post.map(url => (
                                                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                                                        <InstagramEmbed url={url} width={328} className="h-full" />
                                                    </div>
                                                )) :
                                                    <h1 className="text-sm lg:text-md font-bold italic">No Post Available</h1>
                                                } */}
                                            </div>

                                        </div>
                                    </SplideSlide>)}
                                
                            </Splide>
                        </div>


                    </div>}
                </div>

                {/* Gallery */}
                <div className="text-center grid gap-5 gallery py-24">
                    <div>
                        <h1 className="xl:text-4xl lg:text-6xl text-5xl font-bold text-primary">GALLERY</h1>
                        <div className="xl:text-md lg:text-lg md:text-md text-secondary font-semibold ">
                            <TypewriterComponent
                                onInit={(typewriter) => {
                                    typewriter
                                        .typeString("What goes on in the Events?")
                                        .pause()
                                        .start();
                                }}
                            />
                        </div>
                        <h1 className="xl:px-96 lg:px-32 px-12 tracking-wide md:text-md text-xs py-4">Explore our gallery page to see some of the exciting activities we've held at IPEC ACM. From workshops and seminars to coding competitions and social events, our society is dedicated to providing a vibrant community for students interested in computing. Check out the photos to get a sense of the energy and enthusiasm that permeates our events, and join us for our next gathering to experience it for yourself!</h1>
                    </div>
                    {gallery}
                    <div>
                        <Link to="/Gallery"> <motion.button whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.8 }} className="bg-SecGradP hover:font-bold text-sm text-white px-8 py-4">Know More!</motion.button></Link>
                    </div>

                    <Slider open={open} img={img} clickedImg={clickedImg} />
                </div>
                {/* Contact */}
                <div id="contact" className="bg-black py-16 grid place-items-center">
                    <h1 className="text-gray-500 font-bold xl:text-8xl lg:text-8xl text-6xl pb-12">CONTACT</h1>

                    <div className="grid xl:grid-cols-2 lg:grid-cols-1 xl:px-72 lg:px-24 place-items-center xl:gap-10 lg:gap-32 gap-16">
                        <div className="space-y-5 md:px-0 px-5">
                            <h1 className="text-white text-xl font-semibold flex gap-3">Get in <p className="text-primary font-bold">touch</p> with us</h1>
                            <form className="space-y-2 text-white">
                                <input placeholder="Name" className="py-4 w-full px-5 bg-transparent border border-secondary md:text-sm outline-0" value={Name} onChange={(e) => setName(e.target.value)} />
                                <input placeholder="Email" className="py-4 w-full px-5 bg-transparent border border-secondary outline-0 md:text-sm" value={Email} onChange={(e) => setEmail(e.target.value)} />
                                <textarea placeholder="Message" className="py-4 w-full bg-transparent px-5 h-44 border border-tertiary outline-0 md:text-sm" value={Mssg} onChange={(e) => setMssg(e.target.value)} />
                            </form>
                            <div className="grid md:grid-flow-col grid-cols-1 gap-1 text-white">
                                <div className="grid place-items-start">
                                    <h1 className="lg:text-md text-md font-semibold tracking-widest">Follow Us.</h1>
                                    <div className="flex gap-5 text-primary text-lg md:py-2">
                                        <a target="_blank_" href="https://www.instagram.com/ipec_acm_chapter/" className="hover:text-tertiary"><BsInstagram /></a>
                                        <a target="_blank_" href="https://www.facebook.com/IpecACM/" className="hover:text-tertiary"><BsFacebook /></a>
                                        <a target="_blank_" href="https://www.linkedin.com/company/ipec-acm-chapter/" className="hover:text-tertiary"><BsLinkedin /></a>
                                    </div>
                                </div>
                                <a href={`mailto:ipecacm@gmail.com?subject=${Email}&body=${"I am " + Name + ", \n" + Mssg}`}><motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.8 }}
                                    className="bg-TerGradP font-semibold px-10 sm:px-10 py-2 text-md text-white">Submit</motion.button></a>

                            </div>

                        </div>

                        <div className="text-sm w-4/5 md:w-2/3 font-semibold grid lg:text-start lg:space-y-2 space-y-2 xl:text-end">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.0205455012906!2d77.33738751205372!3d28.65910348277012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfa9b30000001%3A0xf8c8e01b5759ffb0!2sInderprastha%20Engineering%20College!5e0!3m2!1sen!2sin!4v1693133804073!5m2!1sen!2sin" className="xl:w-[24vw] lg:w-[52vw] md:w-[64vw] w-[80vw] h-[40vh]" style={{ border: 0, borderRadius: "5%" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            <h1 className="text-sm text-tertiary">IPEC ACM Student Chapter</h1>
                            <p className="text-sm text-primary">Inderprastha Engineering College63 Site IV,Sahibabad Industrial Area,Surya Nagar Flyover Road Sahibabad,Ghaziabad-U.PPIN Code-201010</p>
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
