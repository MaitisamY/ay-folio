export default function CodeBlock({ className, style, children }) {
    return (
        <code className={className} style={style}>
            { children }
        </code>
    )
}
