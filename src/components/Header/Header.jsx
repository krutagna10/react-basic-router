import { Link, NavLink } from "react-router-dom";
import "./Header.css";

function Header() {
  const links = [
    {
      to: "/",
      text: "Home",
    },
    {
      to: "/about",
      text: "About",
    },
    {
      to: "/contact",
      text: "Contact",
    },
    {
      to: "/products",
      text: "Products",
    },
  ];

  return (
    <header className="flex justify-center m-8">
      <nav>
        <ul className="flex gap-10">
          {links.map((link, index) => (
            <li key={index}>
              <NavLink className="nav-link text-xl" to={link.to}>
                {link.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
