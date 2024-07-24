
import '../styles/intro-block.css'
import { motion } from 'framer-motion'
 
export default function IntroBlock({ children }) {

    const container = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: {
            delayChildren: 0.5,
            staggerChildren: 0.8
          }
        }
      };

    return (
        <motion.div 
            className="intro-block" 
            variants={container} 
            initial="hidden" 
            animate="visible"
        >
            { children }
        </motion.div>
    )
}
