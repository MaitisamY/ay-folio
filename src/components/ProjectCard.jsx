/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
import { BsBoxArrowUpRight, BsGithub } from 'react-icons/bs'
import { useTheme } from '../context/ThemeContext'

export default function ProjectCard({ 
    projectName,  
    projectImage,
    projectImageAlt,
    projectLink, 
    projectGithub,
    projectDescription
}) {

    const { theme } = useTheme()

    return (
        <>
            <div className="project-card">

                <img src={projectImage} alt={projectImageAlt} />
                <h3>{projectName}</h3>
                <p>
                    {projectDescription.slice(0, 60)}... 
                    <a className={theme === 'light' ? 'theme-color-dark' : 'theme-color-light'} href={projectLink}>Read more</a>
                </p>

                <div className="project-card-button-holder">
                    <Link 
                        to={projectLink} 
                        target="_blank"
                        className={`link 
                            ${theme === 'light' ? 'theme-color-dark' : 'theme-color-light'}`
                        }
                        rel="noreferrer"
                        title="View Project"
                    >
                        <BsBoxArrowUpRight size={24} />
                    </Link>
                    {
                        projectGithub && 
                        <Link 
                            to={projectGithub}
                            target="_blank" 
                            className={`link 
                                ${theme === 'light' ? 'theme-color-dark' : 'theme-color-light'}`
                            }
                        >
                            <BsGithub size={24} />
                        </Link>
                    }
                </div>

            </div>
        </>
    )
}
