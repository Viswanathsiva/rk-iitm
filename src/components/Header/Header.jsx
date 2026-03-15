import { NavLink } from "react-router-dom";
import { useState } from "react";
import { FiChevronDown, FiMenu, FiX } from "react-icons/fi";
import "./Header.scss";

const NAV_ITEMS = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Research", path: "/research" },
  { label: "Teaching", path: "/teaching" },
  { label: "Publications", path: "/publications" },
  {
    label: "Team",
    children: [
      { label: "Current", path: "/active-members" },
      { label: "Alumni", path: "/alumni" },
    ],
  },
  { label: "Projects", path: "/projects" },
  { label: "Contact", path: "/contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleMobile = () => {
    setMobileOpen(!mobileOpen);
    setActiveDropdown(null);
  };

  const closeMenus = () => {
    setMobileOpen(false);
    setActiveDropdown(null);
  };

  const toggleDropdown = (label) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  return (
    <header className="rk-header">
      <div className="rk-container">
        <NavLink to="/" className="logo" onClick={closeMenus}>
          Geomechanics <span>Laboratory</span>
        </NavLink>

        <button className="menu-toggle" onClick={toggleMobile}>
          {mobileOpen ? <FiX /> : <FiMenu />}
        </button>

        <nav className={`nav ${mobileOpen ? "open" : ""}`}>
          {NAV_ITEMS.map((item) =>
            item.children ? (
              <div
                className="dropdown"
                key={item.label}
                onMouseEnter={() =>
                  !mobileOpen && setActiveDropdown(item.label)
                }
                onMouseLeave={() => !mobileOpen && setActiveDropdown(null)}
              >
                <button
                  className="dropdown-trigger"
                  onClick={() => mobileOpen && toggleDropdown(item.label)}
                >
                  {item.label}
                  <FiChevronDown
                    className={activeDropdown === item.label ? "rotate" : ""}
                  />
                </button>

                <div
                  className={`dropdown-menu ${
                    activeDropdown === item.label ? "show" : ""
                  }`}
                >
                  {item.children.map((child) => (
                    <NavLink
                      key={child.path}
                      to={child.path}
                      onClick={closeMenus}
                    >
                      {child.label}
                    </NavLink>
                  ))}
                </div>
              </div>
            ) : (
              <NavLink key={item.path} to={item.path} onClick={closeMenus}>
                {item.label}
              </NavLink>
            ),
          )}
        </nav>
      </div>
    </header>
  );
}
