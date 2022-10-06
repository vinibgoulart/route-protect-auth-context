import { useState } from "react";
import { useAuth } from "../context/auth";

export const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { Login } = useAuth();

  const handleLogin = (): void => {
    Login({ email, password });
  };

  return (
    <div>
      <input
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        placeholder="Email"
      />
      <input
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        placeholder="Password"
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};
