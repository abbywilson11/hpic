import { Link } from "react-router-dom"; // Link for navigation
import { MdHealthAndSafety, MdLocalHospital, MdGroup, MdSchool } from "react-icons/md"; //icons for info cards
import "./InfoSection.css";


export default function InfoSection() {
  return (
    <section className="info-section">
      <h2>How HPIC Can Help!</h2>
      <p>
        We offer many tools and resources for you to discover how to take care 
        of yourself and your loved ones who are affected by Sickle Cell Disease.
      </p>

      <div className="info-grid">

        <Link to="/EarlyDetection" className="info-card-link"> {/* Link to Early Detection page */}
          <div className="info-card">
          <div className="info-icon"><MdHealthAndSafety /></div> {/* Icon */}     
           <h3>Early Detection</h3>
            <p>Comprehensive screening programs and genetic testing to identify SCD early.</p>
          </div>
        </Link>
{/* Each card links to its respective page using the same format */}
        <Link to="/TreatmentOptions" className="info-card-link">
          <div className="info-card">
            <div className="info-icon"><MdLocalHospital /></div>
            <h3>Treatment Options</h3>
            <p>Access to pain management strategies, medication guidance, and more.</p>
          </div>
        </Link>

        <Link to="/Community" className="info-card-link">
          <div className="info-card">
            <div className="info-icon"><MdGroup /></div>
            <h3>Community</h3>
            <p>Connect with others, share experiences, and find support groups.</p>
          </div>
        </Link>

        <Link to="/Education" className="info-card-link">
          <div className="info-card">
            <div className="info-icon"><MdSchool /></div>
            <h3>Education</h3>
            <p>Resources for patients, families, and healthcare providers.</p>
          </div>
        </Link>

      </div>
    </section>
  );
}
