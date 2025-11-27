import React from "react";
import "./Education.css";

export default function Education() {
  const brochures = [
    "ChildrenWithSCD-EN.pdf",
    "QualityStandard-EN.pdf",
    "PatientGuide-EN.pdf",
    "ChildrenWithSCD-FR.pdf",
    "QualityStandard-FR.pdf",
    "PatientGuide-FR.pdf",
  ];


  const openBrochure = async (fileName) => {
    const response = await fetch(`http://localhost:5000/api/brochure/${fileName}`);
    const blob = await response.blob();
    const url = URL.createObjectURL(blob);
    window.open(url, "_blank");
  };

  return (
    <div className="page-container">
      <h2 className="page-title">Education</h2>

    <div className="section-row">
      <div className="section-block">
          <h3>What Is Sickle Cell Disease?</h3>
          <p>Sickle Cell Disease (SCD) is an inherited blood disorder that affects
          the shape of red blood cells, causing them to become rigid and
          crescent-shaped. These cells break down more easily and can block
          blood flow, leading to complications.
          </p>
    </div>

    <div className="section-block">
          <h3>Why Education Matters</h3>
          <p>Understanding SCD allows individuals, caregivers, and communities to
          better support those living with the condition. Awareness helps reduce
          stigma, improves early detection, and empowers families to access
          proper care.
          </p>
    </div>
    </div>

      {/* Brochures Section */}
<h2 className="brochure-title">Brochures</h2>

<div className="brochure-buttons">
  {brochures.map((fileName, index) => (
    <button
      key={index}
      className="brochure-button"
      onClick={() => openBrochure(fileName)}
    >
      {fileName.replace(".pdf", "").replace(/-/g, " ")}
    </button>
  ))}
</div>

    </div>
  );  
}
