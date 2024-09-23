import React from "react"
import {Outlet} from "react-router-dom"
export default function Home(){

    return(
        <div className="van-life-container">
            <ul className="host-navigation">
                <li>Dashboard</li>
                <li>Income</li>
                <li>Vans</li>
                <li>Reviews</li>
            </ul>

            <Outlet />
            
            <h2>Your Listed Vans</h2>
            <div className="your-listed-vans">

            </div>

        </div>
    )
}