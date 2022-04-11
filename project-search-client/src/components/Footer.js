import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function Footer() {


    return(
        <footer className="footer">
            <p className="footer__copyright">&copy; {new Date().getFullYear()} Eric Canosa</p>
            <div className="footer__social-display">
                <a href="mailto:canosaer@gmail.com" className="footer__social-button">
                    <button className="footer__social-icon footer__social-icon_email"><FontAwesomeIcon icon={["fas", "envelope"]} /></button>
                </a>
                <a href="https://www.linkedin.com/in/eric-canosa/" className="footer__social-button">
                    <button className="footer__social-icon footer__social-icon_email_in"><FontAwesomeIcon icon={["fab", "linkedin-in"]} /></button>
                </a>
            </div>
        </footer>
    )
}