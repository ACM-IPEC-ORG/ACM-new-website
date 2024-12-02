// import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import ACMLOGO from "../../assets/Images/logos/acmlogo.png"

export default function Footer() {
    return (
        <div className="w-full bg-[#121212] py-4 text-gray-300 px-4 md:px-12 divide-y-2 divide-gray-700">
            <div className="grid xl:grid-cols-2 lg:grid-cols-1 grid-cols-1 h-full py-10">
                <div className="grid lg:grid-flow-col gap-4 divide-x-2 divide-gray-700">
                    <Link to="/">
                        <div className="p-10" style={{
                            backgroundImage: `url(${ACMLOGO})`,
                            backgroundSize: "contain",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center"
                        }}/>
                    </Link>
                    <div className="px-5 grid grid-cols-1 justify-center">
                        <ul className="lg:flex grid md:gap-4 text-sm lg:gap-10 gap-2 text-gray-300 pt-4">
                            <Link to="/" className="hover:text-white hover:underline underline-offset-4">HOME</Link>
                            <Link to="/SIG" className="hover:text-white hover:underline underline-offset-4">SIGs</Link>
                            <Link to="/Events" className="hover:text-white hover:underline underline-offset-4">EVENTS</Link>
                            <Link to="/Teams" className="hover:text-white hover:underline underline-offset-4">TEAMS</Link>
                            <Link to="/Founders" className="hover:text-white hover:underline underline-offset-4">FOUNDERS</Link>
                        </ul>
                        <h5 className="py-4 text-xs lg:py-0 text-gray-400">@2023 IPEC ACM. All Rights are Reserved</h5>
                    </div>
                </div>
                <div className="grid grid-rows-2 justify-end">
                    <ul className="flex gap-x-5 text-xl pt-4 justify-center">
                        {/* Social icons if needed */}
                    </ul>
                    <h5 className="text-xs text-center text-gray-400">contact: ipecacm@gmail.com</h5>
                </div>
            </div>
        </div>
    )
}