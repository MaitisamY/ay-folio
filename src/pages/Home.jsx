import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../partials/Header';
import Main from '../partials/Main';
import IntroBlock from '../components/IntroBlock';
import { db } from '../backend/FirebaseConfig.js';
import { doc, getDoc } from "firebase/firestore";
import { useTheme } from '../context/ThemeContext';
import { BsChevronRight, BsChevronLeft } from 'react-icons/bs';
import '../styles/navigator.css';

function Home() {
    const { theme } = useTheme();
    const [slideOut, setSlideOut] = useState(false);
    const [slideDirection, setSlideDirection] = useState('left'); 
    const [profile, setProfile] = useState({});

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
            const docRef = doc(db, "admin", import.meta.env.VITE_ADMIN_ID);
            const docSnapshot = await getDoc(docRef);
            if (docSnapshot.exists()) {
                setProfile({ id: docSnapshot.id, ...docSnapshot.data() });
            } else {
                console.log("No such document!");
            }
        }
        getProfile();
    }, []);
    
    // Moved the title update inside the useEffect hook
    useEffect(() => {
        document.title = `Home - ${import.meta.env.VITE_SITE_TITLE}`;
    }, [profile]);

    if (!profile || Object.keys(profile).length === 0) { // Check if profile is empty object
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
                <IntroBlock>
                    <p>{`< ${profile.description[0]} />`}</p>
                    <p>{profile.description[1]}</p>
                </IntroBlock>
            </Main>
            {!slideOut && (
                <>
                    <a
                        className={`navigator-left ${theme === 'light' ? 'theme-color-dark' : 'theme-color-light'}`}
                        onClick={() => handleNavigate('/contact')}
                    >
                        <span><BsChevronLeft size={60} /></span> Contact
                    </a>
                    <a
                        className={`navigator-right ${theme === 'light' ? 'theme-color-dark' : 'theme-color-light'}`}
                        onClick={() => handleNavigate('/projects')}
                    >
                        Projects <span><BsChevronRight size={60} /></span>
                    </a>
                </>
            )}
        </div>
    )
}

export default Home;
