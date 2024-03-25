import '../styles/header.css'
import LOGO from '../assets/images/profile-img.png'
import { useTheme } from '../context/ThemeContext'

import { BsSun, BsMoon } from 'react-icons/bs'

export default function Home() {

    const { theme, toggleTheme } = useTheme()

    return (
        <header>
            <h2>ay-folio</h2>
            <img src={LOGO} alt="logo" />
            <a className="theme-link">{theme === 'light' ? <BsSun onClick={toggleTheme} /> : <BsMoon onClick={toggleTheme} />}</a>
        </header>
    )
}