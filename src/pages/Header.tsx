import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <div>
      <ul>
        <li className="nav-item pullUp">
          <NavLink className="nav-link" to="/login">
            <i className="fas fa-home"></i> login{" "}
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
