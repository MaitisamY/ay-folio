
import '../styles/single-project.css';

import { useTheme } from '../context/ThemeContext';

export default function SingleProject({ ...props }) {

    const { theme } = useTheme();

    return (
        <div className="single-project-card">

            <div className="product-details">
                <h1>{props.projectName}</h1>
                <p>{props.projectDescription}</p>
            </div>

            <div className="image-container">
                <img src={`/projects/${props.projectImage}`} alt={props.projectImageAlt} />
            </div>

            <div className="link-holder">
                <a 
                    href={props.projectURL} 
                    target="_blank" 
                    className={`${theme === 'light' ? 'theme-color-light theme-bg-dark' : 'theme-color-dark theme-bg-light'}`}
                    rel="noopener noreferrer"
                >
                    Live Demo
                </a>
                <a
                    href={props.projectGithub} 
                    target="_blank" 
                    className={`${theme === 'light' ? 'theme-color-light theme-bg-dark' : 'theme-color-dark theme-bg-light'}`}
                    rel="noopener noreferrer"
                >
                    Github Repo
                </a>
            </div>

        </div>
    )
}
