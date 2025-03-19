import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white text-blue-400 shadow-lg top-0 left-0 sticky">
      <div className="max-w-7xl mx-auto p-6">
        <div className="flex items-center gap-72 justify-between">
          <div>
            <Link
              to="/"
              className="text-xl font-bold tracking-wide transition"
            >
              Khasan's library
            </Link>
          </div>
          <div className="flex items-center gap-20">
            <Link
              to="/"
              className="flex text-xl items-center gap-2 transition"
            >
              Home
            </Link>
            <Link
              to="/books"
              className="flex text-xl items-center gap-2 transition"
            >
              Books
            </Link>
            <Link
              to="/create-book"
              className="flex text-xl items-center gap-2 transition"
            >
              Create Book
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default React.memo(Header);