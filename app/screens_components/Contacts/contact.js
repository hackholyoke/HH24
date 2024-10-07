import React from 'react';
import './contact.css';

export default function Contact() {
  return (
    <footer className="contact-container"> {/* Use className instead of just the name */}
      <h1>Contacts</h1>
        <p>For any questions or concerns, please reach out to us at:</p>
      <p>Email: <a href="mailto:hackholyoke@gmail.com">hackholyoke@gmail.com</a></p>
    <p>
      Instagram: 
      <a href="https://www.instagram.com/hackholyoke/" target="_blank" rel="noopener noreferrer">
        @hackholyoke
      </a>
    </p>
    </footer>
  );
}