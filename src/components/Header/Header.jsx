import { NavLink } from "react-router-dom";
import { useState } from "react";
import { FiChevronDown, FiMenu, FiX } from "react-icons/fi";
import "./Header.scss";

export default function Header() {
  const NAV_ITEMS = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Research", path: "/research" },
    { label: "Teaching", path: "/teaching" },
    { label: "Publications", path: "/publications" },
    {
      label: "Team",
      dropdown: true,
      children: [
        { label: "Current", path: "/active-members" },
        { label: "Alumni", path: "/alumni" },
      ],
    },
    { label: "Projects", path: "/projects" },
    { label: "Contact", path: "/contact" },
  ];

  const [mobileMenu, setMobileMenu] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);

  return (
    <header className="rk-header">
      <div className="rk-container">
        <NavLink to="/" className="logo">
          Geomechanics <span>Laboratory</span>
        </NavLink>

        {/* Mobile Menu Icon */}
        <div
          className="menu-toggle"
          onClick={() => {
            setMobileMenu(!mobileMenu);
            setOpenDropdown(false);
          }}
        >
          {mobileMenu ? <FiX /> : <FiMenu />}
        </div>

        <nav className={`nav-links ${mobileMenu ? "open" : ""}`}>
          {NAV_ITEMS.map((item) =>
            item.dropdown ? (
              <div
                key={item.label}
                className="dropdown"
                onMouseEnter={() => !mobileMenu && setOpenDropdown(true)}
                onMouseLeave={() => !mobileMenu && setOpenDropdown(false)}
              >
                <span
                  className="dropdown-title"
                  onClick={() => mobileMenu && setOpenDropdown(!openDropdown)}
                >
                  {item.label}
                  <FiChevronDown
                    className={`dropdown-icon ${openDropdown ? "rotate" : ""}`}
                  />
                </span>

                <div className={`dropdown-menu ${openDropdown ? "show" : ""}`}>
                  {item.children.map((child) => (
                    <NavLink
                      key={child.path}
                      to={child.path}
                      onClick={() => {
                        setMobileMenu(false);
                        setOpenDropdown(false);
                      }}
                    >
                      {child.label}
                    </NavLink>
                  ))}
                </div>
              </div>
            ) : (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => {
                  setMobileMenu(false);
                  setOpenDropdown(false);
                }}
              >
                {item.label}
              </NavLink>
            ),
          )}
        </nav>
      </div>
    </header>
  );
}
