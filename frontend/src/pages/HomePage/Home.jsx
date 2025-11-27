import React from "react";
import "./Home.css";
import ribbon from "../../assets/Ribbon.jpg"; // importing image from assets folder
//importing info and statistics for home page components
import InfoSection from "../InformationSection/InfoSection";
import StatisticsSection from "../StatisticsSection/statistics";

export default function Home() {
  return (
    <div className="home-container">
      <section className="hero"> 
        <div className="hero-content">
          <h1>7.74 Million People</h1> {/*satistic in heading 1*/}
          <h2>live with SCD Worldwide</h2>{/*separated from the one above to have different colours in css*/}
          {/*separated for paragraph spacing*/}
          <p>
          Sickle-cell disease (SCD) is a genetic disorder that affects haemoglobin, 
          the molecule in red blood cells responsible for carrying oxygen.
          </p>
          <p>
          SCD is most common in individuals of African, Mediterranean, Middle Eastern, and Indian descent. 
          </p>
          <p> 
          Early diagnosis is crucial for managing the disease and preventing complications.          </p>
        </div>
        <div className="hero-image"> {/*defined image*/}
          <img src={ribbon} alt="Awareness Ribbon" /> {/*image for the right side*/}
        </div>
      </section>

        <div> 
          {/* Additional content can be added here in the future */}
          <InfoSection />
          <StatisticsSection />
        </div>

    </div>
  );
}
