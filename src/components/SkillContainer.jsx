import '../styles/skills.css';

import { FaHtml5, FaCss3Alt, FaBootstrap, FaJs, FaReact, FaNodeJs, FaPhp, FaGithub } from 'react-icons/fa';
import { DiPostgresql, DiMongodb, DiJqueryLogo, DiMysql, DiFirebase, DiGit, DiDocker, DiSass } from 'react-icons/di';
import { motion } from 'framer-motion';

const SkillContainer = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    return (
        <motion.div 
            className="skill-container"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <motion.div className="skill-card" variants={itemVariants}>
                <span className="html"><FaHtml5 /></span>
                <div className="skill-card-tooltip">
                    HTML5
                </div>
            </motion.div>
            <motion.div className="skill-card" variants={itemVariants}>
                <span className="css"><FaCss3Alt /></span>
                <div className="skill-card-tooltip">
                    CSS3
                </div>
            </motion.div>
            <motion.div className="skill-card" variants={itemVariants}>
                <span className="sass"><DiSass /></span>
                <div className="skill-card-tooltip">
                    Sass
                </div>
            </motion.div>
            <motion.div className="skill-card" variants={itemVariants}>
                <span className="bootstrap"><FaBootstrap /></span>
                <div className="skill-card-tooltip">
                    Bootstrap
                </div>
            </motion.div>
            <motion.div className="skill-card" variants={itemVariants}>
                <span className="js"><FaJs /></span>
                <div className="skill-card-tooltip">
                    JavaScript
                </div>
            </motion.div>
            <motion.div className="skill-card" variants={itemVariants}>
                <span className="jquery"><DiJqueryLogo /></span>
                <div className="skill-card-tooltip">
                    jQuery
                </div>
            </motion.div>
            <motion.div className="skill-card" variants={itemVariants}>
                <span className="react"><FaReact /></span>
                <div className="skill-card-tooltip">
                    React
                </div>
            </motion.div>
            <motion.div className="skill-card" variants={itemVariants}>
                <span className="node"><FaNodeJs /></span>
                <div className="skill-card-tooltip">
                    Node.js
                </div>
            </motion.div>
            <motion.div className="skill-card" variants={itemVariants}>
                <span className="php"><FaPhp /></span>
                <div className="skill-card-tooltip">
                    PHP
                </div>
            </motion.div>
            <motion.div className="skill-card" variants={itemVariants}>
                <span className="postgres"><DiPostgresql /></span>
                <div className="skill-card-tooltip">
                    PostgreSQL
                </div>
            </motion.div>
            <motion.div className="skill-card" variants={itemVariants}>
                <span className="mongodb"><DiMongodb /></span>
                <div className="skill-card-tooltip">
                    MongoDB
                </div>
            </motion.div>
            <motion.div className="skill-card" variants={itemVariants}>
                <span className="mysql"><DiMysql /></span>
                <div className="skill-card-tooltip">
                    MySQL
                </div>
            </motion.div>
            <motion.div className="skill-card" variants={itemVariants}>
                <span className="firebase"><DiFirebase /></span>
                <div className="skill-card-tooltip">
                    Firebase
                </div>
            </motion.div>
            <motion.div className="skill-card" variants={itemVariants}>
                <span className="git"><DiGit /></span>
                <div className="skill-card-tooltip">
                    Git
                </div>
            </motion.div>
            <motion.div className="skill-card" variants={itemVariants}>
                <span className="docker"><DiDocker /></span>
                <div className="skill-card-tooltip">
                    Docker
                </div>
            </motion.div>
            <motion.div className="skill-card" variants={itemVariants}>
                <span className="github"><FaGithub /></span>
                <div className="skill-card-tooltip">
                    GitHub
                </div>
            </motion.div>
        </motion.div>
    );
}

export default SkillContainer