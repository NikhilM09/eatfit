import Logo from "../assets/images/png-clipart-logo-brand-font-food-product-restaurant-logo-design-food-label-thumbnail-removebg-preview.png";
import {Link} from "react-router-dom"
import useOnline from "../hooks/useOnline";


const Header = () => {
  const isOnline = useOnline();
  console.log("online status", isOnline);
  return (
    <nav className="navbar p-0 navbar-expand-sm bg-light navbar-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="">
          <img src={Logo} style={{ width: "80px" }} />
          <span>{isOnline? "🟢" : "🔴"}</span>
        </Link>     
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="collapsibleNavbar"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="">
                Home🛖
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About Us😶‍🌫️
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact us📞
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/instamart">
                Instamart🪴
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cart">
                Cart🛒
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
