
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white p-4 shadow-lg flex flex-col items-center text-center">
      <p className="text-sm">&copy; {new Date().getFullYear()} FutureLibrary. All rights reserved.</p>
      <nav className="mt-2">
        <ul className="flex space-x-6">
          <li>
            <Link to="/" className="hover:text-blue-400 transition">
              Home
            </Link>
          </li>
          <li>
            <Link to="/books" className="hover:text-blue-400 transition">
              Books
            </Link>
          </li>
          <li>
            <Link to="/add-book" className="hover:text-blue-400 transition">
              Add Book
            </Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
