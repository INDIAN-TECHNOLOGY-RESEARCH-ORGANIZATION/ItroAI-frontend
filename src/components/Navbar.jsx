import { NavLink } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // run: npm install lucide-react

const Navbar = ({ navItems }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <nav className="w-full bg-[rgba(10,11,30,0.9)] backdrop-blur-md border-b border-white/10 z-[1000] py-4">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Logo */}
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-500 via-blue-400 to-pink-500 bg-clip-text text-transparent">IntoAI</div>

                {/* Desktop Nav Links */}
                <ul className="hidden md:flex items-center space-x-10 text-white text-sm font-medium">
                    {Object.entries(navItems).map(([label, path]) => (
                        <li key={label}>
                            <NavLink
                                to={path}
                                className={({ isActive }) =>
                                    isActive
                                        ? "text-cyan-300 font-semibold"
                                        : "hover:text-cyan-200 transition"
                                }
                            >
                                {label}
                            </NavLink>
                        </li>
                    ))}
                </ul>

                {/* Desktop Buttons */}
                <div className="hidden md:flex items-center space-x-3">
                    <NavLink to="/login">
                        <button className="text-white hover:text-cyan-300 transition px-3 py-1">
                            Login
                        </button>
                    </NavLink>
                    <NavLink to="/create">
                        <button className="px-6 py-3 rounded-full font-bold bg-gradient-to-r from-purple-700 to-sky-400 text-white  hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,191,255,0.5)] transition duration-300">
                            Create
                        </button>
                    </NavLink>
                </div>

                {/* Mobile Toggle Button */}
                <div className="md:hidden text-white">
                    <button onClick={toggleMenu} aria-label="Toggle menu">
                        {menuOpen ? (
                            <X className="w-6 h-6 mr-2.5" />
                        ) : (
                            <Menu className="w-6 h-6 mr-2.5" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {menuOpen && (
                <div className="md:hidden mt-4 px-6 space-y-4 bg-[rgba(10,11,30,0.9)] text-white pb-4 rounded-b">
                    <ul className="space-y-2">
                        {Object.entries(navItems).map(([label, path]) => (
                            <li key={label}>
                                <NavLink
                                    to={path}
                                    onClick={() => setMenuOpen(false)}
                                    className={({ isActive }) =>
                                        isActive
                                            ? "block text-blue-300 font-semibold"
                                            : "block hover:text-blue-200"
                                    }
                                >
                                    {label}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                    <div className="pt-2 space-y-2">
                        <NavLink to="/login" onClick={() => setMenuOpen(false)}>
                            <button className="text-white hover:text-cyan-300 transition px-3 py-1">
                                Log In
                            </button>
                        </NavLink>
                        <NavLink
                            to="/create"
                            onClick={() => setMenuOpen(false)}
                        >
                            <button className="px-6 py-3 rounded-full font-bold bg-gradient-to-r from-purple-700 to-sky-400 text-white  hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,191,255,0.5)] transition duration-300">
                                Create
                            </button>
                        </NavLink>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
