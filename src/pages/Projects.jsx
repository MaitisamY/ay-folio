import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../partials/Header';
import Main from '../partials/Main';
import { PROFILE } from '../data/dataStore';
import { useTheme } from '../context/ThemeContext';
import { BsChevronRight, BsChevronLeft } from 'react-icons/bs';
import '../styles/navigator.css';
import ProjectContainer from '../components/ProjectContainer';

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

    document.title = `Projects - ${PROFILE[0].name}`;

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
                        <span><BsChevronLeft size={60} /></span> Home
                    </a>
                    <a
                        className={`navigator-right ${theme === 'light' ? 'theme-color-dark' : 'theme-color-light'}`}
                        onClick={() => handleNavigate('/skills')}
                    >
                        Skills <span><BsChevronRight size={60} /></span>
                    </a>
                </>
            )}
        </div>
    )
}

export default Projects;
