
export default function SingleProject({ ...props }) {
    return (
        <div className="single-project-card">
            <div className="image-container">
                <img src={props.image} alt={props.imageAlt} />
            </div>
            <div className="product-details">
                <h1>{props.title}</h1>
                <p>{props.description}</p>
            </div>
        </div>
    )
}
