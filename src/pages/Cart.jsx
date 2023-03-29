import React from "react";
import Cardcart from "../components/Cardcart";

const Cart = () => {
  return (
    <section className="section">
      <div className='pt-10 pb-20'>
        <h1 className="text-center text-2xl md:text-4xl font-bold mb-2">Carrito de compra</h1>
        <p className="text-lg text-center leading-8 text-gray-600 mb-12">
          Lista de todos tus productos seleccionados
        </p>
        <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
          <div className="rounded-lg md:w-2/3">
            <Cardcart />
          </div>
          <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
            <h2 className="text-lg font-bold mb-5">Resumen de compra</h2>
            <div className="mb-2">
              <p className="font-bold mb-1">Direccion</p>
              <div className="">
                <p className="text-gray-700">Numero - 632-A</p>
                <p className="text-gray-700">Circuito Pomarrosa Poniente</p>
                <p className="text-gray-700">CP - 69022</p>
                <p className="text-gray-700">Tuxtla Gutierrez</p>
                <p className="text-gray-700">Chiapas</p>
              </div>
            </div>
            <div className="mb-2 mt-6">
              <p className="font-bold mb-1">Tarjeta</p>
              <div className="">
                <p className="text-gray-700">Luis Brodely Tovar Escobar</p>
                <p className="text-gray-700">Citibanamex</p>
              </div>
            </div>

            <p className="font-bold mb-2 mt-6">Pago</p>
            <div className="mb-2 flex justify-between">
              <p className="text-gray-700">Subtotal</p>
              <p className="text-gray-700">$129.99</p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-700">Envio</p>
              <p className="text-gray-700">$4.99</p>
            </div>
            <hr className="my-4" />
            <div className="flex justify-between">
              <p className="text-lg font-bold">Total</p>
              <div className="">
                <p className="mb-1 text-lg font-bold">$134.98 MXN</p>
                <p className="text-sm text-gray-700">Incluye IVA</p>
              </div>
            </div>
            <button className="mt-6 w-full rounded-md bg-yellow-amazon py-1.5 font-medium text-blue-50 hover:bg-yellow-secondary">
              Pagar
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
