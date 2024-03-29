import '../styles/project-card.css';
import ProjectCard from './ProjectCard';
import { PROJECTS } from '../data/dataStore';

export default function ProjectContainer() {
    return (
        <div className="project-card-container">
            {
                PROJECTS.map((project) => (
                    <ProjectCard 
                        key={project.id} 
                        projectName={project.name}
                        projectImage={project.image}
                        projectImageAlt={project.imageAlt}
                        projectLink={project.url}
                        projectGithub={project.github}
                        projectDescription={project.description}
                     />
            ))}
        </div>
    )
}
