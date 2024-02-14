import { Link } from "react-router-dom";
import "./Sig.css";
import { motion } from "framer-motion";
import Web from "../../assets/Images/sigs/SIG_WEB.png";
import Tech from "../../assets/Images/sigs/SIG_TECH.png";
import Graph from "../../assets/Images/sigs/SIG_GRAPH.png";
import Python from "../../assets/Images/sigs/SIG_PYTHON.png";
import Foundation from "../../assets/Images/sigs/SIG_FOUNDATION.png";
import Java from "../../assets/Images/sigs/SIG_FOUNDATION.png";
import sig from "../../assets/Images/club/SIG.png";

export default function SIGs() {
  const sigs = [
    {
      imgSrc: Tech,
      name: "SIG TECH",
      description:
        "The SIG Tech is a special interest group under the ACM IPEC, dedicated to advancing technology through collaboration...",
      link: "/SIG/Tech",
    },
    {
      imgSrc: Web,
      name: "SIG WEB",
      description:
        "The SIG Web is a special interest group under the ACM IPEC, dedicated to advancing web technology through collaboration...",
      link: "/SIG/Web",
    },
    {
      imgSrc: Graph,
      name: "SIG GRAPH",
      description:
        "The SIG Graph is a special interest group under the ACM IPEC, dedicated to advancing graphics technology through collaboration...",
      link: "/SIG/Graph",
    },
    {
      imgSrc: Java,
      name: "SIG JAVA",
      description:
        "The SIG Java is a special interest group under the ACM IPEC, dedicated to advancing Java technology through collaboration...",
      link: "/SIG/Java",
    },
    {
      imgSrc: Python,
      name: "SIG PYTHON",
      description:
        "The SIG Python is a special interest group under the ACM IPEC, dedicated to advancing Python technology through collaboration...",
      link: "/SIG/Python",
    },
    {
      imgSrc: Foundation,
      name: "SIG FOUNDATION (C++)",
      description:
        "The SIG Foundation (C++) is a special interest group under the ACM IPEC, dedicated to advancing C++ technology through collaboration...",
      link: "/SIG/Foundation",
    },
  ];

  return (
    <div className="grid gap-12 place-items-center px-24 md:px-46 xl:px-64 py-44">
      <div className="grid place-items-center">
        <h1 className="font-bold text-2xl">Choose your Starting point.</h1>
        <p className="text-lg">Explore our Special Interest Groups (SIGs) and choose the one that aligns with your interests.</p>
      </div>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-3 xl:grid-cols-6 justify-center">
        {sigs.map((item, index) => (
          <Link to={item.link}><motion.div
            
            key={index}
            whileHover={{ scale: 1.05 }}
            className="grid gap-2  p-2 rounded-xl"
          >
            <img src={item.imgSrc} className="rounded-xl" alt={item.name} />
            <h2 className="font-bold text-xl">{item.name}</h2>
            <p className="text-sx">{item.description}</p>
          </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
}
