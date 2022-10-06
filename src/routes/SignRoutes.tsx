import { BrowserRouter, Route } from "react-router-dom";

import { Login } from "../pages/Login";

export const SignRoutes = () => {
  return (
    <BrowserRouter>
      <Route path="/" element={<Login />} />
    </BrowserRouter>
  );
};
