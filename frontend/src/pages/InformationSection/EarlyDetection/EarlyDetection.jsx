import React from "react";
import "./earlyDetection.css";

//importing images 
import eyes from "../../../assets/jaundice.png";
import growth from "../../../assets/growth.png";
import pain from "../../../assets/pain.png";
import infection from "../../../assets/infection.jpg";
import swelling from "../../../assets/swelling.png";
import fatigue from "../../../assets/fatigue.png";  

export default function EarlyDetection() {
  return (
    /* ✅ Full-page mint background wrapper */
    <div className="page-wrapper">
      
      {/* ✅ Main centered content container */}
      <div className="page-container">
        <h2 className="page-title">Early Detection</h2>

        {/* Intro Section */}
        <div className="section-block">
          <h3 className="section-title">Understanding Early Signs of Sickle Cell Disease</h3>
          <p>
            Early detection of Sickle Cell Disease (SCD) is crucial for preventing 
            complications and ensuring healthy development. Recognizing symptoms 
            early helps caregivers seek medical attention quickly and begin 
            preventive care programs.
          </p>
        </div>

        {/* Symptom Grid */}
        {/* Symptoms Section - Side-by-Side Rows */}
<div className="section-block">
  <h3 className="section-title">Early Symptoms to Look For</h3>

  <div className="symptom-list">

    <div className="symptom-row">
      <img src={swelling} alt="Hand and foot swelling" className="symptom-icon" />
      <div className="symptom-info">
        <h4>Swelling of hands and feet</h4>
        <p>Often one of the first symptoms in infants, caused by blocked blood flow.</p>
      </div>
    </div>

    <div className="symptom-row">
      <img src={fatigue} alt="Fatigue" className="symptom-icon" />
      <div className="symptom-info">
        <h4>Unusual tiredness or fatigue</h4>
        <p>Fatigue occurs when sickle cells break down faster than the body can replace them.</p>
      </div>
    </div>

    <div className="symptom-row">
      <img src={eyes} alt="Jaundice" className="symptom-icon" />
      <div className="symptom-info">
        <h4>Yellowing of skin or eyes (jaundice)</h4>
        <p>Jaundice happens due to the breakdown of red blood cells, causing bilirubin buildup.</p>
      </div>
    </div>

    <div className="symptom-row">
      <img src={pain} alt="Pain crises" className="symptom-icon" />
      <div className="symptom-info">
        <h4>Frequent pain episodes</h4>
        <p>Episodes occur when sickle-shaped cells block blood flow, causing inflammation.</p>
      </div>
    </div>

    <div className="symptom-row">
      <img src={infection} alt="Frequent infections" className="symptom-icon" />
      <div className="symptom-info">
        <h4>Frequent infections or fevers</h4>
        <p>SCD can damage the spleen, reducing immunity and making infections more common.</p>
      </div>
    </div>

    <div className="symptom-row">
      <img src={growth} alt="Delayed growth" className="symptom-icon" />
      <div className="symptom-info">
        <h4>Delayed growth or development</h4>
        <p>Children with SCD may grow more slowly due to chronic anemia and low oxygen levels.</p>
      </div>
    </div>

  </div>
</div>

        {/* Screening Section */}
        <div className="section-block">
          <h3 className="section-title">Common Screening Methods</h3>
          <ul>
            <li>Newborn screening (routine in many hospitals)</li>
            <li>Hemoglobin electrophoresis</li>
            <li>Genetic testing for carrier status</li>
            <li>Blood smear examination</li>
          </ul>
        </div>

      </div>
    </div>
  );
}
