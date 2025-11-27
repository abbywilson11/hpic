import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
{/* Footer section PLACEHOLDER INFO NOT REAL */}
        <div>
          <h4>HPIC</h4>
          <p>
            Health Promotion International Centre<br />
            Empowering lives through education, support, and comprehensive care for sickle-cell disease.
          </p>
        </div>

        <div>
          <h4>Resources</h4>
          <ul>
            <li>Patient Portal</li>
            <li>Support Groups</li>
            <li>Publications</li>
            <li>FAQ</li>
          </ul>
        </div>

        <div>
          <h4>Contact</h4>
          <p>Email: info@hpic.org</p>
          <p>Phone: 1-800-HPIC-HELP</p>
          <p>Emergency: 911</p>
        </div>
      </div>

      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} HPIC. All rights reserved. {/* current year */}
      </div>
    </footer>
  );
}
