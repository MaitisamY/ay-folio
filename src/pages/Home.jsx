
import '../styles/navigator.css';

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { db } from '../backend/FirebaseConfig.js';
import { doc, getDoc } from "firebase/firestore";
import { useTheme } from '../context/ThemeContext';
import { BsChevronRight, BsChevronLeft } from 'react-icons/bs';

import Header from '../partials/Header';
import Main from '../partials/Main';
import IntroBlock from '../components/IntroBlock';

import { PROFILE } from '../data/dataStore.js';

function Home() {
    const { theme } = useTheme();
    const [slideOut, setSlideOut] = useState(false);
    const [slideDirection, setSlideDirection] = useState('left'); 
    const [profile, setProfile] = useState(null);

    const navigate = useNavigate();

    const handleNavigate = (path) => {
        setSlideDirection(path === '/contact' ? 'right' : 'left'); 
        setSlideOut(true);
        setTimeout(() => {
            navigate(path);
        }, 500);
    };

    useEffect(() => {
        async function getProfile() {
            try {
                const docRef = doc(db, "admin", import.meta.env.VITE_ADMIN_ID);
                const docSnapshot = await getDoc(docRef);
                if (docSnapshot.exists()) {
                    setProfile({ id: docSnapshot.id, ...docSnapshot.data() });
                    console.log("Document data:", docSnapshot.data());
                } else {
                    console.log("No such document!");
                    setProfile(PROFILE); 
                }
            } catch (error) {
                console.error("Error fetching profile:", error);
                setProfile(PROFILE); 
            }
        }
    
        getProfile();
    }, []);
    
    document.title = `Home - ${import.meta.env.VITE_SITE_TITLE}`;

    if (profile === null) { 
        return (
            <div className="loading-screen">
                <div className="loader"></div>
            </div>
        )
    }

    return (
        <div className={`page-container fadeIn ${slideOut ? `slide-out-${slideDirection}` : ''}`}>
            <Header />
            <Main>
                <IntroBlock>
                    <h1>
                        {`I'm`} {profile.name} <br />
                        <span
                            className={
                                theme === 'light'
                                    ? 'theme-bg-dark theme-color-light'
                                    : 'theme-bg-light theme-color-dark'
                            }
                        >
                            a {profile.designation}
                        </span>
                    </h1>
                </IntroBlock>
                {profile && profile.description && (
                    <IntroBlock>
                        <p>{`< ${profile.description[0]} />`}</p>
                        <p>{profile.description[1]}</p>
                    </IntroBlock>
                )}
            </Main>
            {!slideOut && (
                <>
                    <a
                        className={`navigator-left ${theme === 'light' ? 'theme-color-dark' : 'theme-color-light'}`}
                        onClick={() => handleNavigate('/contact')}
                    >
                        <span><BsChevronLeft /></span> <i>Contact</i>
                    </a>
                    <a
                        className={`navigator-right ${theme === 'light' ? 'theme-color-dark' : 'theme-color-light'}`}
                        onClick={() => handleNavigate('/projects')}
                    >
                        <i>Projects</i> <span><BsChevronRight /></span>
                    </a>
                </>
            )}
        </div>
    )
}

export default Home;
