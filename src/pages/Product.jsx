import React, {useContext} from "react";
import { PhotoIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import axios from "axios";
import {Link, useNavigate} from 'react-router-dom'
import {Context} from "../Context.jsx";

const Product = () => {
  const {addItem} = useContext(Context)
  const navigate = useNavigate()
  const [product, setProduct] = useState({
    name: "",
    price: 0,
    description: "",
    quantity: 0,
    img: "",
    cakePicture: "",
    type: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleImageChange = (e) => {
    const imageFile = e.target.files[0];
    const imageUrl = URL.createObjectURL(imageFile);
    setProduct({ ...product, cakePicture: imageUrl });
    let formData = new FormData();
    formData.append('file', event.target.files[0]);
    console.log(...formData)
    const k = [...formData]
    console.log(k)
    axios.post('https://18.207.215.219:8080/file', formData
    ).then(function (response) {
      console.log(response)
      setProduct({...product, cakePicture: response.data.data});
    }).catch(function (error) {
      console.log(error);
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(product);
    addItem(product);
    navigate("/index")
  };

  return (
    <section className="section">
      <form
        className="p-8"
        onSubmit={handleSubmit}
        encType="multipart/form-data"
      >
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-lg font-semibold leading-7 text-gray-900">
              Crear Producto
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              Ingresa la informacion para crear un nuevo producto
            </p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

              <div className="sm:col-span-3">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Nombre del Producto
                </label>
                <div className="mt-2">
                  <input
                    onChange={handleChange}
                    required
                    type="text"
                    name="name"
                    id="name"
                    className="px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-amazon sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="price"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Precio
                </label>
                <div className="mt-2">
                  <input
                    onChange={handleChange}
                    required
                    type="number"
                    name="price"
                    id="price"
                    min={0}
                    className="px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-amazon sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="description"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Descripcion del Producto
                </label>
                <div className="mt-2">
                  <textarea
                    onChange={handleChange}
                    required
                    id="description"
                    name="description"
                    rows={3}
                    className="px-3 block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-amazon sm:py-1.5 sm:text-sm sm:leading-6"
                    defaultValue={""}
                  />
                </div>
                <p className="mt-3 text-sm leading-6 text-gray-600">
                  Ingresa la informacion que sea necesaria sobre el producto.
                </p>
              </div>

              <div className="sm:col-span-3">
                <label
                    htmlFor="quantity"
                    className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Cantidad
                </label>
                <div className="mt-2">
                  <input
                      onChange={handleChange}
                      required
                      type="number"
                      min={0}
                      name="quantity"
                      id="quantity"
                      className="px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-amazon sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                    htmlFor="type"
                    className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Tipo de producto
                </label>
                <div className="mt-2">
                  <input
                      onChange={handleChange}
                      required
                      type="text"
                      name="type"
                      id="type"
                      min={0}
                      className="px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-amazon sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="cover-photo"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Subir foto
                </label>
                {product.cakePicture ?
                <img
                  className=" w-full rounded-lg border-dashed border-gray-900/25"
                  src={product.cakePicture}
                  alt={product.name}
                />
                :
                <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                  <div className="text-center">
                    <PhotoIcon
                      className="mx-auto h-12 w-12 text-gray-300"
                      aria-hidden="true"
                    />
                    <div className="mt-4 flex text-sm leading-6 text-gray-600">
                      <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer rounded-md bg-white font-semibold text-yellow-amazon focus-within:outline-none focus-within:ring-2 focus-within:ring-yellow-amazon focus-within:ring-offset-2 hover:text-yellow-secondary"
                      >
                        <span>Upload a file</span>
                        <input
                          onChange={handleImageChange}
                          required
                          id="file-upload"
                          name="file-upload"
                          type="file"
                          className="sr-only"
                        />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs leading-5 text-gray-600">
                      PNG, JPG, GIF up to 10MB
                    </p>
                  </div>
                </div>
                }
              </div>

            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            type="button"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            <Link to='/index/'>Cancelar</Link>
          </button>
          <button
            type="submit"
            className="rounded-md bg-yellow-amazon py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-yellow-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-amazon"
          >
            Guardar
          </button>
        </div>
      </form>
    </section>
  );
};

export default Product;
