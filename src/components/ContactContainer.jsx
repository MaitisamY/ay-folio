
import '../styles/contact.css';

import { useTheme } from '../context/ThemeContext';
import { BsEnvelope, BsWhatsapp } from 'react-icons/bs';

export default function ContactContainer() {

    const { theme } = useTheme();

    return (
        <div className="contact-container">
            <p>
                In today's fast-paced world, where time is of the essence, the last thing anyone wants to do is pause and fill out forms. 
                Hence, feel free to reach out to me directly, swiftly and conveniently through:
            </p>
            <div className="link-holder">
                <a 
                    className={`${theme === 'light' ? 'theme-color-light theme-bg-dark' : 'theme-color-dark theme-bg-light'}`}
                    href="mailto:m.aitisamyaseen@gmailcom" 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    <BsEnvelope /> Email
                </a>
                <a 
                    className={`${theme === 'light' ? 'theme-color-light theme-bg-dark' : 'theme-color-dark theme-bg-light'}`}
                    href="tel:+923163043977" 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    <BsWhatsapp /> WhatsApp
                </a>
            </div>
        </div>
    )
}
