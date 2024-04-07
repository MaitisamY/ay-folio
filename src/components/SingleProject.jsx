
import '../styles/single-project.css';

import { useTheme } from '../context/ThemeContext';
import { BsBoxArrowUpRight, BsGithub } from 'react-icons/bs';

export default function SingleProject({ 
    projectName,
    projectImage,
    projectImageAlt,
    projectURL,
    projectGithub,
    projectDescription,
 }) {

    const { theme } = useTheme();
    console.log(projectGithub)

    return (
        <div className="single-project-card">

            <div className="product-details">
                <h1>{projectName}</h1>
                <p>{projectDescription}</p>
            </div>

            <div className="image-container">
                <img src={`/projects/${projectImage}`} alt={projectImageAlt} />
            </div>

            <div className="link-holder">
                <a 
                    href={projectURL} 
                    target="_blank" 
                    className={`${theme === 'light' ? 'theme-color-light theme-bg-dark' : 'theme-color-dark theme-bg-light'}`}
                    rel="noopener noreferrer"
                >
                    <BsBoxArrowUpRight /> Live Demo
                </a>
                {
                    projectGithub !== 'null' && (
                        <a
                            href={projectGithub} 
                            target="_blank" 
                            className={`${theme === 'light' ? 'theme-color-light theme-bg-dark' : 'theme-color-dark theme-bg-light'}`}
                            rel="noopener noreferrer"
                        >
                            <BsGithub /> Github Repo
                        </a>
                    )
                }
            </div>

        </div>
    )
}
