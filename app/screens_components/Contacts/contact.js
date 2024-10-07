import React from 'react';
import './contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'; // For email icon
import { faInstagram } from '@fortawesome/free-brands-svg-icons'; // For Instagram icon

export default function Contact() {
  return (
    <footer className="contact-container">
      <h1>Contacts</h1>
      <p>For any questions or concerns, please reach out to us at:</p>
      <p>
        <a href="mailto:hackholyoke@gmail.com" style={{ color: 'white', textDecoration: 'none' }}>
          <FontAwesomeIcon icon={faEnvelope}  className="icon-small" /> {/* Email icon */}
        </a>
        <span> </span> {/* Space between icons and text */}
        <a href="mailto:hackholyoke@gmail.com" style={{ color: 'white' }}>
          hackholyoke@gmail.com
        </a>
      </p>
      <p>
        <a href="https://www.instagram.com/hackholyoke/" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none' }}>
          <FontAwesomeIcon icon={faInstagram}  className="icon-small" /> {/* Instagram icon */}
        </a>
        <span> </span> {/* Space between icons and text */}
        <a href="https://www.instagram.com/hackholyoke/" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>
          @hackholyoke
        </a>
      </p>
    </footer>
  );
}