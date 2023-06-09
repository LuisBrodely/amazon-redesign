import React, {useContext} from "react";
import bgLogin from '../assets/bg-login.svg'
import { Link } from "react-router-dom";
import { useState } from "react";
import {Context} from "../Context.jsx";

const Login = () => {
  const {login} = useContext(Context)
  const [user, setUser] = useState({
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user)
    login(user)
  };

  return (
    <section className="flex flex-col md:flex-row h-screen items-center">
      <div
        className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
        flex items-center justify-center"
      >
        <div className="w-full h-100">
          <img
            src="https://www.serfadu.com/wp-content/uploads/2020/10/amazon.png"
            className="lg:w-[130px] w-[160px]"
            alt="Amazon logo"
          />
          <h1 className="text-2xl md:text-3xl font-bold leading-tight mt-8 lg:mt-12">
            Iniciar Sesion
          </h1>

          <form className="mt-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-gray-700">Correo electronico</label>
              <input
                onChange={handleChange}
                type="email"
                name="email"
                placeholder="Ingresa tu correo electronico"
                className="w-full px-4 py-3 rounded-lg bg-gray-100 mt-2 border focus:border-yellow-amazon focus:bg-white focus:outline-none"
                required
              />
            </div>

            <div className="mt-4">
              <label className="block text-gray-700">Contraseña</label>
              <input
                onChange={handleChange}
                type="password"
                name="password"
                placeholder="Ingresa tu contraseña"
                className="w-full px-4 py-3 rounded-lg bg-gray-100 mt-2 border focus:border-yellow-amazon
                focus:bg-white focus:outline-none"
                required
              />
            </div>

            <div className="text-right mt-2">
              <a
                href="#"
                className="text-sm font-semibold text-gray-700 hover:text-yellow-amazon focus:text-yellow-secondary"
              >
                ¿Olvidaste tu contraseña?
              </a>
            </div>

            <button
              type="submit"
              className="w-full block bg-yellow-amazon hover:bg-yellow-secondary focus:bg-yellow-secondary text-white font-semibold rounded-lg
              px-4 py-3 mt-6"
            >
              Iniciar Sesion
            </button>
          </form>

          <hr className="my-6 border-gray-300 w-full" />

          <button
            type="button"
            className="w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300"
          >
            <div className="flex items-center justify-center">
              <img
                src="https://rotulosmatesanz.com/wp-content/uploads/2017/09/2000px-Google_G_Logo.svg_.png"
                className="w-6 h-6"
                alt="Google logo"
              />
              <span className="ml-4">Iniciar Sesion con Google</span>
            </div>
          </button>

          <p className="mt-8">
            ¿No tienes una cuenta?{" "}
            <Link
              to="/register"
              className="text-yellow-amazon hover:text-yellow-secondary font-semibold"
            >
              Registrate
            </Link>
          </p>
        </div>
      </div>
      <div className="bg-[#F8F8F8] hidden lg:flex lg:justify-end w-full md:w-1/2 xl:w-2/3 h-screen">
        <img
          src={bgLogin}
          alt="Imagen random"
          className="object-contain mt-4 mb-4 w-[800px]"
        />
      </div>
    </section>
  );
};

export default Login;
