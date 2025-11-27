//this page is jsut text and numbers showing statistics about sickle cell disease
import React from "react"
import "./statistics.css"

export default function Statistics() {
    return ( 
        <div className="statistics-container">
            <section className="statistics-section">

                <div className="section">
                    <h1>300,000</h1>
                    <p>babies are born with SCD each year</p>
                </div>

                <div className="section">
                    <h1>50+</h1>
                    <p>Years average lifespan with treatment</p>
                </div>

                <div className="section">
                    <h1>90%</h1>
                    <p>Of SCD cases are in Sub-Saharan Africa</p>
                </div>

                <div className="section">
                    <h1>24/7</h1>
                    <p>Support & Resources Available</p>
                </div>

            </section>
        </div>
    )
}
