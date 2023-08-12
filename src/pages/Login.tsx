import { useState } from "react";
import { useAuth } from "../context/auth";

export const Login = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { Login } = useAuth();

  const handleLogin = (): void => {
    Login({ username, password });
  };

  return (
    <div>
      <input
        onChange={(e) => {
          setUsername(e.target.value);
        }}
        placeholder="Username" 
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
