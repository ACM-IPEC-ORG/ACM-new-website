import React, { useState } from "react";
import { FaBars, FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import "./Navbar.css"
import ACMLOGO from "../../assets/Images/logos/acmlogo.png"
// import {FaInstagram,FaFacebookF,FaTwitter} from "react-icons/fa"
import { Link } from "react-router-dom";
import { RxOpacity } from "react-icons/rx";

export default function Navbar(){
    const [navOpen,setNavOpen]=useState(false)
    // function handleContact(){
    //     document.getElementById("contact").scrollIntoView("smooth","start")
    // }
    return(
        
        <div className="nav">
            <div className="nav-conainer">
                <div className="navbar items-center">
                    <Link to="/" onClick={()=>setNavOpen(false)}><div className="px-16 aspect-video" style={{
                        backgroundImage:`url(${ACMLOGO})`,
                        backgroundSize:"contain",
                        backgroundRepeat:"no-repeat",
                        backgroundPosition:"center"
                    }}></div></Link>
                    <div className="menu-toggle" onClick={()=>setNavOpen(!navOpen)}>
                        <div className={navOpen?"hamBox hamBoxOpen":"hamBox"}>
                            <span className={navOpen?"lineTop spin":"lineTop"}></span>
                            <span className={navOpen?"lineBottom spin":"lineBottom"}></span>
                        </div>
                    </div>
                </div>
                <div className="nav-overlay shadow-lg" style={{
                    top:navOpen?"0":"-100%",
                    transitionDelay:navOpen?"0.1s":"0s"
                }}>
                    <ul className="nav-links ">
                        
                        <li className="nav-items">
                            <Link to="/SIG" className="nav-text hover:underline underline-offset-4"
                            onClick={()=>setNavOpen(!navOpen)}style={{
                                top:navOpen? "0":"120px",
                                transitionDelay:navOpen?"0.5s":"0s"
                            }}
                            >SIGS</Link>
                            <div className="nav-items-wrapper"></div>
                        </li>
                        <li className="nav-items">
                            <Link to="/Events" className="nav-text hover:underline underline-offset-4"
                            onClick={()=>setNavOpen(!navOpen)}style={{
                                top:navOpen? "0":"120px",
                                transitionDelay:navOpen?"0.5s":"0s"
                            }}
                            >EVENTS</Link>
                            <div className="nav-items-wrapper"></div>
                        </li>
                        <li className="nav-items">
                            <Link to="/Teams" className="nav-text hover:underline underline-offset-4"
                            onClick={()=>setNavOpen(!navOpen)}style={{
                                top:navOpen? "0":"120px",
                                transitionDelay:navOpen?"0.5s":"0s"
                            }}
                            >TEAMS</Link>
                            <div className="nav-items-wrapper"></div>
                        </li>
                        <li className="nav-items">
                            <Link to="/Founders" className="nav-text hover:underline underline-offset-4"
                            onClick={()=>setNavOpen(!navOpen)}
                            style={{
                                top:navOpen? "0":"120px",
                                transitionDelay:navOpen?"0.5s":"0s"
                            }}
                            >FOUNDERS</Link>
                            <div className="nav-items-wrapper"></div>
                        </li>
                              
                    </ul>
                    <div className="nav-footer">
                        <div className="location">
                            <div className="nav-social-media">
                                <ul>
                                <li><a href="https://www.linkedin.com/company/ipec-acm-chapter/"
                                    style={{
                                        bottom:navOpen?"0":"-20px",
                                        opacity:navOpen?"1":"0",
                                        transitionDelay:navOpen?"0.5s":"0"
                                    }}
                                    ><FaLinkedin/></a></li>
                                    <li><a href="https://www.instagram.com/ipec_acm_chapter/"
                                    style={{
                                        bottom:navOpen?"0":"-20px",
                                        opacity:navOpen?"1":"0",
                                        transitionDelay:navOpen?"0.5s":"0"
                                    }}
                                    ><FaInstagram/></a></li>
                                    <li><a href="https://www.facebook.com/IpecACM/"
                                    style={{
                                        bottom:navOpen?"0":"-20px",
                                        opacity:navOpen?"1":"0",
                                        transitionDelay:navOpen?"0.5s":"0"
                                    }}
                                    ><FaFacebook/></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}