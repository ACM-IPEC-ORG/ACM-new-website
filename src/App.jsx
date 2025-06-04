import React, { useState, useEffect } from "react";
import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home/Home";
import MainLayout from "./Pages/More/MainLayout";
import SIGs from "./Pages/SIG/SIGs";
import Teams from "./Pages/Teams/Teams";
import Founders from "./Pages/Founders/Founders";
import SIGDetails from "./Pages/SIG/SigDetails";
import Events from "./Pages/Events/Events.jsx";
import EventDetails from "./Pages/Events/EventDetails";
import Gallery from "./Pages/More/Gallery";
import Loader from "./Pages/More/Preloader";
import "./App.css";
import { useAuth } from "./Context/AuthContext.jsx";
import Admin from "./Pages/Admin/Admin.jsx";


export default function App() {
  const {user}=useAuth();
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Only show loader on fresh page load/refresh
    if (performance.navigation.type === 1 || !sessionStorage.getItem('firstLoad')) {
      sessionStorage.setItem('firstLoad', 'true');
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    } else {
      setLoading(false);
    }
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "/",
          element: loading ? <Loader /> : <Home />,
        },
        {
          path: "*",
          element: loading ? <Loader /> : <Error />,
        },
        {
          path: "/SIG",
          element: loading ? <Loader /> : <SIGs />,
        },
        {
          path: "/SIG/:Slugs",
          element: loading ? <Loader /> : <SIGDetails />,
        },
        {
          path: "/Events",
          element: loading ? <Loader /> : <Events />,
        },
        {
          path: "/Events/:Slugs",
          element: loading ? <Loader /> : <EventDetails />,
        },
        {
          path: "/Teams",
          element: loading ? <Loader /> : <Teams />,
        },
        {
          path: "/Gallery",
          element: loading ? <Loader /> : <Gallery />,
        },
        {
          path: "/Founders",
          element: loading ? <Loader /> : <Founders />,
        },
        {
          path: "/admin",
          element: user!=null?loading ? <Loader /> : <Admin />:<Navigate to="/"/>,
        }
      ]
    },
  ]);

  return (
    <div className="App bg-white text-gray-800">
      <RouterProvider router={router} />
    </div>
  );
}