import React, { useEffect } from "react";
import "./TreatmentOptions.css";
import Table from "./table.jsx";

export default function TreatmentOptions() {
  useEffect(() => {
    fetch("http://localhost:5000/api")
      .then((res) => res.json())
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  return (
    <div className="page-container">
      <h2 className="page-title">
        Treatment Options
        <span className="page-subtitle">
          Need care now? Use the Hospital Finder below.
        </span>
      </h2>

      {/* ===============================
           Managing Symptoms Section
      ================================= */}
      <div className="section-block">
        <h3>Managing Symptoms</h3>

        <p>
          Managing symptoms day-to-day helps reduce pain crises and lowers the risk of complications.
          Lifestyle habits, environment, and stress levels play a major role.
          These strategies should always follow guidance from your healthcare team.
        </p>

        <h4 className="subheading">Hydration</h4>
        <p>
          Drinking enough water helps keep blood cells flexible, reducing the chance of sickling.
        </p>
        <ul>
          <li>8–10 cups of water per day (unless told otherwise).</li>
          <li>Increase fluids on hot days or when exercising.</li>
          <li>Carry a refillable bottle to avoid dehydration.</li>
        </ul>

        <h4 className="subheading">Temperature Control</h4>
        <ul>
          <li>Avoid exposure to extreme cold or heat.</li>
          <li>Dress in layers and protect your hands, feet, and head in winter.</li>
          <li>Avoid sudden temperature changes (e.g., cold water immersion).</li>
        </ul>

        <h4 className="subheading">At-Home Pain Management</h4>
        <ul>
          <li>Use prescribed medications exactly as directed.</li>
          <li>Warm compresses, warm baths, and gentle stretching can help ease discomfort.</li>
          <li>Avoid ice – it can trigger blood vessel constriction.</li>
          <li>Practice relaxation techniques to reduce stress-induced pain.</li>
        </ul>
      </div>

      {/* ===============================
           Medical Treatments
      ================================= */}
      <div className="section-block">
        <h3>Medical Treatments</h3>

        <h4 className="subheading">Hydroxyurea Therapy</h4>
        <p>
          Hydroxyurea increases fetal hemoglobin levels, which makes red blood cells less likely to sickle.
          It is one of the most effective long-term treatments.
        </p>
        <ul>
          <li>Reduces frequency of pain crises.</li>
          <li>Prevents hospitalizations.</li>
          <li>Lowers risk of acute chest syndrome.</li>
        </ul>

        <h4 className="subheading">Blood Transfusions</h4>
        <p>
          Transfusions increase the number of healthy red blood cells and reduce complications.
        </p>
        <ul>
          <li>Used for severe anemia.</li>
          <li>Recommended for patients with stroke history or high stroke risk.</li>
          <li>May be used for repeated chest complications.</li>
        </ul>

        <h4 className="subheading">Pain Management Plans</h4>
        <p>
          A personalized pain action plan may include:
        </p>
        <ul>
          <li>Safe home medications.</li>
          <li>Instructions for worsening symptoms.</li>
          <li>Indicators for when to go to the hospital.</li>
        </ul>

        <h4 className="subheading">Bone Marrow / Stem Cell Transplant</h4>
        <p>
          Currently the only potential cure for sickle cell disease.
          It requires a suitable donor match and may not be appropriate for everyone.
        </p>
      </div>

      {/* ===============================
           Ongoing Care
      ================================= */}
      <div className="section-block">
        <h3>Ongoing Care</h3>

        <h4 className="subheading">Regular Check-Ups</h4>
        <p>Routine monitoring helps detect issues early and adjust treatment plans.</p>

        <h4 className="subheading">Vaccinations</h4>
        <ul>
          <li>Annual flu shot recommended.</li>
          <li>Additional pneumonia vaccines may be needed.</li>
          <li>COVID-19 vaccination as advised by your care team.</li>
        </ul>

        <h4 className="subheading">Healthy Living</h4>
        <ul>
          <li>Balanced diet with fruits, vegetables, and lean proteins.</li>
          <li>Folic acid supplements may be recommended for red blood cell production.</li>
          <li>Stress-reducing routines like stretching or mindfulness.</li>
        </ul>
      </div>

      {/* ===============================
           TABLE SECTION
      ================================= */}
      <div className="table-section">
        <Table />
      </div>
    </div>
  );
}
