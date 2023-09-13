import "./Header.css"
const Header = () => {
    return (
        <header className="header">
            <nav className="navbar">
                <ul className="navbar-list">
                    <div className="navbar-left">
                        <li className="navbar-item logo">
                            <div>Ritik</div>
                        </li>
                    </div>
                    <div className="navbar-right">
                        <li className="navbar-item">
                            <div>Projects</div>
                        </li>
                        <li className="navbar-item">
                            <div>About</div>
                        </li>
                        <li className="navbar-item">
                            <div>Blog</div>
                        </li>
                    </div>
                </ul>
            </nav>
        </header>
    )
}

export default Header
