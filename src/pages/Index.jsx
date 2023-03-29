import React, {useContext, useEffect} from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { useState } from "react";
import Home from "./Home";
import Product from "./Product";
import Cart from "./Cart";
import { Route, Routes } from "react-router-dom";
import Location from "./Location";
import Payment  from "./Payment";
import axios from "axios";
import Successfully from "../components/Successfully.jsx";
import {Context} from "../Context.jsx";

const Index = () => {
  const {show, setShow} = useContext(Context)
  const [showMenu, setShowMenu] = useState(false);
  const [search, setsearch] = useState("");


  return (
    <main>
      <Header
        showMenu={showMenu}
        setShowMenu={setShowMenu}
        search={search}
        setsearch={setsearch}
      />
      <Sidebar showMenu={showMenu} setShowMenu={setShowMenu} />
      <Routes>
        <Route exact path="/" element={<Home search={search} />} />
        <Route exact path="/product" element={<Product />} />
        <Route exact path="/location" element={<Location />} />
        <Route exact path="/payment" element={<Payment />} />
        <Route exact path="/cart" element={<Cart />} />
      </Routes>
        <Successfully show={show} setShow={setShow}></Successfully>
    </main>
  );
};

export default Index;
