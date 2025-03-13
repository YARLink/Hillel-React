import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <ul className="nav">
      <li>
        <NavLink exact to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink exact to="/battle">
          Battle
        </NavLink>
      </li>
      <li>
        <NavLink exact to="/popular">
          Popular
        </NavLink>
      </li>
    </ul>
  );
};

export default Navigation;
