import { Outlet } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";

const MainLayout = () => {

  return (
    <div className="">
      <Navbar/>
      <div className="">
        <Outlet />
        <Footer/>
      </div>
    </div>
  );
};

export default MainLayout;
