import { createContext, useContext, useState } from "react";
import { AuthContextData, LoginType } from "../@types/authContext";
import { api } from "../lib/api";

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState<object | null>(null);

  const Login = async ({ email, password }: LoginType) => {
    try {
      const res = await api.post<{ access_token: string }>("/login", {
        email: email,
        password: password,
      });
      localStorage.setItem("access_token", res.data.access_token);

      const userData = await api.get("/auth/user");
      setUser(userData.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <AuthContext.Provider value={{ signed: !!user, user, Login }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
