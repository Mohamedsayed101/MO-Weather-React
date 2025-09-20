import { NavLink } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[70vh] text-center px-6">
      <h1 className="text-6xl font-bold text-blue-600">404</h1>
      <p className="text-gray-600 mt-4">Oops! The page you are looking for does not exist.</p>
      <NavLink
        to="/"
        className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        Go Back Home
      </NavLink>
    </section>
  );
}
