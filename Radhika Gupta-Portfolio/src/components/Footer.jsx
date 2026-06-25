import {
    FaGithub,
    FaLinkedin,
    FaEnvelope,
    FaArrowUp,
} from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="border-t border-white/10 bg-[#111111]">
            <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 px-6 py-10 md:flex-row md:justify-between">

                <div className="flex gap-5">

                    <a
                        href="https://github.com/Radhikagupta25"
                        target="_blank"
                        rel="noreferrer"
                        className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#1B1B1B] text-gray-300 transition duration-300 hover:bg-pink-500 hover:text-white"
                    >
                        <FaGithub size={20} />
                    </a>

                    <a
                        href="https://www.linkedin.com/in/radhika-gupta-596296290/"
                        target="_blank"
                        rel="noreferrer"
                        className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#1B1B1B] text-gray-300 transition duration-300 hover:bg-pink-500 hover:text-white"
                    >
                        <FaLinkedin size={20} />
                    </a>

                    <a
                        href="mailto:radhikaaaguptaaa25@gmail.com"
                        className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#1B1B1B] text-gray-300 transition duration-300 hover:bg-pink-500 hover:text-white"
                    >
                        <FaEnvelope size={20} />
                    </a>

                </div>

                <p className="text-center text-sm leading-7 text-gray-400 md:text-base">
                    Made with <span className="text-red-500">❤</span> by{" "}
                    <span className="font-semibold text-pink-400">
                        Radhika Gupta
                    </span>
                    <br className="md:hidden" />
                    <span className="hidden md:inline"> • </span>
                    © {new Date().getFullYear()}
                </p>

                <button
                    onClick={() =>
                        window.scrollTo({
                            top: 0,
                            behavior: "smooth",
                        })
                    }
                    className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-pink-500 text-pink-400 transition duration-300 hover:bg-pink-500 hover:text-white md:h-20 md:w-20"
                >
                    <FaArrowUp size={22} />
                </button>

            </div>
        </footer>
    );
};

export default Footer;