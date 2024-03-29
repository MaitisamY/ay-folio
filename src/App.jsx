import { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const Home = lazy(() => import('./pages/Home'))
const Projects = lazy(() => import('./pages/Projects'))
const Skills = lazy(() => import('./pages/Skills'))
const Contact = lazy(() => import('./pages/Contact'))
import { useTheme } from './context/ThemeContext'
import CodeBlock from './components/CodeBlock'

export default function App() {
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
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/skills" element={<Skills />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </Router>
                <CodeBlock />
            </Suspense>
        </div>
    )
}