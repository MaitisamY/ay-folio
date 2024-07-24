import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { BsX } from 'react-icons/bs';
import { motion, AnimatePresence } from 'framer-motion';

import LOGO from '../assets/profile.png';

const menuVariants = {
    open: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            stiffness: 75,
            damping: 15,
            staggerChildren: 0.6, // Increased delay between staggered items
        }
    },
    closed: {
        opacity: 0,
        y: "-100%",
        transition: {
            type: "spring",
            stiffness: 75,
            damping: 15,
        }
    }
};

const itemVariants = {
    open: {
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 75, damping: 15 }
    },
    closed: {
        opacity: 0,
        y: 50,
        transition: { type: "spring", stiffness: 75, damping: 15 }
    }
};

export default function ResponsiveMenu() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(prev => !prev);
    }

    return (
        <>
            <div className="responsive-menu">
                <img src={LOGO} alt="profile-image" />
                <span onClick={toggleMenu}>
                    <FaBars size={30} />
                </span>
            </div>
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        className="responsive-dropdown"
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={menuVariants}
                    >
                        <a className="close" onClick={toggleMenu}>
                            <BsX size={40} />
                        </a>
                        <motion.ul>
                            <motion.li variants={itemVariants}>
                                <Link className="link" to="/">
                                    Home
                                </Link>
                            </motion.li>
                            <motion.li variants={itemVariants}>
                                <Link className="link" to="/projects">
                                    Projects
                                </Link>
                            </motion.li>
                            <motion.li variants={itemVariants}>
                                <Link className="link" to="/skills">
                                    Skills
                                </Link>
                            </motion.li>
                            <motion.li variants={itemVariants}>
                                <Link className="link" to="/contact">
                                    Contact
                                </Link>
                            </motion.li>
                        </motion.ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
