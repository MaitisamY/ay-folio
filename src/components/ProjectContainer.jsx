import '../styles/project-card.css';
import { useState, useEffect } from 'react';
import { db } from '../backend/FirebaseConfig.js';
import { collection, getDocs } from 'firebase/firestore'; 
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { PROJECTS } from '../data/dataStore.js';

export default function ProjectContainer() {
    const [projects, setProjects] = useState(null);
    const [selectedId, setSelectedId] = useState(null);

    useEffect(() => {
        async function getProjects() {
            const timeout = new Promise((_, reject) => 
                setTimeout(() => reject(new Error("Request timed out")), 6000)
            );
    
            const fetchData = async () => {
                try {
                    const querySnapshot = await getDocs(collection(db, "projects"));
    
                    if (querySnapshot.empty) {
                        setProjects(PROJECTS);
                        return;
                    }
                    const all = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
                    setProjects(all);
                } catch (error) {
                    throw new Error("Error fetching projects from Firestore:", error);
                }
            };
    
            try {
                await Promise.race([fetchData(), timeout]);
            } catch (error) {
                console.error(error.message);
                // If there's an error fetching projects from Firestore, fallback to local data
                setProjects(PROJECTS);
            }
        }
    
        getProjects();
    }, []);

    const motionContainerProject = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2,
            },
        },
    };

    const projectCardItems = (index) => {
        return {
            hidden: { y: 20, opacity: 0 },
            visible: {
                y: 0,
                opacity: 1,
                transition: { duration: 0.5, delay: index * 0.4 },
            },
        };
    };
    
    return (
        <motion.div 
            className="project-card-container"
            variants={motionContainerProject}
            initial="hidden"
            animate="visible"
        >
            {
                projects === null ? (
                    <div className="mini-loader">
                        <div className="loader"></div>
                    </div>
                ) : (
                    projects.map((project, index) => (
                    <ProjectCard 
                        key={project.id}
                        id={project.id} 
                        selectedId={selectedId}
                        onSelection={() => setSelectedId(project.id)}
                        onClose={() => setSelectedId(null)}
                        variants={projectCardItems(index)}
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
        </motion.div>
    );
}
