import image from '../assets/news.jpeg';

const NewsItem = ({ title, description, src, url }) => {
    return (
        <div className="card bg-dark text-light mb-3 my-3 mx-3 px-2 py-2 d-inline-block" style={{ maxWidth: "350px" }}>
            <img src={src ? src : image} style={{ height: "200px" }} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{title.slice(0, 50) + "..."}</h5>
                <hr />
                <p className="card-text">{description ? description.slice(0, 80) + "..." : "Click the 'Read More' button for more details and continued news content."}</p>
                <a href={url} target="_blank" className="btn btn-primary">Read More</a>
            </div>
        </div>
    )
}

export default NewsItem