import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Header({ className = "" }) {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "News", path: "/news" },
    { name: "Live Cameras", path: "/live-cameras" },
    { name: "Photos", path: "/photos" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className={`bg-gray-900/90 text-white shadow-md ${className}`}>
      <div className="container mx-auto flex items-center justify-between py-4 px-6 md:px-20">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-3">
          <img src="/Images/logo.png" alt="Logo" className="w-12 h-12" />
          <div>
            <h1 className="text-xl font-bold">Mo Weather</h1>
            <p className="text-sm text-gray-300">Amazing Weather App</p>
          </div>
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex">
          <ul className="flex justify-between gap-4">
            {links.map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `block py-1 px-2 text-[14px] transition ${
                      isActive
                        ? "text-[#405495] border border-blue-800 rounded-2xl border-solid"
                        : "hover:text-[#405495] hover:border-blue-800 hover:rounded-2xl hover:border-solid hover:border-2"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden bg-gray-800/95">
          <ul className="flex flex-col gap-4 p-4">
            {links.map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `block py-1 px-2 text-[14px] w-fit transition ${
                      isActive
                        ? "text-[#405495] border border-blue-800 rounded-2xl border-solid"
                        : "hover:text-[#405495] hover:border-blue-800 hover:rounded-2xl hover:border-solid hover:border-2"
                    }`
                  }
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
