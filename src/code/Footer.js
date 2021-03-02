import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <footer>
        <small>
          <i className="fas fa-mobile-alt"></i> Responsive Design&nbsp;
          <a
            href="https://github.com/irSilviana/Vanilla-Weather-App"
            target="_blank"
            rel="noreferrer"
          >
            Open-source Code
          </a>
          <br />
          Created by&nbsp;
          <a
            href="https://www.linkedin.com/in/irsilviana/"
            target="_blank"
            rel="noreferrer"
          >
            IrSilviana
          </a>
          &nbsp;from&nbsp;
          <a
            href="https://www.shecodes.io/students/273-irsilviana-irsilviana"
            target="_blank"
            rel="noreferrer"
          >
            SheCodes
          </a>
        </small>
      </footer>
    </div>
  );
}
