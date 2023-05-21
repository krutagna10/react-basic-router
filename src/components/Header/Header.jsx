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
    <header className="flex justify-between p-6">
      <Link to="/">
        <h2 className="text-black">Router</h2>
      </Link>
      <nav>
        <ul className="flex gap-6">
          {links.map((link, index) => (
            <li key={index}>
              <NavLink className="link" to={link.to}>
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
