import { NavLink } from "react-router-dom";

export default function Footer() {
  const links = [
    { name: "Home", path: "/" },
    { name: "News", path: "/news" },
    { name: "Live Cameras", path: "/live-cameras" },
    { name: "Photos", path: "/photos" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-10 flex flex-col">
      <div className="container mx-auto px-6 md:px-20 flex flex-col gap-6">
        
        {/* Top Section: Logo + Links */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-6">
          {/* Logo + Info */}
          <NavLink to="/" className="flex items-center gap-3">
            <img src="/Images/logo.png" alt="Logo" className="w-12 h-12" />
            <div>
              <h1 className="text-lg font-bold text-white">Mo Weather</h1>
              <p className="text-sm">Amazing Weather App</p>
            </div>
          </NavLink>

          {/* Links */}
          <ul className="flex flex-wrap max-md:flex-col gap-4">
            {links.map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `text-sm transition ${
                      isActive
                        ? "text-[#405495] border-b-2 border-blue-800"
                        : "hover:text-[#405495]"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Divider */}
        <hr className="border-gray-700" />

        {/* Copyright */}
        <p className="text-[14px] text-gray-500 text-center">
          © {new Date().getFullYear()} <span className="text-blue-400 text-xl">Mo Weather</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
