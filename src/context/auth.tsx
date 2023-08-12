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

  const Login = async ({ username, password }: LoginType) => {
    try {
      const res = await api.post<{ token: string }>("/login", {
        username: username,
        password: password,
      });
      const token = res.data.token;
      const userData = await api.get<{}>("/user", {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
        },
      });

      setUser(userData.data);

      localStorage.setItem("@Auth:access_token", res.data.token);
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
