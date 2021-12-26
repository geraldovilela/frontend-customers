import React from "react";
import { Routes, Route } from "react-router-dom";

import ListCustomer from "../Pages/ListCustomer";
import CreateCustomer from "../Pages/CreateCustomer";

const Router: React.FC = () => {
  return (
  <Routes>
    <Route path="/" element={<ListCustomer/>} />
    <Route path="/create" element={<CreateCustomer/>} />
  </Routes>)
}

export {Router};