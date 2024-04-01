
import '../styles/navigator.css';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { BsChevronRight, BsChevronLeft } from 'react-icons/bs';

import Header from '../partials/Header';
import Main from '../partials/Main';
import ProjectContainer from '../components/ProjectContainer';
import Footer from '../partials/Footer';

function Projects() {
    
    const { theme } = useTheme();

    const [slideOut, setSlideOut] = useState(false);
    const [slideDirection, setSlideDirection] = useState('left'); 

    const navigate = useNavigate();

    const handleNavigate = (path) => {
        setSlideDirection(path === '/' ? 'right' : 'left'); 
        setSlideOut(true);
        setTimeout(() => {
            navigate(path);
        }, 500);
    };

    document.title = `Projects - ${import.meta.env.VITE_SITE_TITLE}`;

    return (
        <div className={`page-container fadeIn ${slideOut ? `slide-out-${slideDirection}` : ''}`}>
            <Header />
            <Main>
                <ProjectContainer />
            </Main>
            {!slideOut && (
                <>
                    <a
                        className={`navigator-left ${theme === 'light' ? 'theme-color-dark' : 'theme-color-light'}`}
                        onClick={() => handleNavigate('/')}
                    >
                        <span><BsChevronLeft /></span> <i>Home</i>
                    </a>
                    <a
                        className={`navigator-right ${theme === 'light' ? 'theme-color-dark' : 'theme-color-light'}`}
                        onClick={() => handleNavigate('/skills')}
                    >
                        <i>Skills</i> <span><BsChevronRight /></span>
                    </a>
                </>
            )}
            <Footer />
        </div>
    )
}

export default Projects;
