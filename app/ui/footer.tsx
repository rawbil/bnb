import "../globals.css";
import React from 'react';

export default function Footer(){
    return(
        <>
        <footer>
            <div>
               <span>Airbnb kenya</span>  
            </div>
            <hr />
            <div className="footer">
                <h1>Support</h1>
                <ul>
                    <li>Help Center</li>
                    <li>AirCover</li>
                    <li>Anti-discrimination</li>
                    <li>Disability support</li>
                    <li>Cancellation options</li>
                    <li>Report neighborhood concern</li>
                </ul>
            </div>
            <hr />
            <div className="ft">
                <span>&copy; <p>2024 Airbnb,inc</p></span>
                <div className="foot">
                <ul className="lk">
                    <li>Terms</li>
                    <li>Sitemap</li>
                    <li>Privacy</li>
                    <li>Your Privacy Choices</li>
                </ul>
                <ul>
                    <li>English(US)</li>
                    <li>KSH</li>
                </ul>
                </div>
            </div>
        </footer>
        </>
    );
};