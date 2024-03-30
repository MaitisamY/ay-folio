import '../styles/project-card.css';
import { useState, useEffect } from 'react';
import { db } from '../backend/FirebaseConfig.js';
import { collection, getDocs } from "firebase/firestore"; 
import ProjectCard from './ProjectCard';

export default function ProjectContainer() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function getProjects() {
            try {
                const querySnapshot = await getDocs(collection(db, "projects"));
                const all = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
                setProjects(all);
            } catch (error) {
                console.error("Error fetching projects:", error);
            } finally {
                setLoading(false); 
            }
        }
        getProjects(); 
    }, [projects]); 

    return (
        <div className="project-card-container">
            {loading ? ( 
                <div className="mini-loader">Loading...</div>
            ) : (
                projects.map((project) => (
                    <ProjectCard 
                        key={project.id} 
                        projectName={project.name}
                        projectImage={project.image}
                        projectImageAlt={project.image_alt}
                        projectLink={project.url}
                        projectGithub={project.github}
                        projectDescription={project.description}
                    />
                ))
            )}
        </div>
    );
}
