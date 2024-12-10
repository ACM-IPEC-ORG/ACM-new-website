import { useRef, useState } from "react";

import { AnimatePresence, motion, useInView } from "framer-motion"
import { FaEnvelope, FaInstagram, FaLinkedin, FaMailBulk, FaTwitter } from "react-icons/fa"
import { LazyLoadImage } from "react-lazy-load-image-component";
// import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline';

export const HeadD = function (props) {
  const [a, seta] = useState(0)
  const getPlatformIcon = (url) => {
    if (url.includes("@")) return <FaEnvelope />;
    if (url.includes("linkedin.com")) return <FaLinkedin />;
    if (url.includes("twitter.com")) return <FaTwitter />;
    if (url.includes("instagram.com")) return <FaInstagram />;
    return null; // Return null for unsupported links
  };
  const socialLinks = props.social_links || [];
  return (
    <motion.div
      whileHover={{ scale: 1.1 }} onHoverStart={() => seta(1)} onHoverEnd={() => seta(0)}
      className="grid grid-flow-row w-42 place-items-center p-2">
      <div className="bg-gray-500 overflow-hidden p-16 border border-48 border-sky-400 rounded-full shadow-2xl relative">
        <LazyLoadImage

          src={props.img}
          alt="Your Alt Text"
          wrapperClassName="absolute inset-0 w-full h-full object-cover"
          placeholderSrc="image holder"
        />
      </div>
      <div className="py-2 text-center">
        <h1 className="text-md font-semibold">{props.fullName}</h1>
        <h1 className="text-xs text-gray-400">{props.department}</h1>
      </div>
      <div
        className="grid grid-flow-col text-secondary justify-center gap-4 py-2"
        style={{ opacity: props.opacity || 1 }}
      >
        {socialLinks.map((link, index) => {
          const icon = getPlatformIcon(link);
          return (
            icon && (
              <a
                key={index}
                href={`mailto:`+link}
                className={`${a?"visible":"invisible"}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {icon}
              </a>
            )
          );
        })}
      </div>
    </motion.div>
  )
}
export const UpcomingCard = function (props) {
  return (
    <LazyLoadImage
      src={props.img}
      alt="Your Alt Text"
      effect="opacity" // Add blur effect or remove this line if you don't want it
      wrapperClassName="md:sticky w-full aspect-square top-[10vh] rounded-3xl"
      style={{
        backgroundPosition: "center",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        width: '100%',
        height: '100%',
      }}
    />
  )
}

export const Founder = function (props) {
  const [a, seta] = useState(0)
  const getPlatformIcon = (url) => {
    if (url.includes("mailto:")) return <FaEnvelope />;
    if (url.includes("linkedin.com")) return <FaLinkedin />;
    if (url.includes("twitter.com")) return <FaTwitter />;
    if (url.includes("instagram.com")) return <FaInstagram />;
    return null; // Return null for unsupported links
  };
  const socialLinks = props.social_links || [];

  return (
    <motion.div
      whileHover={{ scale: 1.1 }} onHoverStart={() => seta(1)} onHoverEnd={() => seta(0)}
      className="grid grid-flow-row w-42 place-items-center p-2">
      <div className="bg-gray-500 overflow-hidden p-20 border border-48 border-sky-400 rounded-full shadow-2xl relative">
        <LazyLoadImage
          effect="opacity" // Choose the loading effect (opacity for no blur)
          src={props.img}
          alt="Your Alt Text"
          wrapperClassName="absolute inset-0 w-full h-full object-cover"
          placeholderSrc="image"
        />
      </div>
      <div className="py-2 text-center">
        <h1 className="text-lg font-semibold">{props.fullName}</h1>
      </div>
      <div
        className="grid grid-flow-col text-secondary justify-center gap-4 py-2"
        style={{ opacity: props.opacity || 1 }}
      >
        {socialLinks.map((link, index) => {
          const icon = getPlatformIcon(link);
          return (
            icon && (
              <a
              
                key={index}
                href={link}
                className={`${a?"visible text-lg":"invisible"}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {icon}
              </a>
            )
          );
        })}
      </div>
    </motion.div>
  )
}
export const CMCard = function (props) {
  const [a, seta] = useState(0)
  const getPlatformIcon = (url) => {
    if (url.includes("@")) return <FaEnvelope />;
    if (url.includes("linkedin.com")) return <FaLinkedin />;
    if (url.includes("twitter.com")) return <FaTwitter />;
    if (url.includes("instagram.com")) return <FaInstagram />;
    return null; // Return null for unsupported links
  };
  const socialLinks = props.social_links || [];
  return (
    <div className="">
      <motion.div
        whileHover={{ scale: 1.1 }} onHoverStart={() => seta(1)} onHoverEnd={() => seta(0)}
        className="grid grid-flow-row w-42 place-items-center p-2">
        <div className="bg-gray-500 overflow-hidden p-14 rounded-full shadow-2xl relative">
          <LazyLoadImage
            effect="opacity" // Choose the loading effect (opacity for no blur)
            src={props.img}
            alt="Your Alt Text"
            wrapperClassName="absolute inset-0 w-full h-full object-cover"
            placeholderSrc="Images"
          />
        </div>
        <div className="py-2 text-center grid grid-rows-1 place-items-center">
          <div>
            <h1 className="text-md font-semibold">{props.fullName}</h1>
            <h1 className="text-md text-gray-400">{props.department}</h1>
          </div>
          <div className="flex gap-1">
          {socialLinks.map((link, index) => {
            const icon = getPlatformIcon(link);
            return (
            icon && (
              <a
              
              key={index}
                href={link}
                className={`${a?"visible":"invisible"} text-lg hover:text-primary`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {icon}
              </a>
            )
          );
        })}
        </div>
        </div>
      </motion.div>
    </div>

  )
}
export const SyllCard = function (props) {
  return (
    <div className={'text-center w-3/4 px-8 py-12 text-white ' + props.sig}>
      <h1 className="text-4xl font-semibold">{props.Task}</h1>
      <h2 className="text-lg">{props.Name}</h2>
    </div>
  )
}
import Blank from "../assets/Images/Poster/blank.jpg";
export const EveCard = function (props) {
  return (
    <motion.div
    key={props.slug.toLowerCase()}
      className="relative flex flex-col h-full cursor-pointer rounded-lg overflow-hidden shadow-lg bg-white w-[350px] hover:shadow-xl group"
      whileHover={{ scale: 1.02 }}
      transition={{ ease: "easeIn", duration: 0.2 }}
    >
      {/* Image Container with Overlay */}
      <img src={props.poster!=""?props.poster:Blank} className="object-cover aspect-square h-72 object-top" />
      {/* Dark overlay - made lighter for better contrast */}
      <div className="absolute inset-0 bg-black/70 h-72 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Info text overlay */}
      <div className="absolute inset-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <p className="text-md italic text-white font-semibold p-4">
          {props?.tagline}
        </p>
        <p className="text-sm text-white p-4 py-0">
          {props?.description?.slice(0,230)+' . . .'??props.info}
        </p>
      </div>

      {/* Title and Button Container */}
      <div className="p-4 flex flex-col">
        <h1 className="text-xl font-semibold mb-4 text-gray-800">{props.title}</h1>
        <Link to={`/Events/${props.slug.toLowerCase().trim()}`} >
          <button disabled className="w-full bg-SecGradP opacity-50 text-white px-4 py-2 rounded">
            Details
          </button>
        </Link>
      </div>
    </motion.div>
  )
}

// event Carousel Card
// export const Carousel = function ({ cards }) {
//   const [currentCardIndex, setCurrentCardIndex] = useState(0);

//   const handlePrev = () => {
//     setCurrentCardIndex((prevIndex) => (prevIndex === 0 ? cards.length - 1 : prevIndex - 1));
//   };

//   const handleNext = () => {
//     setCurrentCardIndex((prevIndex) => (prevIndex === cards.length - 1 ? 0 : prevIndex + 1));
//   };

//   return (
//     <div className="relative flex items-center justify-center h-screen">
//       <div className="w-96">
//         <div className="relative overflow-hidden bg-gray-100">
//           {cards.map((card, index) => (
//             <div
//               key={index}
//               className={`absolute inset-0 transition-opacity duration-500 ${index === currentCardIndex ? 'opacity-100' : 'opacity-0'
//                 }`}
//             >
//               <img src={card.img} alt={card.head} className="w-full h-full object-contain" />
//             </div>
//           ))}

//           <button
//             className="absolute top-1/2 left-0 transform -translate-y-1/2 p-2 bg-gray-800 rounded-full text-white"
//             onClick={handlePrev}
//           >
//             Previous
//           </button>
//           <button
//             className="absolute top-1/2 right-0 transform -translate-y-1/2 p-2 bg-gray-800 rounded-full text-white"
//             onClick={handleNext}
//           >
//             Next
//           </button>
//         </div>

//         <div className="flex justify-center mt-4">
//           {cards.map((_, index) => (
//             <button
//               key={index}
//               className={`w-4 h-4 mx-2 rounded-full ${index === currentCardIndex ? 'bg-gray-800' : 'bg-gray-400'
//                 }`}
//               onClick={() => setCurrentCardIndex(index)}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };
export const Gallerycard = function (props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <div className="grid grid-cols-3 gap-5">
        {props.img.map((data) => {
          return (
            <LazyLoadImage
              src={data}
              alt="Your Alt Text"
              effect="opacity" // Add blur effect or remove this line if you don't want it

            />
          )
        })}
      </div>
    </div>
  )
}
// export const Carasouel = function (props) {
//   return (
//     <div className="relative">
//       <motion.div
//         className="w-[60vw] h-96 overflow-hidden absolute top-0"
//         initial={{ scale: 0, rotation: -180 }}
//         animate={{ rotation: 0, scale: 1 }}
//         transition={{ type: "spring", stiffness: 260, damping: 20 }}
//       >
//         <img src={props.img} className="h-full" />
//       </motion.div>
//     </div>

//   )
// }
// Gallery

import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { ImCross } from "react-icons/im";
import {
  Dialog,
  DialogBody,
  Carousel
} from "@material-tailwind/react";
 
export const Slider = function (props) {
  const {open,setOpen}=useAuth();
  const handleOpen = (event) => {
    if (event.target === event.currentTarget) {
      setOpen(false) // Close the dialog
    }
  };
  let images=null;
  if (props.img){
    images= [props.clickedImg, ...props.img.filter((image) => image !== props.clickedImg)];
  }
  return (
    <Dialog size="xl" open={open} handler={handleOpen}>
      <DialogBody>
        <Carousel loop onClick={(e)=>e.stopPropagation()} className="rounded-xl aspect-video w-fit h-fit">
          {images&&images.map(img=>{
            return (
              <img
                src={img}
                alt="image 1"
                className="h-full w-full object-cover"
              />
            )
          })}
          
        </Carousel>
      </DialogBody>
    </Dialog>
  )
}
// Marquee
import React from 'react';
import styled, { keyframes, css } from 'styled-components';
import { Link } from 'react-router-dom';
import ImgSource from './ImgSource';
import { useAuth } from "../Context/AuthContext";

export const MarqueR = () => {
  const images = featurelist;

  return (
    <div className="grid grid-flow-col">
      <MarqueeContainer>
        {images.map((data, index) => (
          <ImageGroup key={index}>
            <Link to={`/Events/${data.slugs}`}>
              <ImgSource src={data.img} className="h-full aspect-auto" />
            </Link>
          </ImageGroup>
        ))}
      </MarqueeContainer>

    </div>


  );
};
const scrollX = keyframes`
0% {
  transform: translateX(100%);
}
100% {
  transform: translateX(-100%);
}
`;
const MarqueeContainer = styled.div`
  overflow: hidden;
  white-space: nowrap;
  width: 100%;
  display: flex;
  animation: ${scrollX} 15s linear infinite;
`;



const ImageGroup = styled.div`
  display: grid;
  place-items: center;
  width: clamp(10rem, 1rem + 40vmin, 30rem);
  padding: calc(clamp(10rem, 1rem + 30vmin, 30rem) / 10);
`;

