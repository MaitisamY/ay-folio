import '../styles/contact.css';
import { useTheme } from '../context/ThemeContext';
import { BsEnvelope, BsWhatsapp } from 'react-icons/bs';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function ContactContainer() {
    const { theme } = useTheme();
    const [displayText, setDisplayText] = useState('');
    const fullText = "In today's fast-paced world, filling out forms is a hassle. Please contact me directly and conveniently through:";
    const [textComplete, setTextComplete] = useState(false);

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            if (index <= fullText.length) {
                setDisplayText(fullText.slice(0, index));
                index++;
            } else {
                clearInterval(interval);
                setTextComplete(true);
            }
        }, 25); // Adjust speed here
        return () => clearInterval(interval);
    }, []);

    const linkVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    return (
        <div className="contact-container">
            <p>{displayText}</p>
            {textComplete && (
                <motion.div
                    className="link-holder"
                    initial="hidden"
                    animate="visible"
                    variants={{
                        visible: {
                            transition: {
                                staggerChildren: 0.2,
                            }
                        }
                    }}
                >
                    <motion.a
                        className={`${theme === 'light' ? 'theme-color-light theme-bg-dark' : 'theme-color-dark theme-bg-light'}`}
                        href="mailto:m.aitisamyaseen@gmailcom"
                        target="_blank"
                        rel="noopener noreferrer"
                        variants={linkVariants}
                    >
                        <BsEnvelope /> Email
                    </motion.a>
                    <motion.a
                        className={`${theme === 'light' ? 'theme-color-light theme-bg-dark' : 'theme-color-dark theme-bg-light'}`}
                        href="tel:+923163043977"
                        target="_blank"
                        rel="noopener noreferrer"
                        variants={linkVariants}
                    >
                        <BsWhatsapp /> WhatsApp
                    </motion.a>
                </motion.div>
            )}
        </div>
    );
}
