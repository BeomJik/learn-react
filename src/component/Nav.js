import React from "react";
import { Routes, Route, Link } from "react-router-dom"

import Home from '../pages/Home';
import About from '../pages/About';
import Counter from '../pages/Counter';
import Input from '../pages/Input';
import Input2 from '../pages/Input2';
import List from '../pages/List';


function Nav() {

  return (
    <>
      <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/counter">Counter</Link></li>
        <li><Link to="/input">Input</Link></li>
        <li><Link to="/input2">Input2</Link></li>
        <li><Link to="/list">List</Link></li>
      </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/counter" element={<Counter/>} />
        <Route path="/input" element={<Input/>} />
        <Route path="/input2" element={<Input2/>} />
        <Route path="/list" element={<List/>} />
      </Routes>
    </>
  );

}

export default Nav;
