import React from 'react';
import './AboutUs.css';

function AboutUs() {

  return (
      <div className="about-us-container">
        <img className="restaurant-icon" src="/top-bar/restaurant-logo.svg" alt=""/>
        <h1>Teszt étterem</h1>
        <p>Ez egy teszt étterem amely az alkalmatás tesztelése céljából lett elkészítve.</p>
        <h2>Cím:</h2>
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2696.8486835348654!2d19.057290077028615!3d47.47337807117797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741ddaa3514e031%3A0x22ab4283e147d415!2sBME%20Q%20Building!5e0!3m2!1sen!2shu!4v1717196660060!5m2!1sen!2shu"
            width="100%" height="450px" loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
  )
}

export default AboutUs;
