import React, { useContext } from "react";
import { useState } from "react";
import { Context } from "../Context.jsx";

const Location = () => {
  const { addAddress, userSesion } = useContext(Context)

  let id = () => {
    if (userSesion[0]) {
      return { id } = userSesion[0]
    }
  }

  const [adress, setAdress] = useState({
    state: "",
    city: '',
    street: "",
    houseNumber: '',
    zipCode: '',
    clientId: id
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAdress({ ...adress, [name]: value });
    console.log(name, value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(adress);
    addAddress(adress)
  };

  return (
    <div className="isolate bg-white py-24 px-6 sm:py-32 lg:px-8">
      <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
        <svg
          className="relative left-1/2 -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-40rem)] sm:h-[42.375rem]"
          viewBox="0 0 1155 678"
        >
          <path
            fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
            fillOpacity=".3"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FEAA2B" />
              <stop offset={1} stopColor="#FF80B5" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Ubicación
        </h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          Ingresa tu ubicacion para tu envio
        </p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="mx-auto mt-16 max-w-xl sm:mt-20"
      >
        <div className="grid grid-cols-1 gap-y-6 gap-x-8 sm:grid-cols-2">
          <div>
            <label
              htmlFor="state"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Estado
            </label>
            <div className="mt-2.5">
              <input
                onChange={handleChange}
                type="text"
                name="state"
                id="state"
                className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-amazon sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="city"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Ciudad
            </label>
            <div className="mt-2.5">
              <input
                onChange={handleChange}
                type="text"
                name="city"
                id="city"
                className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-amazon sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="street"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Calle
            </label>
            <div className="mt-2.5">
              <input
                onChange={handleChange}
                type="text"
                name="street"
                id="street"
                className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-amazon sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="zipCode"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Codigo Postal
            </label>
            <div className="mt-2.5">
              <input
                onChange={handleChange}
                type="text"
                name="zipCode"
                id="zipCode	"
                className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-amazon sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="houseNumber"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Numero de casa
            </label>
            <div className="mt-2.5">
              <input
                onChange={handleChange}
                type="text"
                name="houseNumber"
                id="houseNumber"
                className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-amazon sm:text-sm sm:leading-6"
              />
            </div>
          </div>

        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-yellow-amazon px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-yellow-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-amazon"
          >
            Guardar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Location;
