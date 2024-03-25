
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import Contact from './pages/Contact'
import { useTheme } from './context/ThemeContext'

export default function App() {

    const { theme } = useTheme()

    return (
        <div id="app" className={theme === 'light' ? 'light' : 'dark'}>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/skills" element={<Skills />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </Router>
        </div>
    )
}