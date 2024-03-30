/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
import { BsBoxArrowUpRight, BsGithub, BsEye } from 'react-icons/bs'
import { useTheme } from '../context/ThemeContext'

export default function ProjectCard({ 
    projectName,  
    projectImage,
    projectImageAlt,
    projectURL,
    projectLink, 
    projectGithub,
    projectDescription
}) {

    const { theme } = useTheme()

    return (
        <>
            <div className="project-card">

                <img src={`/projects/${projectImage}`} alt={projectImageAlt} />
                <h3>{projectName}</h3>
                <p>{projectDescription.slice(0, 70)}...</p>

                <div className="project-card-button-holder">
                
                    <Link 
                        to={projectLink} 
                        target="_blank"
                        className={`link 
                            ${theme === 'light' ? 'theme-color-dark' : 'theme-color-light'}`
                        }
                        rel="noreferrer"
                        title="Preview"
                    >
                        <BsEye size={24} />
                    </Link>
                    
                    <Link 
                        to={projectURL} 
                        className={`link 
                            ${theme === 'light' ? 'theme-color-dark' : 'theme-color-light'}`
                        }
                        title="Explore"
                    >
                        <BsBoxArrowUpRight size={24} />
                    </Link>

                    {
                        projectGithub !== 'null' && 
                        <Link 
                            to={projectGithub}
                            target="_blank" 
                            className={`link 
                                ${theme === 'light' ? 'theme-color-dark' : 'theme-color-light'}`
                            }
                            rel="noreferrer"
                            title="Github repo"
                        >
                            <BsGithub size={24} />
                        </Link>
                    }
                </div>

            </div>
        </>
    )
}
