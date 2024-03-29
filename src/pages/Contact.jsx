import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../partials/Header';
import Main from '../partials/Main';
import IntroBlock from '../components/IntroBlock';
import { PROFILE } from '../data/dataStore';
import { useTheme } from '../context/ThemeContext';
import { BsChevronRight, BsChevronLeft } from 'react-icons/bs';
import '../styles/navigator.css';

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

    document.title = `Contact - ${PROFILE[0].name}`;

    return (
        <div className={`page-container fadeIn ${slideOut ? `slide-out-${slideDirection}` : ''}`}>
            <Header />
            <Main>
                <IntroBlock>
                    <h1>
                        {`I'm`} {PROFILE[0].name} <br />
                        <span
                            className={
                                theme === 'light'
                                    ? 'theme-bg-dark theme-color-light'
                                    : 'theme-bg-light theme-color-dark'
                            }
                        >
                            a {PROFILE[0].role}
                        </span>
                    </h1>
                </IntroBlock>
                <IntroBlock>
                    <p>{`< ${PROFILE[0].description[0]} />`}</p>
                    <p>{PROFILE[0].description[1]}</p>
                </IntroBlock>
            </Main>
            {!slideOut && (
                <>
                    <a
                        className={`navigator-left ${theme === 'light' ? 'theme-color-dark' : 'theme-color-light'}`}
                        onClick={() => handleNavigate('/skills')}
                    >
                        <span><BsChevronLeft size={60} /></span> Skills
                    </a>
                    <a
                        className={`navigator-right ${theme === 'light' ? 'theme-color-dark' : 'theme-color-light'}`}
                        onClick={() => handleNavigate('/')}
                    >
                        Home <span><BsChevronRight size={60} /></span>
                    </a>
                </>
            )}
        </div>
    )
}

export default Contact;
