import { lazy, Suspense } from 'react';
import { useTheme } from './context/ThemeContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

const Home = lazy(() => import('./pages/Home'));
const Projects = lazy(() => import('./pages/Projects'));
const Skills = lazy(() => import('./pages/Skills'));
const Contact = lazy(() => import('./pages/Contact'));
const Project = lazy(() => import('./pages/Project'));
import CodeBlock from './components/CodeBlock';

function App() {
    const { theme } = useTheme();

    return (
        <div id="app" className={theme === 'light' ? 'light' : 'dark'}>
            <Suspense 
                fallback={
                    <div className="loading-screen">
                        <div className="loader"></div>
                    </div>
                }
            >
                <Router>
                    <AnimatePresence>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/projects" element={<Projects />} />
                            <Route path="/project" element={<Projects />} />
                            <Route path="/project/:id" element={<Project />} />
                            <Route path="/skills" element={<Skills />} />
                            <Route path="/contact" element={<Contact />} />
                        </Routes>
                    </AnimatePresence>
                </Router>
                <CodeBlock />
            </Suspense>
        </div>
    );
}

export default App;
