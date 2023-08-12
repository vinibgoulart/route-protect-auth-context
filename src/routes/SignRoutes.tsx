import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Login } from "../pages/Login";

import { Header } from "../pages/Header";

export const SignRoutes = () => {
  return (
    
      
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      
    </BrowserRouter>
    
  );
};
