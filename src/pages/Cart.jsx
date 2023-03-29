import React, {useContext, useState} from "react";
import Cardcart from "../components/Cardcart";
import {Context} from "../Context.jsx";
import Successfully from "../components/Successfully.jsx";
import {useNavigate} from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  const { userSesion, cartItems, address, payment, setCartItems,show, setShow} = useContext(Context)
  console.log(address)
  console.log(payment)
  const total = cartItems?.reduce(
      (previous, current) => previous + current.amount * current.price,
      0
  );
  const submit = () => {
    setCartItems([])
    setShow(true)
    navigate('/index')
  }
  return (
    <section className="section">
      <div className='pt-10 pb-20'>
        <h1 className="text-center text-2xl md:text-4xl font-bold mb-2">Carrito de compra</h1>
        <p className="text-lg text-center leading-8 text-gray-600 mb-12">
          Lista de todos tus productos seleccionados
        </p>
        <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
          <div className="rounded-lg md:w-2/3">
            {cartItems.map((product)=> (
                <Cardcart
                key={product.id}
                title={product.name}
                img={product.cakePicture}
                description={product.description}
                price={product.price}
                amount={product.amount}
                data={product}
                />))}
          </div>
          <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
            <h2 className="text-lg font-bold mb-5">Resumen de compra</h2>
            <div className="mb-2">
              <p className="font-bold mb-1">Direccion</p>
              {address.length === 0 ? <p className="text-gray-700">Agrega una direccion</p>
                  :
                  address.map((d)=>(
                      <div key={d.id} className="">
                        <p className="text-gray-700">Numero - {d.houseNumber}</p>
                        <p className="text-gray-700">{d.street}</p>
                        <p className="text-gray-700">CP - {d.zipCode}</p>
                        <p className="text-gray-700">{d.city}</p>
                        <p className="text-gray-700">{d.state}</p>
                      </div>))

              }
            </div>
            <div className="mb-2 mt-6">
              <p className="font-bold mb-1">Tarjeta</p>
              {payment.length === 0 ? <p className="text-gray-700">Agrega un metodo de pago</p>
                  :
                  payment.map((d)=>(
                      <div key={d.id} className="">
                        <p className="text-gray-700">{userSesion[0].name}</p>
                        <p className="text-gray-700">{d.cardHolder}</p>
                      </div>))
              }
            </div>
            <p className="font-bold mb-2 mt-6">Pago</p>
            <div className="mb-2 flex justify-between">
              <p className="text-gray-700">Subtotal</p>
              <p className="text-gray-700">${total}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-700">Envio</p>
              <p className="text-gray-700">$ 99</p>
            </div>
            <hr className="my-4" />
            <div className="flex justify-between">
              <p className="text-lg font-bold">Total</p>
              <div className="">
                <p className="mb-1 text-lg font-bold">$ {total === 0 ? 0 : total + 99} MXN</p>
                <p className="text-sm text-gray-700">Incluye IVA</p>
              </div>
            </div>
            <button onClick={()=> submit()} className="mt-6 w-full rounded-md bg-yellow-amazon py-1.5 font-medium text-blue-50 hover:bg-yellow-secondary">
              Pagar
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
