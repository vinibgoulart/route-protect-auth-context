
import {NavLink,Link} from "react-router-dom";
import { useAuth } from "../context/auth";

export const ProtectHeader = () => {
  const { Logout } = useAuth();

  const handleLogout = () => {
    Logout();
  };

    return (
        <div>
          <ul>
          <li className="nav-item pullUp">
                            <NavLink  className="nav-link"
                                      to="/"><i className="fas fa-home"></i> Home </NavLink>
                        </li>
                        <li className="nav-item pullUp">
                            <NavLink className="nav-link" to="/users"><i
                                className="fas fa-users"></i> Users</NavLink>
                        </li>
                        <li><button onClick={handleLogout}>Logout</button></li>


          </ul>
        </div>
      );

};