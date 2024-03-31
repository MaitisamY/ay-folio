
import { useTheme } from '../context/ThemeContext'

export default function CodeBlock() {
    
    const { theme } = useTheme();
    const CLASS_NAME = theme === 'light' ? 'theme-color-dark' : 'theme-color-light';

    return (
        <>
            <code 
                className={CLASS_NAME}
                style={{ top: 'var(--top-20)', left: 'var(--left-10)', transform: 'rotate(-90deg)'}}
            >
                {`<header>`}
            </code>
            <code 
                className={CLASS_NAME}
                style={{ top: 'var(--top-70)', right: 'var(--right-10)', transform: 'rotate(90deg)'}}
            >
                {`<footer>`}
            </code>
        </>
    )
}
