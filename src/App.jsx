
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import Contact from './pages/Contact'
import { useTheme } from './context/ThemeContext'
import CodeBlock from './components/CodeBlock'

export default function App() {
    const { theme } = useTheme();
    const CLASS_NAME = theme === 'light' ? 'theme-color-dark' : 'theme-color-light';

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
            <CodeBlock 
                className={CLASS_NAME}
                style={{ top: 'var(--top-20)', left: 'var(--left-10)'}}
            >
                {`<header>`}
            </CodeBlock>
            <CodeBlock 
                className={CLASS_NAME}
                style={{ top: 'var(--top-30)', left: 'var(--left-30)'}}
            >
                {`<main>`}
            </CodeBlock>
            <CodeBlock 
                className={CLASS_NAME}
                style={{ top: 'var(--top-50)', left: 'var(--left-10)'}}
            >
                {`<footer>`}
            </CodeBlock>
            <CodeBlock 
                className={CLASS_NAME}
                style={{ top: 'var(--top-30)', left: 'var(--left-50)'}}
            >
                {`<h1>`}
            </CodeBlock>
            <CodeBlock 
                className={CLASS_NAME}
                style={{ top: 'var(--top-20)', right: 'var(--right-10)'}}
            >
                {`<p>`}
            </CodeBlock>
            <CodeBlock 
                className={CLASS_NAME}
                style={{ top: 'var(--top-40)', right: 'var(--right-10)'}}
            >
                {`<code>`}
            </CodeBlock>
            <CodeBlock 
                className={CLASS_NAME}
                style={{ top: 'var(--top-70)', right: 'var(--right-20)'}}
            >
                {`</main>`}
            </CodeBlock>
            <CodeBlock 
                className={CLASS_NAME}
                style={{ top: 'var(--top-80)', right: 'var(--right-50)'}}
            >
                {`</header>`}
            </CodeBlock>
        </div>
    )
}