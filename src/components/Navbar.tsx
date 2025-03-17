import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Edible Marketplace
        </Link>
        {/* Toggler Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* Collapsible Content */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/destination">
                Destinations
              </Link>
            </li>


            <li className="nav-item">
              <Link className="nav-link" to="/blog">
                Blogs
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/contact-support">
                Contact
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link className="btn btn-primary" to="/login">
                Login/Register
              </Link>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;