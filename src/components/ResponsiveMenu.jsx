
import { useState } from 'react';
import { Link } from 'react-router-dom';

import { FaBars } from 'react-icons/fa';
import { BsX } from 'react-icons/bs';

import LOGO from '../assets/profile-img.png';

export default function ResponsiveMenu() {

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(prev => !prev);
    }

    return (
        <>
            <div className="responsive-menu">
                <img src={LOGO} alt="profile-image" />
                <span onClick={toggleMenu}><FaBars size={24} /></span>
            </div>
            {
                menuOpen && (
                    <div className="responsive-dropdown">
                        <a className="close" onClick={toggleMenu}><BsX size={40} /></a>
                        <ul>
                            <li>
                                <Link className="link" to="/">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link className="link" to="/skills">
                                    Skills
                                </Link>
                            </li>
                            <li>
                                <Link className="link" to="/projects">
                                    Projects
                                </Link>
                            </li>
                            <li>
                                <Link className="link" to="/contact">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                )
            }
        </>
    )
}
