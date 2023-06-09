import React, {useContext, useEffect, useState} from "react";
import bgHome from "../assets/img/bg-home.png";
import publicity from "../assets/img/publicity-home.png";
import Card from "../components/Card";
import {Context} from "../Context.jsx";
import axios from "axios";

const Home = ({search}) => {
    const [item, setItems] = useState([]);
    const [productsFilters, setProductsFilters] = useState([]);
    const getProducts = async () => {
        await axios
            .get("https://18.207.215.219:8080/product/list")
            .then(({ data }) => setItems(data.data));

    };

    useEffect(() => {
        getProducts();
    }, []);
    console.log(item)

    const filtrado = item.filter((objeto) => objeto.name.toLowerCase().includes(search.toLowerCase()));
    console.log('filtrado',filtrado)

    const uniqueSections = [...new Set(filtrado.map(data => data.type))];
    console.log(uniqueSections)


  return (
    <section className="section">
      <div className="bg-blue-amazon w-full">
        <img className="w-full" src={bgHome} alt="product" />
      </div>
        {uniqueSections.map((type, index)=> (
            <div key={index}>
            <h3 className="pt-10 pb-8 text-2xl font-semibold text-center lg:text-left lg:ml-16">
                {type}
            </h3>
            <div className="flex px-9 pb-12 lg:pb-20 gap-8 flex-wrap justify-center lg:gap-10">
                {filtrado.map((product) => (
                    type === product.type &&
                        <Card
                            data={product}
                            key={product.id}
                            title={product.name}
                            price={product.price}
                            img={product.cakePicture}
                        />
                ))}
            </div>

        </div>))}
      <div className="bg-blue-amazon w-full">
        <img className="w-full" src={publicity} alt="publicidad" />
      </div>
    </section>
  );
};

export default Home;
