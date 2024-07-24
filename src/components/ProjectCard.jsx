import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';
import { BsBoxArrowUpRight, BsGithub, BsPostcard, BsX } from 'react-icons/bs';

export default function ProjectCard({ 
    id,
    variants,
    selectedId,
    onSelection,
    onClose,
    projectName,
    projectImage,
    projectImageAlt,
    projectURL,
    projectLink, 
    projectGithub,
    projectDescription
}) {
    const { theme } = useTheme();

    return (
        <>
            <motion.div 
                className="project-card"
                style={{ boxShadow: theme === 'light' ? '0 0 8px -2px rgba(0, 0, 0, 0.2)' : '0 0 8px 4px rgba(0, 0, 0, 0.2)'}} 
                variants={variants}  
                onClick={onSelection}
                whileHover={{ scale: 1.05 }}
                layoutId={id}
            >
                <img src={`/projects/${projectImage}`} alt={projectImageAlt} />
                <h3>{projectName}</h3>
                <p>{projectDescription.slice(0, 70)}...</p>
                <div className="project-card-button-holder">
                    <Link 
                        to={`/project/${id}`} 
                        className={`link ${theme === 'light' ? 'theme-color-dark' : 'theme-color-light'}`}
                        title="More info"
                    >
                        <BsPostcard size={24} />
                    </Link>
                    <Link 
                        to={projectURL} 
                        target="_blank"
                        className={`link ${theme === 'light' ? 'theme-color-dark' : 'theme-color-light'}`}
                        rel="noreferrer"
                        title="Preview"
                    >
                        <BsBoxArrowUpRight size={24} />
                    </Link>
                    {projectGithub !== 'null' && 
                        <Link 
                            to={projectGithub}
                            target="_blank" 
                            className={`link ${theme === 'light' ? 'theme-color-dark' : 'theme-color-light'}`}
                            rel="noreferrer"
                            title="Github repo"
                        >
                            <BsGithub size={24} />
                        </Link>
                    }
                </div>
            </motion.div>

            <AnimatePresence>
                {selectedId === id && (
                    <motion.div 
                        layoutId={selectedId} 
                        style={{ 
                            boxShadow: theme === 'light' ? '0 0 8px -2px rgba(0, 0, 0, 0.2)' : '0 0 8px 4px rgba(0, 0, 0, 0.2)', 
                            zIndex: 99999,
                            position: 'fixed',
                            top: '5%',
                            left: '10%',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            overflow: 'hidden',
                            width: '80%',
                            height: 'auto',
                            borderRadius: 'var(--border-radius-xl)',
                        }}
                    >
                        <motion.img 
                            src={`/projects/${projectImage}`} 
                            alt={projectImageAlt} 
                            style={{
                                maxWidth: '100%',
                                objectFit: 'contain',
                            }}
                        />
                        <motion.button 
                            onClick={onClose} 
                            style={{
                                position: 'absolute',
                                top: 0,
                                right: 0,
                                padding: '1rem',
                                border: 'none',
                                borderRadius: '0 var(--border-radius-xl) 0 50px',
                                cursor: 'pointer',
                                fontSize: '2.2rem',
                            }}
                        >
                            <BsX />
                        </motion.button>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
