import React, { useState } from "react";
import { Link, NavLink } from "react-router";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="w-full h-auto border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="mx-auto px-4 py-4">
          <div className="flex items-center justify-between relative">
            <Link to="/" className="flex items-center justify-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                color="#3b82f6"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-book-open-check-icon lucide-book-open-check"
              >
                <path d="M12 21V7" />
                <path d="m16 12 2 2 4-4" />
                <path d="M22 6V4a1 1 0 0 0-1-1h-5a4 4 0 0 0-4 4 4 4 0 0 0-4-4H3a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h6a3 3 0 0 1 3 3 3 3 0 0 1 3-3h6a1 1 0 0 0 1-1v-1.3" />
              </svg>
              <span className="text-2xl font-bold text-gray-900">
                Book<span className="text-blue-500">For</span>You
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-6">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-600 font-semibold border-blue-600 pb-1"
                    : "text-gray-600 hover:text-blue-600 transition-colors"
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/categories"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-600 font-semibold border-blue-600 pb-1"
                    : "text-gray-600 hover:text-blue-600 transition-colors"
                }
              >
                Categories
              </NavLink>
              <NavLink
                to="/search"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-600 font-semibold border-blue-600 pb-1"
                    : "text-gray-600 hover:text-blue-600 transition-colors"
                }
              >
                Search
              </NavLink>
            </nav>

            {/* Mobile Nav Button */}
            <div className="md:hidden">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                className="inline-flex items-center justify-center h-8 w-8 rounded-md p-2"
              >
                {menuOpen ? (
                  // Cross Icon
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-x h-6 w-6"
                  >
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                ) : (
                  // Hamburger Icon
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-menu h-6 w-6"
                  >
                    <line x1="4" x2="20" y1="12" y2="12"></line>
                    <line x1="4" x2="20" y1="6" y2="6"></line>
                    <line x1="4" x2="20" y1="18" y2="18"></line>
                  </svg>
                )}
              </button>
            </div>
          </div>
          {/* Mobile Menu Dropdown */}
          {menuOpen && (
            <div className="md:hidden absolute left-0 right-0 bg-white shadow-lg border-b w-full z-40">
              <nav className="flex flex-col px-4 py-4 space-y-4">
                <Link
                  to="/"
                  className="text-gray-700 text-lg font-medium hover:text-blue-600 transition-colors py-2"
                  onClick={() => setMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  to="/categories"
                  className="text-gray-700 text-lg font-medium hover:text-blue-600 transition-colors py-2"
                  onClick={() => setMenuOpen(false)}
                >
                  Categories
                </Link>
                <Link
                  to="/search"
                  className="text-gray-700 text-lg font-medium hover:text-blue-600 transition-colors py-2"
                  onClick={() => setMenuOpen(false)}
                >
                  Search
                </Link>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
}

export default Navbar;
