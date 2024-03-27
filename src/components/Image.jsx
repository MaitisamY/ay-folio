
function Image({ image, altText, width, height }) {
    return (
        <img
            src={ image }
            alt={ altText }
            width={ width && width }
            height={ height && height }
        />
    )
}

export default Image
