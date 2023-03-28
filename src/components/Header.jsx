import React, { useContext } from "react";
import '../styles/header.css'
import { Context } from "../Context.jsx";
import { Link } from "react-router-dom";

const Header = ({ showMenu, setShowMenu, search, setsearch }) => {
  const { userSesion } = useContext(Context)
  console.log(userSesion)
  const handleChange = (e) => {
    setsearch(e.target.value)
  }

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__toggle" onClick={() => setShowMenu(!showMenu)}>
          <i className="bx bx-menu" id="header-toggle"></i>
        </div>

        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHW-1xjPesUrVxmDkrQ05iDd9Y4LhtW-bfIyYpkWr7&s"
          alt="" className="header__img"
        />

        <div className="header__search bg-gray-100 ">
          <input onChange={handleChange} type="text" placeholder="Buscar" className="header__input bg-gray-100" value={search} />
          <i className="bx bx-search header__icon"></i>
        </div>

        <div className="header__map md:flex items-center hidden">
          <i className="bx bx-map text-3xl mr-2 text-yellow-amazon font-light"></i>
          <div className="text-sm font-medium">
            <h5>Deliver to</h5>
            <h6 className="text-yellow-amazon">Mexico</h6>
          </div>
        </div>
        
        <div className="flex items-center text-2xl gap-4 lg:gap-8">
          <Link to='/index/cart'>
            <i className="bx bx-cart"></i>
          </Link>
          <i className="bx bx-user"></i>
          {userSesion[0] && <div className="text-sm font-medium">
            <h5>{userSesion[0].name}</h5>
          </div>}
        </div>

      </div>
    </header>
  );
};

export default Header