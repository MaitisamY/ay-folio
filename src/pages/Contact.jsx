
import '../styles/navigator.css';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { BsChevronRight, BsChevronLeft } from 'react-icons/bs';

import Header from '../partials/Header';
import Main from '../partials/Main';
import ContactContainer from '../components/ContactContainer';
import Footer from '../partials/Footer';

function Contact() {

    const { theme } = useTheme();

    const [slideOut, setSlideOut] = useState(false);
    const [slideDirection, setSlideDirection] = useState('left'); 
    
    const navigate = useNavigate();

    const handleNavigate = (path) => {
        setSlideDirection(path === '/skills' ? 'right' : 'left'); 
        setSlideOut(true);
        setTimeout(() => {
            navigate(path);
        }, 500);
    };

    document.title = `Contact - ${import.meta.env.VITE_SITE_TITLE}`;

    return (
        <div className={`page-container fadeIn ${slideOut ? `slide-out-${slideDirection}` : ''}`}>
            <Header />
            <Main>
                <ContactContainer />
            </Main>
            {!slideOut && (
                <>
                    <a
                        className={`navigator-left ${theme === 'light' ? 'theme-color-dark' : 'theme-color-light'}`}
                        onClick={() => handleNavigate('/skills')}
                    >
                        <span><BsChevronLeft /></span> <i>Skills</i>
                    </a>
                    <a
                        className={`navigator-right ${theme === 'light' ? 'theme-color-dark' : 'theme-color-light'}`}
                        onClick={() => handleNavigate('/')}
                    >
                        <i>Home</i> <span><BsChevronRight /></span>
                    </a>
                </>
            )}
            <Footer />
        </div>
    )
}

export default Contact;
