
import '../styles/navigator.css';

import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { db } from '../backend/FirebaseConfig.js';
import { doc, getDoc } from "firebase/firestore";
import { useTheme } from '../context/ThemeContext';

import Header from '../partials/Header';
import Main from '../partials/Main';
import { BsChevronRight, BsChevronLeft } from 'react-icons/bs';
import SingleProject from '../components/SingleProject';
import Footer from '../partials/Footer.jsx';

import { PROJECTS } from '../data/dataStore';

function Project() {

    const { theme } = useTheme();
    const [project, setProject] = useState(null);

    const { id } = useParams();
    const thisProject = PROJECTS.find((project) => project.id === id);
    
    const [slideOut, setSlideOut] = useState(false);
    const [slideDirection, setSlideDirection] = useState('left'); 

    const navigate = useNavigate();

    const handleNavigate = (path) => {
        setSlideDirection(path === '/projects' ? 'right' : 'left'); 
        setSlideOut(true);
        setTimeout(() => {
            navigate(path);
        }, 500);
    };

    useEffect(() => {
        async function getProject() {
            try {
                const docRef = doc(db, "projects", id);
                const docSnapshot = await getDoc(docRef);
                if (docSnapshot.exists()) {
                    setProject({ id: docSnapshot.id, ...docSnapshot.data() });
                    console.log("Document data:", docSnapshot.data());
                } else {
                    console.log("No such document!");
                    setProject(thisProject); 
                }
            } catch (error) {
                console.error("Error fetching profile:", error);
                setProject(thisProject); 
            }
        }
    
        getProject();
    }, []);

    document.title = `Project - ${import.meta.env.VITE_SITE_TITLE}`;

    return (
        <div className={`page-container fadeIn ${slideOut ? `slide-out-${slideDirection}` : ''}`}>
            <Header />
            <Main>
            {
                project === null ? (
                    <div className="mini-loader">
                        <div className="loader"></div>
                    </div>
                ) : (
                    <SingleProject 
                        projectName={project?.name}
                        projectImage={project?.image}
                        projectImageAlt={project?.image_alt}
                        projectURL={project?.url}
                        projectGithub={project?.github}
                        projectDescription={project?.description}
                    />
                )
            }
            </Main>
            {!slideOut && (
                <>
                    <a
                        className={`navigator-left ${theme === 'light' ? 'theme-color-dark' : 'theme-color-light'}`}
                        onClick={() => handleNavigate('/projects')}
                    >
                        <span><BsChevronLeft /></span> <i>Projects</i>
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

export default Project;
