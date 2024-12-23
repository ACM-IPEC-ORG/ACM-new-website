import React, { useState } from "react";
import { LuMenu } from "react-icons/lu";
import { MdOutlineClose } from "react-icons/md";
import { FaBars, FaTimes, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import "./Navbar.css"
import ACMLOGO from "../../assets/Images/logos/acmlogo.png"
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@material-tailwind/react";
import GoogleLogin from "../GoogleLogin";
import { useAuth } from "../../Context/AuthContext";

export default function Navbar() {
    const [navOpen, setNavOpen] = useState(false);
    const {user,setupUser}=useAuth()

    return (
        <>

            {/* Menu Toggle Button */}
            <button 
                className={`fixed top-4 right-4 z-50 p-5 rounded-full ${navOpen?"bg-white":"bg-primary/80 text-white hover:text-black shadow-md"}  text-gray-800 hover:bg-gray-100`}
                onClick={() => setNavOpen(!navOpen)}
            >
                {navOpen ? <MdOutlineClose size={24} /> : <LuMenu size={24} />}
            </button>

            {/* Animated Box Navbar */}
            <AnimatePresence>
                {navOpen && (
                    <motion.div 
                        initial={{ opacity: 0, scale: 0, x: "50%", y: "-50%" }}
                        animate={{ opacity: 1, scale: 1, x: "0%", y: "0%" }}
                        exit={{ opacity: 0, scale: 0, x: "50%", y: "-50%" }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="fixed top-4 right-4 bg-white rounded-lg shadow-2xl z-40 w-64 p-4"
                    >
                        {/* Logo */}
                        <Link to="/" onClick={() => setNavOpen(false)}>
                            <div className="p-2 mb-4">
                                <div className="w-32 mx-auto aspect-video rounded-full" style={{
                                    backgroundImage: `url(${ACMLOGO})`,
                                    backgroundSize: "contain",
                                    backgroundRepeat: "no-repeat",
                                    backgroundPosition: "center",
                                }}></div>
                            </div>
                        </Link>

                        {/* Navigation Links */}
                        <nav className="px-2">
                            <ul className="space-y-2">
                                <NavItem to="/" onClick={() => setNavOpen(false)}>HOME</NavItem>
                                <NavItem to="/SIG" onClick={() => setNavOpen(false)}>SIGS</NavItem>
                                <NavItem to="/Events" onClick={() => setNavOpen(false)}>EVENTS</NavItem>
                                <NavItem to="/Teams" onClick={() => setNavOpen(false)}>TEAMS</NavItem>
                                <NavItem to="/Founders" onClick={() => setNavOpen(false)}>FOUNDERS</NavItem>
                                {user!=null&&<NavItem to="/admin" onClick={() => setNavOpen(false)}>Admin</NavItem>}
                                <GoogleLogin/>
                            </ul>
                        </nav>

                        {/* Social Media Links */}
                        <div className="mt-4 px-2">
                            <div className="flex justify-center space-x-6 text-gray-600">
                                <SocialLink href="https://www.linkedin.com/company/ipec-acm-chapter/">
                                    <FaLinkedin size={20} />
                                </SocialLink>
                                <SocialLink href="https://www.instagram.com/ipec_acm_chapter/">
                                    <FaInstagram size={20} />
                                </SocialLink>
                                <SocialLink href="https://www.facebook.com/IpecACM/">
                                    <FaFacebook size={20} />
                                </SocialLink>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Overlay */}
            <AnimatePresence>
                {navOpen && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black backdrop-blur-sm bg-opacity-50 z-30"
                        onClick={() => setNavOpen(false)}
                    />
                )}
            </AnimatePresence>
        </>
    );
}

// Helper Components
const NavItem = ({ children, to, onClick }) => (
    <li>
        <Link 
            to={to}
            onClick={onClick}
            className="block py-2 px-4 text-gray-800 hover:bg-secondary/10 hover:font-semibold rounded-md transition-colors duration-200 text-sm"
        >
            {children}
        </Link>
    </li>
);

const SocialLink = ({ children, href }) => (
    <a 
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-primary transition-colors duration-200"
    >
        {children}
    </a>
);