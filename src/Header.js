import "./Header.css";

const Header = () => {
  return <header>
    <nav className="main-nav">
        <div className="main-logo">
            تهران مو
        </div>
        <div className="nav-items">
            متروی تهران
        </div>
        <div className="nav-items">
            دیدنی های مناطق
        </div>
        <div className="nav-items">
            درباره ما
        </div>
        <div className="nav-items">
            ارتباط با ما
        </div>
    </nav>
  </header>;
};

export default Header;