import React from "react";
import { useState } from "react";

const Payment = () => {

	const [card, setCard] = useState({
    card_issuer: "Steve Jobs",
    card_number: '0000000000000000',
		card_expiry: "03/25",
    card_holder: 'Citibanamex',
		cvv: 0
  });

	const handleChange = (e) => {
		const { name, value } = e.target;
    setCard({ ...card, [name]: value });
	}

	const addSpaces = (numero) => {
		let cadena = numero.toString();
		let cadenaConEspacios = '';
		for (let i = 0; i < cadena.length; i += 4) {
			// Aqui añadimos los cuatro dígitos y un espacio a la nueva cadena
			cadenaConEspacios += cadena.substr(i, 4) + ' ';
		}
		return cadenaConEspacios.trim();
	}

	const handleSubmit = (e) => {
    e.preventDefault();
    console.log(card);
  };

  return (
    <section className="section py-10 ">
      <div className="">
        <div className="space-y-16">
          <div className="w-96 h-56 m-auto bg-red-100 rounded-xl relative text-white shadow-2xl transition-transform transform hover:scale-110">
            <img
              className="relative object-cover w-full h-full rounded-xl"
              src="https://i.imgur.com/Zi6v09P.png"
            />

            <div className="w-full px-8 absolute top-8">
              <div className="flex justify-between">
                <div className="">
                  <p className="font-light">Nombre</p>
                  <p className="font-medium tracking-widest">{card.card_issuer}</p>
                </div>
                <img className="w-14 h-14" src="https://i.imgur.com/bbPHJVe.png" />
              </div>
              <div className="pt-1">
                <p className="font-light">Numero de tarjeta</p>
                <p className="font-medium tracking-more-wider">
                  {addSpaces(card.card_number)}
                </p>
              </div>
              <div className="pt-6 pr-6">
                <div className="flex justify-between">
                  <div className="">
                    <p className="font-light text-xs ">Expiracion</p>
                    <p className="font-medium tracking-wider text-sm">{card.card_expiry}</p>
                  </div>

                  <div className="">
                    <p className="font-light text-xs">CVV</p>
                    <p className="font-bold tracking-more-wider text-sm">···</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

			<div className="mx-auto max-w-2xl text-center mt-10">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Metodo de Pago
        </h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          Ingresa tu la informacion de tu tarjeta para poder comprar.
        </p>
      </div>

			<form
        onSubmit={handleSubmit}
        className="mx-auto mt-16 max-w-xl sm:mt-20"
      >
        <div className="grid grid-cols-1 gap-y-6 gap-x-8 sm:grid-cols-2">

          <div className="sm:col-span-2">
            <label
              htmlFor="card_issuer"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Nombre del propietario
            </label>
            <div className="mt-2.5">
              <input
								onChange={handleChange}
                type="text"
								placeholder={card.card_issuer}
                name="card_issuer"
                id="card_issuer	"
                className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-amazon sm:text-sm sm:leading-6"
              />
            </div>
          </div>

					<div className="sm:col-span-2">
            <label
              htmlFor="card_number"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Numero de tarjeta
            </label>
            <div className="mt-2.5">
              <input
								onChange={handleChange}
								maxLength={16}
                type="text"
								placeholder={addSpaces(card.card_number)}
                name="card_number"
                id="card_number	"
                className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-amazon sm:text-sm sm:leading-6"
              />
            </div>
          </div>

					<div>
            <label
              htmlFor="card_holder"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Banco
            </label>
            <div className="mt-2.5">
              <input
								onChange={handleChange}
                type="text"
                name="card_holder"
                id="card_holder"
								placeholder={card.card_holder}
                className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-amazon sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="card_expiry"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Fecha de expiración
            </label>
            <div className="mt-2.5">
              <input
								onChange={handleChange}
                type="text"
                name="card_expiry"
								maxLength={5}
								placeholder={card.card_expiry}
                id="card_expiry"
                className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-amazon sm:text-sm sm:leading-6"
              />
            </div>
          </div>

					<div>
            <label
              htmlFor="cvv"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              CVV
            </label>
            <div className="mt-2.5">
              <input
								onChange={handleChange}
                type="password"
                name="cvv"
								maxLength={3}
								placeholder='000'
                id="cvv"
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
    </section>
  );
};

export default Payment