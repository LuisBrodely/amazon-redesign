import React, {useContext} from "react";
import {Context} from "../Context.jsx";
import {Link} from "react-router-dom";

const Card = ({ title, img, price, data}) => {
  const {addItemToCart} = useContext(Context)
  return (
    <div>
      <div className="flex flex-col p-6 justify-between h-[335px] w-[265px] bg-white border border-gray-200 rounded-lg shadow">
        <a href="#" className='flex justify-center'>
          <img
            className="h-[160px]"
            src={img}
            alt="product image"
          />
        </a>
        <div className="pt-4">
          <a href="#">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 ">
              {title}
            </h5>
          </a>
          <div className="flex items-center justify-between pt-4">
            <span className="text-2xl font-bold text-gray-900">
              ${price}
            </span>
            <Link
              href="#"
              className="text-white bg-blue-amazon hover:bg-blue-secondary focus:outline-none focus:bg-blue-secondary font-medium rounded-lg text-sm px-4 py-2 text-center"
              onClick={() => addItemToCart(data)}
            >
              Agregar
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
