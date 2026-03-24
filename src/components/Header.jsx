import '../styles/Header.css';

function Header() {
    
    
    return(
        <header className="header">
            <div className="header-container">
                <div className="logo">
                    <a href="/k3rn3l-dev">k3rn3l-dev</a>
                </div>
                <nav className="nav-links">
                    <a href="#about"> About</a>
                    <a href="#projects"> Projects</a>
                    <a href="#contact"> Contact</a>
                </nav>
            
            </div>
        </header>
    );
}

export default Header;