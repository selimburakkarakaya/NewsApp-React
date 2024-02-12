
const Navbar = ({ setCategory }) => {
    return (
        <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    <span className="badge bg-light text-dark fs-4">
                        Latest <span className="badge bg-danger">News</span>
                    </span>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        {/* <li className="nav-item" style={{ cursor: "pointer" }}>
                            <div className="nav-link active" aria-current="page" onClick={() => setCategory("general")}>General</div>
                        </li> */}
                        <li className="nav-item" style={{ cursor: "pointer" }}>
                            <div className="nav-link" onClick={() => setCategory("business")}>Business</div>
                        </li>
                        <li className="nav-item" style={{ cursor: "pointer" }}>
                            <div className="nav-link" onClick={() => setCategory("technology")}>Technology</div>
                        </li>
                        <li className="nav-item" style={{ cursor: "pointer" }}>
                            <div className="nav-link" onClick={() => setCategory("science")}>Science</div>
                        </li>
                        <li className="nav-item" style={{ cursor: "pointer" }}>
                            <div className="nav-link" onClick={() => setCategory("health")}>Health</div>
                        </li>
                        <li className="nav-item" style={{ cursor: "pointer" }}>
                            <div className="nav-link" onClick={() => setCategory("sports")}>Sports</div>
                        </li>
                        <li className="nav-item" style={{ cursor: "pointer" }}>
                            <div className="nav-link" onClick={() => setCategory("entertainment")}>Entertainment</div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar