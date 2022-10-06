import { BrowserRouter, Route } from "react-router-dom";

import { Home } from "../pages/Home";

export const ProtectRoutes = () => {
  return (
    <BrowserRouter>
      <Route path="/" element={<Home />} />
    </BrowserRouter>
  );
};
