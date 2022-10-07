import { createContext, useContext, useEffect, useState } from "react";
import { AuthContextData, LoginType } from "../@types/authContext";
import { api } from "../lib/api";

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState<object | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function loadStorageData() {
      const storageUser = localStorage.getItem("@Auth:user");
      const storageToken = localStorage.getItem("@Auth:access_token");

      if (storageUser && storageToken) {
        setUser(JSON.parse(storageUser));
      }
      setLoading(false);
    }

    loadStorageData();
  }, []);

  const Login = async ({ email, password }: LoginType) => {
    try {
      const res = await api.post<{ access_token: string }>("/login", {
        email: email,
        password: password,
      });

      const userData = await api.get<{}>("/auth/user");
      setUser(userData.data);

      localStorage.setItem("@Auth:access_token", res.data.access_token);
      localStorage.setItem("@Auth:user", JSON.stringify(userData.data));
    } catch (err) {
      console.error(err);
    }
  };

  const Logout = () => {
    localStorage.clear();
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ signed: !!user, user, loading, Login, Logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
