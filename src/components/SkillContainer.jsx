import { FaHtml5, FaCss3Alt, FaBootstrap, FaJs, FaReact, FaNodeJs, FaLaravel, FaPhp, FaGithub } from 'react-icons/fa';

import '../styles/skills.css';

export default function SkillContainer() {
    return (
        <div className="skill-container">
            <div className="skill-card">
                <span className="html"><FaHtml5 /></span>
            </div>
            <div className="skill-card">
                <span className="css"><FaCss3Alt /></span>
            </div>
            <div className="skill-card">
                <span className="bootstrap"><FaBootstrap /></span>
            </div>
            <div className="skill-card">
                <span className="js"><FaJs /></span>
            </div>
            <div className="skill-card">
                <span className="react"><FaReact /></span>
            </div>
            <div className="skill-card">
                <span className="node"><FaNodeJs /></span>
            </div>
            <div className="skill-card">
                <span className="laravel"><FaLaravel /></span>
            </div>
            <div className="skill-card">
                <span className="php"><FaPhp /></span>
            </div>
            <div className="skill-card">
                <span className="github"><FaGithub /></span>
            </div>
        </div>
    )
}
