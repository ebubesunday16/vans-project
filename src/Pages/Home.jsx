import React from "react"
import {Link} from "react-router-dom"

export default function Home(){

    return(
        <section className="homepage-hero">
            <div className="homepage-hero-div van-life-container">
                <h1>You got the travel plans, we got the travel vans.</h1>
                <p>
                Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.
                </p>
                <button className="asylum-button"><Link className="nav-link" to="/vans">Find your van</Link></button>
            </div>
        </section>
    )
}