import React from 'react';
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        
        <div className={styles.footerSection}>
          <h3>About MAN VAN</h3>
          <ul>
            <li>About Us</li>
            <li>Our Team</li>
            <li>Our Story</li>
            <li>Careers</li>
          </ul>
        </div>
        <div className={styles.footerSection}>
          <h3>Services</h3>
          <ul>
            <li>Vehicle Customization</li>
            <li>Mobile Workshops</li>
            <li>Van Conversions</li>
            <li>Consultation</li>
          </ul>
        </div>
        <div className={styles.footerSection}>
          <h3>Contact Us</h3>
          <p>Email: info@manvan.com</p>
          <p>Phone: +1 (555) 123-4567</p>
        </div>
      </div>
      <div className={styles.footerSecondary}>
        <div className={styles.footerSection}>
          <p>Make Van &copy; {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
