import React from "react"
import {Outlet} from "react-router-dom"
import Navigation from "./Navigation"
import Footer from "./Footer"

export default function Layout(){

    return(

        <main>

        <Navigation />
        
        <Outlet />

        <Footer />

        </main>
    )
}