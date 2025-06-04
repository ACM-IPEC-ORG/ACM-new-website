import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaEnvelope, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Dialog, DialogBody, Carousel } from "@material-tailwind/react";
import { useAuth } from "../Context/AuthContext";
import Blank from "../assets/Images/Poster/blank.jpg";
import ImgSource from './ImgSource';


const getPlatformIcon = (url) => {
  if (url.includes("@")) return <FaEnvelope />;
  if (url.includes("linkedin.com")) return <FaLinkedin />;
  if (url.includes("twitter.com")) return <FaTwitter />;
  if (url.includes("instagram.com")) return <FaInstagram />;
  return null;
};


export const HeadD = ({ fullName, department, img, social_links }) => {
  const [isHovered, setIsHovered] = useState(0);
  const socialLinks = social_links || [];

  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      onHoverStart={() => setIsHovered(1)}
      onHoverEnd={() => setIsHovered(0)}
      className="grid w-42 place-items-center p-2">
      <div className="bg-gray-500 overflow-hidden p-16 border-48 border-sky-400 rounded-full shadow-2xl relative">
        <LazyLoadImage
          src={img}
          alt={fullName || "Profile Image"}
          wrapperClassName="absolute inset-0 w-full h-full object-cover"
          placeholderSrc="image holder"
        />
      </div>
      <div className="py-2 text-center">
        <h1 className="text-md font-semibold">{fullName}</h1>
        <h1 className="text-xs text-gray-400">{department}</h1>
      </div>
      <div
        className="grid grid-flow-col text-secondary justify-center gap-4 py-2">
        {socialLinks.map((link, index) => {
          const icon = getPlatformIcon(link);
          return (
            icon && (
              <a
                key={index}
                href={link.includes('@') ? `mailto:${link}` : link}
                className={`${isHovered ? "visible" : "invisible"}`}
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

export const UpcomingCard = ({ img }) => {
  return (
    <LazyLoadImage
      src={img}
      alt="Upcoming Event Image"
      effect="opacity"
      wrapperClassName="md:sticky w-full aspect-square top-[10vh] rounded-3xl"
    />
  )
}

export const Founder = ({ fullName, img, social_links }) => {
  const [isHovered, setIsHovered] = useState(0)
  const socialLinks = social_links || [];

  return (
    <motion.div
      whileHover={{ scale: 1.1 }} onHoverStart={() => setIsHovered(1)} onHoverEnd={() => setIsHovered(0)}
      className="grid w-42 place-items-center p-2">
      <div className="bg-gray-500 overflow-hidden p-20 border-48 border-sky-400 rounded-full shadow-2xl relative">
        <LazyLoadImage
          effect="opacity"
          src={img}
          alt={fullName || "Founder Image"}
          wrapperClassName="absolute inset-0 w-full h-full object-cover"
          placeholderSrc="image"
        />
      </div>
      <div className="py-2 text-center">
        <h1 className="text-lg font-semibold">{fullName}</h1>
      </div>
      <div
        className="grid grid-flow-col text-secondary justify-center gap-4 py-2">
        {socialLinks.map((link, index) => {
          const icon = getPlatformIcon(link);
          return (
            icon && (
              <a
                key={index}
                href={link.includes('@') ? `mailto:${link}` : link}
                className={`${isHovered ? "visible text-lg" : "invisible"}`}
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
export const CMCard = ({ fullName, department, img, social_links }) => {
  const [isHovered, setIsHovered] = useState(0)
  const socialLinks = social_links || [];
  return (
    <div className="">
      <motion.div
        whileHover={{ scale: 1.1 }} onHoverStart={() => setIsHovered(1)} onHoverEnd={() => setIsHovered(0)}
        className="grid w-42 place-items-center p-2">
        <div className="bg-gray-500 overflow-hidden p-14 rounded-full shadow-2xl relative">
          <LazyLoadImage
            effect="opacity"
            src={img}
            alt={fullName || "Core Member Image"}
            wrapperClassName="absolute inset-0 w-full h-full object-cover"
            placeholderSrc="Images"
          />
        </div>
        <div className="py-2 text-center grid grid-rows-1 place-items-center">
          <div>
            <h1 className="text-md font-semibold">{fullName}</h1>
            <h1 className="text-md text-gray-400">{department}</h1>
          </div>
          <div className="flex gap-1">
            {socialLinks.map((link, index) => {
              const icon = getPlatformIcon(link);
              return (
                icon && (
                  <a
                    key={index}
                    href={link.includes('@') ? `mailto:${link}` : link}
                    className={`${isHovered ? "visible" : "invisible"} text-lg hover:text-primary`}
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
export const SyllCard = ({ Task, Name, sig }) => {
  return (
    <div className={'text-center w-3/4 px-8 py-12 text-white ' + sig}>
      <h1 className="text-4xl font-semibold">{Task}</h1>
      <h2 className="text-lg">{Name}</h2>
    </div>
  )
}

export const EveCard = ({ slug, poster, title }) => {
  return (
    <motion.div
      key={slug.toLowerCase()}
      className="flex flex-col h-full rounded-lg overflow-hidden shadow-lg bg-white w-[350px]"
    >
      {/* 1. Full Poster Image (without cropping) */}
      <img
        src={poster || Blank}
        alt={title || "Event Poster"}
        // object-contain ensures the entire image is visible, potentially with letterboxing/pillarboxing
        // aspect-square and h-72 define the container size for the image
        // w-full ensures the image fills the width of its container
        // bg-white ensures any empty space (if object-contain leads to it) is white
        className="object-contain aspect-square h-72 w-full object-top bg-white"
      />

      {/* 2. Below Image: Event Name (Title) and Details Button */}
      <div className="p-4 flex flex-col flex-grow justify-between">
        {/* Event Name (Title) */}
        <h1 className="text-xl font-semibold mb-4 text-gray-800">{title}</h1>

        {/* Details Button */}
        <Link to={`/Events/${slug.toLowerCase().trim()}`} className="mt-auto">
          <button className="w-full bg-SecGradP text-white px-4 py-2 rounded hover:opacity-80">
            Details
          </button>
        </Link>
      </div>
    </motion.div>
  );
};

export const Gallerycard = ({ name, img }) => {
  return (
    <div>
      <h1>{name}</h1>
      <div className="grid grid-cols-3 gap-5">
        {img.map((data, index) => {
          return (
            <LazyLoadImage
              key={index}
              src={data}
              alt={`${name} gallery image ${index + 1}`}
              effect="opacity"
            />
          )
        })}
      </div>
    </div>
  )
}


import { ImCross } from "react-icons/im";

export const Slider = ({ open, setOpen, clickedImg, img }) => {
  const handleOpen = (event) => {
    if (event.target === event.currentTarget) {
      setOpen(false)
    }
  };

  const images = img ? [clickedImg, ...img.filter((image) => image !== clickedImg)] : [];

  return (
    <Dialog size="xl" open={open} handler={handleOpen}>
      <DialogBody>
        <div className="relative">
          <Carousel loop className="rounded-xl aspect-video w-full h-full">
            {images.length > 0 ? (
              images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  className="h-full w-full object-contain"
                />
              ))
            ) : (
              <div className="h-full w-full flex items-center justify-center bg-gray-200 text-gray-500">
                No images to display
              </div>
            )}
          </Carousel>
          <button
            onClick={() => setOpen(false)}
            className="absolute top-2 right-2 p-2 bg-black bg-opacity-50 text-white rounded-full z-10 hover:bg-opacity-75"
            aria-label="Close"
          >
            <ImCross />
          </button>
        </div>
      </DialogBody>
    </Dialog>
  )
}

import styled, { keyframes } from 'styled-components';


const featurelist = [
  { img: "https://example.com/image1.jpg", slugs: "event-one-slug" },
  { img: "https://example.com/image2.jpg", slugs: "event-two-slug" },
  { img: "https://example.com/image3.jpg", slugs: "event-three-slug" },
];

export const MarqueR = () => {
  const images = featurelist;

  return (
    <div className="grid grid-flow-col">
      <MarqueeContainer>
        {images.map((data, index) => (
          <ImageGroup key={index}>
            <Link to={`/Events/${data.slugs}`}>
              <ImgSource src={data.img} alt={`Event: ${data.slugs}`} className="h-full aspect-auto" />
            </Link>
          </ImageGroup>
        ))}
        {images.map((data, index) => (
          <ImageGroup key={`duplicate-${index}`}>
            <Link to={`/Events/${data.slugs}`}>
              <ImgSource src={data.img} alt={`Event: ${data.slugs}`} className="h-full aspect-auto" />
            </Link>
          </ImageGroup>
        ))}
      </MarqueeContainer>
    </div>
  );
};
const scrollX = keyframes`
  from {
    transform: translateX(0%);
  }
  to {
    transform: translateX(-100%);
  }
`;

const MarqueeContainer = styled.div`
  overflow: hidden;
  white-space: nowrap;
  width: 100%;
  display: flex;
  animation: ${scrollX} 15s linear infinite;
  & > *:not(:last-child) {
    margin-right: 20px;
  }
`;

const ImageGroup = styled.div`
  display: grid;
  place-items: center;
  flex-shrink: 0;
  width: clamp(10rem, 1rem + 40vmin, 30rem);
  padding: calc(clamp(10rem, 1rem + 30vmin, 30rem) / 10);
`;