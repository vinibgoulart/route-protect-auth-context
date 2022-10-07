import { useAuth } from "../context/auth";

export const Home = () => {
  const { Logout } = useAuth();

  const handleLogout = () => {
    Logout();
  };

  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
      <h1>Home Page</h1>
    </div>
  );
};
