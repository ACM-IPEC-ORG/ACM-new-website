import React, { useEffect, useState } from "react"
import { RouterProvider, createBrowserRouter } from "react-router-dom";
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

export default function App() {
  const [loading, setLoading] = useState(true);
  useEffect(()=>{
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  },[])
  const router = createBrowserRouter([
    {
      path:"/",
      element:<MainLayout/>,
      children:[
        {
          path: "/",
          element: <Home />,
        },
        {
          path:"*",
          element:<Error/>
        },
        {
          path:"/SIG",
          element:<SIGs/>
        },
        {
            path:"/SIG",
            children:[
              {
                
                path:"/SIG/:Slugs",
                element:<SIGDetails/>
              }
            ]
          },
        {
          path:"/Events",
          element:<Events/>
        },
        {
          path:"/Events",
          children:[
            {
              
              path:"/Events/:Slugs",
              element:<EventDetails/>
            }
          ]
        },
        {
          path:"/Teams",
          element:<Teams/>
        },
        {
          path:"/Gallery",
          element:<Gallery/>
        },
        {
          path:"/Founders",
          element :<Founders/>
        }
      ]
    },
    

  ])

  return (
    
    <div className="App">
      {loading ? (
        <Loader />
      ) : (
          <RouterProvider router={router} />
      )}
      </div>
  )
}

