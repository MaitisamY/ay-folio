/* eslint-disable react/no-unknown-property */
import { lazy, Suspense } from 'react'
const Header = lazy(() => import('../partials/Header'))
const Main = lazy(() => import('../partials/Main'))
const IntroBlock = lazy(() => import('../components/IntroBlock'))
const Image = lazy(() => import('../components/Image'))
import LOGO from '../assets/profile-img.png'
import { PROFILE } from '../data/dataStore'
import { useTheme } from '../context/ThemeContext'
import { Link } from 'react-router-dom'
import { BsSun, BsMoon } from 'react-icons/bs'

export default function Home() {
    const { theme, toggleTheme } = useTheme();
    
    return (
        <Suspense 
            fallback={
                <div className="loading-screen">
                    <div className="loader"></div>
                </div>
            }
        >
        <Header>
            <Link to="/" className={`link ${theme === 'light' ? 'theme-color-dark' : 'theme-color-light'}`}>
                {`{ay-folio}`}
            </Link>
            <Image image={LOGO} altText="logo" />
            <a className="theme-link" onClick={toggleTheme}>
                {theme === 'light' ? <BsSun size={24} /> : <BsMoon size={24} />}
            </a>
        </Header>
        <Main>
            <IntroBlock>
            {
                PROFILE.map((profile, index) => (
                    <h1 key={index}>
                        I'm {profile.name} <br /> 
                        <span className={
                            theme === 'light' 
                            ? 'theme-bg-dark theme-color-light' 
                            : 'theme-bg-light theme-color-dark'
                            }
                        >
                            a {profile.role}
                        </span>
                    </h1>
                ))
            }
            </IntroBlock>
            <IntroBlock>
            {
                PROFILE.map((profile, index) => (
                    <>
                        <p key={index}>{`< ${profile.description[0]} />`}</p>
                        <p key={index}>{profile.description[1]}</p>
                    </>
                ))
            }    
            </IntroBlock>
        </Main>
        </Suspense>
    )
}