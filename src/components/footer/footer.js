import React from "react";
import './footer.css'

function Footer() {
  return (
    <div className="footer">
        <div className="content-box">
            <div className="left-box">
                <b>Kontakt</b><br></br>
                Tomasz Zielecki<br></br>
                <a href="mailto:swiatynia.piwa@gmail.com" style={{color: "#ebe5dd"}}>swiatynia.piwa@gmail.com</a>
            </div>
            <div className="right-box">
                <b>Adres</b><br></br>
                ROD - Port Centralny, Kanałowa, Szczecin 70-611
            </div>  
        </div>
        <div className="logo-footer"></div>
    </div>
  )
}


export default Footer;
