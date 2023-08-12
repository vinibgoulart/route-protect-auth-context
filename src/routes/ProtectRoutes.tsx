import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { ProtectHeader } from "../pages/ProtectHeader";
import { Users } from "../pages/Users";

export const ProtectRoutes = () => {
  return (
    
    <BrowserRouter>
    <ProtectHeader/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </BrowserRouter>
   
  
  );
};
