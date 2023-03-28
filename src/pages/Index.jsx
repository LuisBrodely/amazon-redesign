import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { useState } from "react";
import Home from "./Home";
import Cart from "./Cart";
import { Route, Routes } from "react-router-dom";
import Location from "./Location";
import Payment  from "./Payment";

const Index = () => {
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
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/location" element={<Location />} />
        <Route exact path="/payment" element={<Payment />} />
      </Routes>
    </main>
  );
};

export default Index;
