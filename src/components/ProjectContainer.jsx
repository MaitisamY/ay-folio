
import '../styles/project-card.css';

import { useState, useEffect } from 'react';
import { db } from '../backend/FirebaseConfig.js';
import { collection, getDocs } from "firebase/firestore"; 

import ProjectCard from './ProjectCard';
import { PROJECTS } from '../data/dataStore.js';

export default function ProjectContainer() {

    const [projects, setProjects] = useState(null);

    useEffect(() => {
        async function getProjects() {
            try {
                const querySnapshot = await getDocs(collection(db, "projects"));

                if(querySnapshot.empty) {
                    setProjects(PROJECTS);
                    return;
                }
                const all = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
                setProjects(all);
            } catch (error) {
                console.error("Error fetching projects from Firestore:", error);
                // If there's an error fetching projects from Firestore, fallback to local data
                setProjects(PROJECTS);
            }
        }
        getProjects(); 
    }, []); 
    
    return (
        <div className="project-card-container">
            {
                projects === null ? (
                    <div className="mini-loader">
                        <div className="loader"></div>
                    </div>
                ) : (
                    projects.map((project) => (
                    <ProjectCard 
                        key={project.id}
                        id={project.id} 
                        projectName={project.name}
                        projectImage={project.image}
                        projectImageAlt={project.image_alt}
                        projectURL={project.url}
                        projectLink={project.view_link}
                        projectGithub={project.github}
                        projectDescription={project.description}
                    />
                ))
            )}
        </div>
    );
}
