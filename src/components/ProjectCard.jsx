/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { BsBoxArrowUpRight, BsGithub, BsPostcard } from 'react-icons/bs'
import { useTheme } from '../context/ThemeContext'
import { db } from '../backend/FirebaseConfig.js';
import { doc, getDoc } from "firebase/firestore";
import SingleProject from './SingleProject.jsx';

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
            <div 
                className="project-card"
                style={{ boxShadow: theme === 'light' ? '0 0 8px -2px rgba(0, 0, 0, 0.2)' : '0 0 8px 4px rgba(0, 0, 0, 0.2)'}}    
            >

                <img src={`/projects/${projectImage}`} alt={projectImageAlt} />
                <h3>{projectName}</h3>
                <p>{projectDescription.slice(0, 70)}...</p>

                <div className="project-card-button-holder">
                
                    <Link 
                        to={id} 
                        className={`link 
                            ${theme === 'light' ? 'theme-color-dark' : 'theme-color-light'}`
                        }
                        title="More info"
                    >
                        <BsPostcard size={24} />
                    </Link>
                    
                    <Link 
                        to={projectURL} 
                        target="_blank"
                        className={`link 
                            ${theme === 'light' ? 'theme-color-dark' : 'theme-color-light'}`
                        }
                        rel="noreferrer"
                        title="Preview"
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
