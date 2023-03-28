import React, { useContext } from "react";
import "../styles/sidebar.css";
import { Link } from "react-router-dom";
import { Context } from "../Context.jsx";

const Sidebar = ({ showMenu, setShowMenu }) => {
  const { setUserSesion } = useContext(Context)
  return (
    <div className={`nav ${showMenu && 'show-menu w-[200px]'}`}>
      <nav className="nav__container">
        <div>
          <div className="nav__list">
            <div className="nav__items" onClick={() => setShowMenu(!showMenu)}>
              <a href="#" className="nav__link">
                <i className="bx bx-menu nav__icon text-2xl"></i>
                <span className="nav__name">
                  <img
                    src="https://cdn.worldvectorlogo.com/logos/amazon-icon-1.svg"
                    alt="Amazon logo minimalista"
                    className="w-[30px]"
                  />
                </span>
              </a>
            </div>

            <div className="nav__items">
              <Link to='/index/' className="nav__link active">
                <i className="bx bx-home nav__icon"></i>
                <span className="nav__name">Inicio</span>
              </Link>
            </div>

            <div className="nav__items">
              <Link to='/index/product' className="nav__link">
                <i className="bx bx-shopping-bag nav__icon"></i>
                <span className="nav__name">Bolsa</span>
              </Link>
            </div>

            <div className="nav__items">
              <Link to="/index/location" className="nav__link">
                <i className="bx bx-map nav__icon"></i>
                <span className="nav__name">Ubicacion</span>
              </Link>
            </div>

            <div className="nav__items">
              <Link to="/index/payment" className="nav__link">
                <i className="bx bx-credit-card nav__icon"></i>
                <span className="nav__name">Tarjeta</span>
              </Link>
            </div>

            <div className="nav__items">
              <a href="https://github.com/LuisBrodely/amazon-redesign" className="nav__link" target='_blank'>
                <i className="bx bxl-github nav__icon"></i>
                <span className="nav__name">Repositorio</span>
              </a>
            </div>
          </div>
        </div>

        <Link to='/' onClick={() => setUserSesion("")} className="nav__link nav__logout">
          <i className="bx bx-log-out nav__icon"></i>
          <span className="nav__name">Cerrar Sesion</span>
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
