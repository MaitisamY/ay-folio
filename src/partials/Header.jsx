import '../styles/header.css'
import LOGO from '../assets/profile-img.png'
import { useTheme } from '../context/ThemeContext'
import { Link } from 'react-router-dom'
import { BsSun, BsMoon } from 'react-icons/bs'
import Image from '../components/Image'

export default function Header() {

    const { theme, toggleTheme } = useTheme()

    return (
        <header>
            <Link to="/" className={`link ${theme === 'light' ? 'theme-color-dark' : 'theme-color-light'}`}>
                {`{ay-folio}`}
            </Link>
            <Image image={LOGO} altText="logo" />
            <a className="theme-link" onClick={toggleTheme}>
                {theme === 'light' ? <BsSun size={24} /> : <BsMoon size={24} />}
            </a>
        </header>
    )
}
