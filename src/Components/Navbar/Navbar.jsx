import React, { useState, useEffect } from "react";
import { LuMenu } from "react-icons/lu";
import { MdOutlineClose } from "react-icons/md";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import "./Navbar.css"
import ACMLOGO from "../../assets/Images/logos/acmlogo.png"
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import GoogleLogin from "../GoogleLogin";
import { useAuth } from "../../Context/AuthContext";

export default function Navbar() {
    const [navOpen, setNavOpen] = useState(false);
    const {user}=useAuth()
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close mobile menu when route changes
    useEffect(() => {
        setNavOpen(false);
    }, [location]);

    const navLinks = [
        { name: "HOME", path: "/" },
        { name: "SIGS", path: "/SIG" },
        { name: "EVENTS", path: "/Events" },
        { name: "TEAMS", path: "/Teams" },
        { name: "FOUNDERS", path: "/Founders" },
    ];

    if (user != null) {
        navLinks.push({ name: "ADMIN", path: "/admin" });
    }

    return (
        <>
            {/* Desktop & Mobile Header Navbar */}
            <header 
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 pointer-events-auto ${
                    scrolled ? "bg-white/90 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.05)] py-3" : "bg-white/50 backdrop-blur-sm py-5"
                }`}
            >
                <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-3">
                        <img src={ACMLOGO} alt="ACM Logo" className="h-10 lg:h-12 w-auto object-contain" />
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-8">
                        <ul className="flex items-center gap-8">
                            {navLinks.map((link, index) => (
                                <li key={index}>
                                    <Link 
                                        to={link.path}
                                        className={`text-sm font-bold tracking-wider hover:text-sky-500 transition-colors ${
                                            location.pathname === link.path ? "text-sky-600" : "text-gray-700"
                                        }`}
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Desktop Right Side (Socials & Login) */}
                    <div className="hidden lg:flex items-center gap-6">
                        <div className="flex items-center gap-5 text-gray-500">
                            <SocialLink href="https://www.linkedin.com/company/ipec-acm-chapter/"><FaLinkedin size={20} /></SocialLink>
                            <SocialLink href="https://www.instagram.com/ipec_acm_chapter/"><FaInstagram size={20} /></SocialLink>
                            <SocialLink href="https://www.facebook.com/IpecACM/"><FaFacebook size={20} /></SocialLink>
                        </div>
                        <div className="h-8 w-px bg-gray-300"></div>
                        <div className="w-56 scale-90 origin-right">
                            <GoogleLogin />
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <button 
                        className="lg:hidden p-3 text-gray-800 bg-gray-100/80 hover:bg-gray-200 rounded-full transition-colors shadow-sm border border-gray-200/50"
                        onClick={() => setNavOpen(true)}
                    >
                        <LuMenu size={24} />
                    </button>
                </div>
            </header>

            {/* Mobile Navigation Drawer */}
            <AnimatePresence>
                {navOpen && (
                    <>
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60] lg:hidden"
                            onClick={() => setNavOpen(false)}
                        />
                        <motion.div 
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="fixed top-0 right-0 h-full w-[85%] sm:w-80 bg-white shadow-2xl z-[70] p-6 flex flex-col lg:hidden overflow-y-auto"
                        >
                            <div className="flex justify-between items-center mb-10">
                                <img src={ACMLOGO} alt="ACM Logo" className="h-10 w-auto object-contain" />
                                <button 
                                    className="p-3 text-gray-500 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors shadow-sm"
                                    onClick={() => setNavOpen(false)}
                                >
                                    <MdOutlineClose size={24} />
                                </button>
                            </div>

                            <ul className="flex flex-col gap-3 mb-10">
                                {navLinks.map((link, index) => (
                                    <li key={index}>
                                        <Link 
                                            to={link.path}
                                            onClick={() => setNavOpen(false)}
                                            className={`text-lg font-bold tracking-wider hover:text-sky-500 hover:bg-sky-50 transition-colors block px-4 py-3 rounded-xl ${
                                                location.pathname === link.path ? "text-sky-600 bg-sky-50/50" : "text-gray-800"
                                            }`}
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-auto flex flex-col gap-8 pt-10 border-t border-gray-100">
                                <div className="w-full">
                                    <GoogleLogin />
                                </div>
                                
                                <div className="flex items-center gap-6 text-gray-500 justify-center pb-6">
                                    <SocialLink href="https://www.linkedin.com/company/ipec-acm-chapter/"><FaLinkedin size={24} /></SocialLink>
                                    <SocialLink href="https://www.instagram.com/ipec_acm_chapter/"><FaInstagram size={24} /></SocialLink>
                                    <SocialLink href="https://www.facebook.com/IpecACM/"><FaFacebook size={24} /></SocialLink>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}

const SocialLink = ({ children, href }) => (
    <a 
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-sky-500 transition-colors duration-200 transform inline-block hover:scale-110"
    >
        {children}
    </a>
);