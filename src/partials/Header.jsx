import '../styles/header.css'
import Image from '../components/Image'
import LOGO from '../assets/profile-img.png'
import { useTheme } from '../context/ThemeContext'
import { BsSun, BsMoon } from 'react-icons/bs'
import { useLocation } from 'react-router-dom'

export default function Header() {
    const { theme, toggleTheme } = useTheme();
    const location = useLocation();

    return (
        <header>
            <h3 className={`page-title ${theme === 'light' ? 'theme-color-dark' : 'theme-color-light'}`}>
                {  
                    location.pathname === '/projects' ? `< Projects />`
                    : location.pathname === '/skills' ? `< Skills />`
                    : location.pathname === '/contact' ? `< Contact />`
                    : `< Home />`
                }
            </h3>
            <Image image={LOGO} altText="logo" />
            <a className="theme-link" onClick={toggleTheme}>
                {theme === 'light' ? <BsSun size={24} /> : <BsMoon size={24} />}
            </a>
        </header>
    )
}
