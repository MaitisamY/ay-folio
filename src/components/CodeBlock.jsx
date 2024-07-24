import { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { CODE_BLOCKS } from '../data/dataStore.js';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';

export default function CodeBlock() {
    const { HTML, REACT } = CODE_BLOCKS;
    const { theme } = useTheme();
    const CLASS_NAME = theme === 'light' ? 'theme-color-dark' : 'theme-color-light';

    const [htmlIndex, setHtmlIndex] = useState(0);
    const [reactIndex, setReactIndex] = useState(0);

    useEffect(() => {
        const htmlInterval = setInterval(() => {
            setHtmlIndex((prev) => (prev + 1) % HTML.length);
        }, 6000);

        const reactInterval = setInterval(() => {
            setReactIndex((prev) => (prev + 1) % REACT.length);
        }, 7000);

        return () => {
            clearInterval(htmlInterval);
            clearInterval(reactInterval);
        };
    }, [HTML.length, REACT.length]);

    const eraseVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0, transition: { duration: 1.5 } },
        exit: { opacity: 0, x: 20, transition: { duration: 1.5, delay: 1.5 } },
    };

    return (
        <>
            <CodeBlockWrapperOne>
                <AnimatePresence mode="wait">
                    <motion.code
                        key={HTML[htmlIndex]}
                        className={CLASS_NAME}
                        variants={eraseVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        {HTML[htmlIndex]}
                    </motion.code>
                </AnimatePresence>
            </CodeBlockWrapperOne>

            <CodeBlockWrapperTwo>
                <AnimatePresence mode="wait">
                    <motion.code
                        key={REACT[reactIndex]}
                        className={CLASS_NAME}
                        variants={eraseVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        {REACT[reactIndex]}
                    </motion.code>
                </AnimatePresence>
            </CodeBlockWrapperTwo>
        </>
    );
}

const CodeBlockWrapperOne = styled.div`
    position: absolute;
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
    font-size: var(--font-size-m);
    font-weight: var(--font-weight-bold);
    letter-spacing: var(--letter-spacing-3xl);
    line-height: var(--line-height-4xl);
    z-index: -1;
    opacity: var(--opacity-02);
    top: var(--top-20);
    left: var(--left-10);
    transform: rotate(-90deg);
`;

const CodeBlockWrapperTwo = styled.div`
    position: absolute;
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
    font-size: var(--font-size-m);
    font-weight: var(--font-weight-bold);
    letter-spacing: var(--letter-spacing-3xl);
    line-height: var(--line-height-4xl);
    z-index: -1;
    opacity: var(--opacity-02);
    top: var(--top-70);
    right: var(--right-10);
    transform: rotate(90deg);
`;
