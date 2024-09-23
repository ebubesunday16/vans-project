import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Vans from "./Pages/Vans"
import Host from "./Pages/Host/Host"
import HostDashboard from "./Pages/Host/HostDashboard"
import HostIncome from "./Pages/Host/HostIncome"
import HostVans from "./Pages/Host/HostVans"
import HostReviews from "./Pages/Host/HostReviews"
import VansDetail from "./Pages/VansDetail"



export default function App (){



  

 

  return(

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path="host" element={<Host/>}>
              <Route index element={<HostDashboard />} />
              <Route path="income" element={<HostIncome />} />
              <Route path="vans" element={<HostVans />} />
              <Route path="reviews" element={<HostReviews />} />

          </Route>
          <Route path="vans" element={<Vans/>}/>
          <Route path="vans/:id" element={<VansDetail/>}/>

          <Route path="about" element={<About/>}/>

        </Route>
      </Routes>
    
    </BrowserRouter>

    
  )
}