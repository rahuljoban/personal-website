import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="sticky top-0 w-full bg-slate-900/90 backdrop-blur-sm border-b border-slate-700/50 px-6 py-4 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-end">
        {/* Desktop Nav - hidden on mobile, shown on larger screens */}
        <div className="hidden md:flex gap-6 text-sm font-medium text-slate-300">
          <Link to="/" className="hover:text-white transition">Home</Link>
          <Link to="/resume" className="hover:text-white transition">Resume</Link>
          <a href="https://github.com/rahuljoban" target="_blank" className="hover:text-white transition">GitHub</a>
          <a href="https://linkedin.com/in/rahuljobanputra" target="_blank" className="hover:text-white transition">LinkedIn</a>
        </div>

        {/* Mobile Hamburger - aligned to the right */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-slate-300 hover:text-white focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 pt-4 border-t border-slate-700/50 flex flex-col gap-3 text-sm font-medium text-slate-300">
          <Link to="/" onClick={closeMenu} className="hover:text-white transition">Home</Link>
          <Link to="/resume" onClick={closeMenu} className="hover:text-white transition">Resume</Link>
          <a href="https://github.com/rahuljoban" target="_blank" onClick={closeMenu} className="hover:text-white transition">GitHub</a>
          <a href="https://linkedin.com/in/rahuljobanputra" target="_blank" onClick={closeMenu} className="hover:text-white transition">LinkedIn</a>
        </div>
      )}
    </nav>
  );
}