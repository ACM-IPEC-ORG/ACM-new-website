import { useRef, useState } from "react";

import { AnimatePresence, motion, useInView } from "framer-motion"
import { FaEnvelope, FaInstagram, FaLinkedin, FaMailBulk, FaTwitter } from "react-icons/fa"
import { LazyLoadImage } from "react-lazy-load-image-component";
// import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline';

export const HeadD = function (props) {
  const [a, seta] = useState(0)

  return (
    <motion.div
      whileHover={{ scale: 1.1 }} onHoverStart={() => seta(1)} onHoverEnd={() => seta(0)}
      className="grid grid-flow-row w-42 place-items-center p-2">
      <div className="bg-gray-500 overflow-hidden p-24 border border-48 border-sky-400 rounded-full shadow-2xl relative">
        <LazyLoadImage

          src={props.img}
          alt="Your Alt Text"
          wrapperClassName="absolute inset-0 w-full h-full object-cover"
          placeholderSrc="image holder"
        />
      </div>
      <div className="py-2 text-center">
        <h1 className="text-lg font-semibold">{props.name}</h1>
        <h1 className="text-md text-gray-400">{props.title}</h1>
      </div>
      <div
        className="grid grid-flow-col text-secondary justify-center gap-4 py-2" style={{ opacity: a }}>
        {props.email && <a href={`mailto:${props.email}`} target="_blank_"><FaEnvelope /></a>}
        {props.linkedin && <a href={props.linkedin} target="_blank_"><FaLinkedin /></a>}
        {props.twitter && <a href={props.twitter} target="_blank_"><FaTwitter /></a>}
        {props.instagram && <a href={props.instagram} target="_blank_"><FaInstagram /></a>}
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
        <h1 className="text-lg font-semibold">{props.name}</h1>
        <h1 className="text-md text-gray-400">{props.title}</h1>
      </div>
      <div
        className="grid grid-flow-col text-secondary justify-center gap-4 py-2" style={{ opacity: a }}>
        {props.email && <a href={`mailto:${props.email}`} target="_blank_"><FaEnvelope /></a>}
        {props.linkedin && <a href={props.linkedin} target="_blank_"><FaLinkedin /></a>}
        {props.twitter && <a href={props.twitter} target="_blank_"><FaTwitter /></a>}
        {props.instagram && <a href={props.instagram} target="_blank_"><FaInstagram /></a>}
      </div>
    </motion.div>
  )
}
export const CMCard = function (props) {
  const [a, seta] = useState(0)
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
        <div className="py-2 text-center grid grid-rows-1 justify-center">
          <div>
            <h1 className="text-md font-semibold">{props.name}</h1>
            <h1 className="text-md text-gray-400">{props.title}</h1>
          </div>
          <div
            className="grid grid-flow-col text-secondary justify-center gap-4 py-2" style={{ opacity: a }}>
            {props.linkedin && <a href={props.linkedin} target="_blank_"><FaLinkedin /></a>}
            {props.twitter && <a href={props.twitter} target="_blank_"><FaTwitter /></a>}
            {props.instagram && <a href={props.instagram} target="_blank_"><FaInstagram /></a>}
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
export const EveCard = function (props) {
  return (
    <motion.div 
      className="relative flex flex-col h-full rounded-lg overflow-hidden shadow-lg bg-white w-[350px] hover:shadow-xl"
      whileHover={{ scale: 1.02 }} 
      transition={{ ease: "easeIn", duration: 0.2 }}
    >
      {/* Image Container with Overlay */}
      <div 
        className="w-full relative group"
        style={{
          backgroundImage: `url(${props.img})`,
          backgroundSize: "100% 100%",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "250px",
          width: "100%",
          backgroundColor: "#f3f4f6"
        }}
      >
        {/* Dark overlay - made lighter for better contrast */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Info text overlay */}
        <div className="absolute inset-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <p className="text-sm text-white p-4">
            {props.info}
          </p>
        </div>
      </div>
      
      {/* Title and Button Container */}
      <div className="p-4 flex flex-col">
        <h1 className="text-xl font-semibold mb-4 text-gray-800">{props.head}</h1>
        <Link to={`/Events/${props.slugs}`}>
          <button className="w-full bg-SecGradP text-white hover:font-semibold px-4 py-2 rounded">
            Details
          </button>
        </Link>
      </div>
    </motion.div>
  )
}

// event Carousel Card
export const Carousel = function ({ cards }) {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const handlePrev = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex === 0 ? cards.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex === cards.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="relative flex items-center justify-center h-screen">
      <div className="w-96">
        <div className="relative overflow-hidden bg-gray-100">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-500 ${index === currentCardIndex ? 'opacity-100' : 'opacity-0'
                }`}
            >
              <img src={card.img} alt={card.head} className="w-full h-full object-contain" />
            </div>
          ))}

          <button
            className="absolute top-1/2 left-0 transform -translate-y-1/2 p-2 bg-gray-800 rounded-full text-white"
            onClick={handlePrev}
          >
            Previous
          </button>
          <button
            className="absolute top-1/2 right-0 transform -translate-y-1/2 p-2 bg-gray-800 rounded-full text-white"
            onClick={handleNext}
          >
            Next
          </button>
        </div>

        <div className="flex justify-center mt-4">
          {cards.map((_, index) => (
            <button
              key={index}
              className={`w-4 h-4 mx-2 rounded-full ${index === currentCardIndex ? 'bg-gray-800' : 'bg-gray-400'
                }`}
              onClick={() => setCurrentCardIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
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
export const Carasouel = function (props) {
  return (
    <div className="relative">
      <motion.div
        className="w-[60vw] h-96 overflow-hidden absolute top-0"
        initial={{ scale: 0, rotation: -180 }}
        animate={{ rotation: 0, scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        <img src={props.img} className="h-full" />
      </motion.div>
    </div>

  )
}
// Gallery

import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { ImCross } from "react-icons/im";
export const Slider = function (props) {
  let clickedImg = props.clickedImg
  let [count, setCount] = useState(1);
  let [tuple, settuple] = useState([null, count])
  if (tuple[1] != count) {
    settuple([tuple[1], count]);
  }
  let prev = tuple[0]
  let direction = count > prev ? "increasing" : "decreasing"
  let img = props.img
  return (
    <div className="z-20 fixed top-0 bottom-0 backdrop-blur-xl w-full h-full ">
      <button onClick={() => props.sethidden(false)} className="absolute right-5 top-5 text-red-800 text-4xl font-bold"><ImCross /></button>

      <div className="flex justify-center py-32">
        <div className="flex items-center justify-center">
          <button onClick={() => setCount(count - 1)}><AiOutlineLeft size={30} className="text-black" /></button>
          <motion.div className={` w-[72vw] h-[72vh] flex justify-center items-center`}
            style={{
              backgroundImage: `url(${img[Math.abs(count) % img.length]})`,
              backgroundPosition: "center",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat"
            }}
            key={count}
            initial={{ x: direction === 'increasing' ? 100 : -100 }}
            animate={{ x: 0 }}

          ></motion.div>
          {/* hello */}
          <button onClick={() => setCount(count + 1)}><AiOutlineRight size={30} className="text-black" /></button>

        </div>
      </div>
    </div>
  )
}
// Marquee
import React from 'react';
import styled, { keyframes, css } from 'styled-components';
import { Link } from 'react-router-dom';
import { featurelist } from './Lists/EventList';
import ImgSource from './ImgSource';

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

