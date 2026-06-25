import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaGithub, FaLinkedin, FaEnvelope, FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";
import logo from "../assets/RadhikaLogo.png";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 30);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const links = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Skills", path: "/skills" },
        { name: "Projects", path: "/projects" },
        { name: "Contact", path: "/contact" },
    ];

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled
                ? "py-4 backdrop-blur-2xl bg-[#09090B]/70 border-b border-white/10"
                : "py-6"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

                <NavLink
                    to="/"
                    className="flex items-center gap-3"
                >
                    <img
                        src={logo}
                        alt="Radhika Gupta"
                        className="w-12 h-12 object-contain"
                    />

                    <div className="flex flex-col leading-none">
                        <h1 className="text-xl font-bold text-white tracking-wide">
                            Radhika Gupta
                        </h1>
                    </div>
                </NavLink>

                <div
                    className="hidden lg:flex items-center gap-2 px-2 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.3)]  "
                >
                    {links.map((link) => (
                        <NavLink key={link.path} to={link.path}>
                            {({ isActive }) => (
                                <div className="relative">
                                    {isActive && (
                                        <motion.div
                                            layoutId="active-pill"
                                            transition={{
                                                type: "spring",
                                                stiffness: 350,
                                                damping: 28,
                                            }}
                                            className="absolute inset-0 rounded-full border border-pink-500/40 bg-pink-500/20" />
                                    )}

                                    <span
                                        className={`relative z-10 px-5 py-2 block rounded-full text-sm font-medium transition duration-300 ${isActive
                                            ? "text-white"
                                            : "text-gray-400 hover:text-white"
                                            }`}
                                    >
                                        {link.name}
                                    </span>
                                </div>
                            )}
                        </NavLink>
                    ))}
                </div>

                <div className="hidden lg:flex items-center gap-5 text-xl">
                    <a
                        href="https://github.com/Radhikagupta25"
                        className="text-gray-400 hover:text-white transition"
                        target="_blank"
                    >
                        <FaGithub />
                    </a>

                    <a
                        href="https://www.linkedin.com/in/radhika-gupta-596296290/"
                        className="text-gray-400 hover:text-blue-400 transition"
                        target="_blank"
                    >
                        <FaLinkedin />
                    </a>

                    <a
                        href="mailto:radhikaaaguptaaa25@gmail.com"
                        className="text-gray-400 hover:text-red-400 transition"
                        target="_blank"
                    >
                        <FaEnvelope />
                    </a>
                </div>

                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="lg:hidden text-white text-2xl"
                >
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {menuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="
          lg:hidden
          mx-6
          mt-4
          rounded-3xl
          border
          border-white/10
          bg-[#111111]/80
          backdrop-blur-2xl
          p-6
        "
                >
                    <div className="flex flex-col gap-5">

                        {links.map((link) => (
                            <NavLink
                                key={link.path}
                                to={link.path}
                                onClick={() => setMenuOpen(false)}
                                className={({ isActive }) =>
                                    `transition font-medium ${isActive
                                        ? "text-blue-400"
                                        : "text-gray-300 hover:text-white"
                                    }`
                                }
                            >
                                {link.name}
                            </NavLink>
                        ))}

                        <div className="flex gap-5 pt-4">

                            <a
                                href="https://github.com/Radhikagupta25"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex h-12 w-12 items-center justify-center rounded-xl border border-pink-500/30 bg-pink-500/10 text-pink-400 transition-all duration-300 hover:bg-pink-500 hover:text-white"
                            >
                                <FaGithub size={20} />
                            </a>

                            <a
                                href="https://www.linkedin.com/in/radhika-gupta-596296290/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex h-12 w-12 items-center justify-center rounded-xl border border-pink-500/30 bg-pink-500/10 text-pink-400 transition-all duration-300 hover:bg-pink-500 hover:text-white"
                            >
                                <FaLinkedin size={20} />
                            </a>

                            <a
                                href="mailto:radhikaaaguptaaa25@gmail.com"
                                className="flex h-12 w-12 items-center justify-center rounded-xl border border-pink-500/30 bg-pink-500/10 text-pink-400 transition-all duration-300 hover:bg-pink-500 hover:text-white"
                            >
                                <FaEnvelope size={20} />
                            </a>

                        </div>

                    </div>
                </motion.div>
            )}
        </header>
    );
};

export default Navbar;