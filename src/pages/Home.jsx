
import '../styles/navigator.css';

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { db } from '../backend/FirebaseConfig.js';
import { doc, getDoc } from "firebase/firestore";
import { useTheme } from '../context/ThemeContext';
import { BsChevronRight, BsChevronLeft } from 'react-icons/bs';
import { motion } from 'framer-motion';
 
import Header from '../partials/Header';
import Main from '../partials/Main';
import IntroBlock from '../components/IntroBlock';
import Footer from '../partials/Footer';

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
        const getProfile = async () => {
            const timeout = new Promise((_, reject) => 
                setTimeout(() => reject(new Error("Request timed out")), 6000)
            );
    
            const fetchData = async () => {
                const docRef = doc(db, "admin", import.meta.env.VITE_ADMIN_ID);
                const docSnapshot = await getDoc(docRef);
                if (docSnapshot.exists()) {
                    setProfile({ id: docSnapshot.id, ...docSnapshot.data() });
                    console.log("Document data:", docSnapshot.data());
                } else {
                    console.log("No such document!");
                    setProfile(PROFILE);
                }
            };
    
            try {
                await Promise.race([fetchData(), timeout]);
            } catch (error) {
                console.error(error.message);
                setProfile(PROFILE);
            }
        };
    
        getProfile();
    }, []);
      
    const item1 = {
        hidden: { x: 0, opacity: 0 },
        visible: {
          x: 0,
          opacity: 1
        }
    };

    const item2 = {
        hidden: { y: -100, opacity: 0 },
        visible: {
          y: 0,
          opacity: 1
        }
    };

    const item3 = {
        hidden: { y: 100, opacity: 0 },
        visible: {
          y: 0,
          opacity: 1
        }
    };
    
    
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
                <div className="intro-holder">
                <IntroBlock>
                    <motion.h1
                        variants={item1}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 0.3,
                            ease: [0, 0.71, 0.2, 1.01],
                                scale: {
                                type: "spring",
                                damping: 5,
                                stiffness: 100,
                                restDelta: 0.001,
                            }
                        }}
                    >
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
                    </motion.h1>
                </IntroBlock>
                {profile && profile.description && (
                    <IntroBlock>
                        <motion.p
                            variants={item2}
                            transition={{
                                duration: 0.5,
                                    scale: {
                                    delay: 1
                                }
                            }}
                        >{`< ${profile.description[0]} />`}</motion.p>
                        <motion.p
                            variants={item3}
                            transition={{
                                duration: 0.9,
                                    scale: {
                                    delay: 1.5
                                }
                            }}
                        >{profile.description[1]}</motion.p>
                    </IntroBlock>
                )}
                </div>
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
            <Footer />
        </div>
    )
}

export default Home;
