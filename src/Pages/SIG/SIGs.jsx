import { Link } from "react-router-dom";
import "./Sig.css";
import { motion } from "framer-motion";
import Web from "../../assets/Images/sigs/SIG_WEB.png";
import Tech from "../../assets/Images/sigs/SIG_TECH.png";
import Graph from "../../assets/Images/sigs/SIG_GRAPH.png";
import Python from "../../assets/Images/sigs/SIG_PYTHON.png";
import Foundation from "../../assets/Images/sigs/SIG_FOUNDATION.png";
import Java from "../../assets/Images/sigs/SIG_JAVA.png";
import sig from "../../assets/Images/club/SIG.png";
import { Avatar, Card, CardBody, CardHeader, Typography } from "@material-tailwind/react";

export default function SIGs() {
  const sigs = [
    {
      imgSrc: Tech,
      name: "SIG TECH",
      description:
        "The SIG Tech is a special interest group under the ACM IPEC, dedicated to advancing technology through collaboration...",
      link: "https://drive.google.com/file/d/1Yr2djaNA0t6aYE-gS6n4RDzORTfrV4sy/view",
    },
    {
      imgSrc: Web,
      name: "SIG WEB",
      description:
        "The SIG Web is a special interest group under the ACM IPEC, dedicated to advancing web technology through collaboration...",
      link: "https://drive.google.com/file/d/1YsPdz_YXEnBMqKoX2q7EDjTxHTZY1CDM/view",
    },
    {
      imgSrc: Graph,
      name: "SIG GRAPH",
      description:
        "The SIG Graph is a special interest group under the ACM IPEC, dedicated to advancing graphics technology through collaboration...",
      link: "https://drive.google.com/file/d/1Z1k-T_vujJR5EE7yx8V_0clop3Ha6qrf/view",
    },
    {
      imgSrc: Java,
      name: "SIG JAVA",
      description:
        "The SIG Java is a special interest group under the ACM IPEC, dedicated to advancing Java technology through collaboration...",
      link: "https://drive.google.com/file/d/1YsBpYMrlrQ1c-aKZjD12wxhXh_kXNLyD/view",
    },
    {
      imgSrc: Python,
      name: "SIG PYTHON",
      description:
        "The SIG Python is a special interest group under the ACM IPEC, dedicated to advancing Python technology through collaboration...",
      link: "https://drive.google.com/file/d/1YvslBFl49XhK99z_TZgjhCzeITlqcUO_/view",
    },
    {
      imgSrc: Foundation,
      name: "SIG FOUNDATION (C++)",
      description:
        "The SIG Foundation (C++) is a special interest group under the ACM IPEC, dedicated to advancing C++ technology through collaboration...",
      link: "https://drive.google.com/file/d/1Z5S3pmKr3IwygeVlSinwSgi1r3NHH95N/view",
    },
  ];

  return (
    <div className="grid gap-12 min-h-screen place-items-center px-4 md:px-12 lg:px-24 xl:px-44 py-16 lg:py-32">
      {/* Intro Section */}
      <div className="grid place-items-center text-center">
        <h1 className="font-bold text-lg md:text-xl lg:text-2xl">Choose your Starting Point</h1>
        <p className="text-sm md:text-base lg:text-lg">
          Explore our Special Interest Groups (SIGs) and choose the one that aligns with your interests.
        </p>
      </div>

      {/* SIG Cards Section */}
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 place-items-center">
        {sigs.map((item, index) => (
          <a key={index} target="_blank" rel="noopener noreferrer" href={item.link}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="grid gap-2 p-4 rounded-xl max-w-[200px] sm:max-w-[180px] lg:max-w-[240px]"
            >
              <img
                src={item.imgSrc}
                loading="lazy"
                className="rounded-2xl w-full object-cover"
                alt={item.name}
              />
              <h2 className="font-bold text-sm md:text-md lg:text-lg">{item.name}</h2>
              <p className="text-xs lg:text-sm">{item.description}</p>
            </motion.div>
          </a>
        ))}
      </div>
    </div>
  );
}
