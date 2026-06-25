import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight, FaLinkedin, FaEnvelope } from "react-icons/fa";
import SkillCard from "../components/SkillCard";
import ProjectCard from "../components/ProjectCard";
import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaGitAlt, FaGithub, FaJava, FaPython, } from "react-icons/fa";
import { SiJavascript, SiTailwindcss, SiExpress, SiMongodb, SiMysql, SiCplusplus, SiC, } from "react-icons/si";
import { Typewriter } from "react-simple-typewriter";
import doodleDocImg from "../assets/ProjectImages/doodleDocImg.png";
import currencyConverterImg from "../assets/ProjectImages/currencyConverterImg.png";
import ecommerceImg from "../assets/ProjectImages/ecommerceImg.png";
import CodingProfileCard from "../components/CodingProfileCard";
import { SiLeetcode, SiGeeksforgeeks, SiGithub } from "react-icons/si";

const Home = () => {
    return (
        <main className="bg-[#09090B] text-white">
            <section className="mx-auto flex min-h-screen max-w-7xl flex-col-reverse items-center justify-center gap-16 px-6 py-24 lg:flex-row">
                <motion.div
                    initial={{ opacity: 0, y: 70 }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{
                        once: false,
                        amount: 0.25,
                    }}
                    transition={{
                        duration: 0.7,
                        ease: "easeOut",
                    }}
                    className="flex-1 text-center lg:text-left"
                >
                    <p className="text-lg font-medium text-pink-400">
                        Hello, I'm
                    </p>

                    <h1 className="mt-3 text-5xl font-bold leading-tight md:text-7xl">
                        Radhika Gupta
                    </h1>

                    <h2 className="mt-5 text-2xl font-semibold text-gray-300 md:text-4xl">
                        And I'm a{" "}
                        <span className="text-pink-400 whitespace-nowrap">
                            <Typewriter
                                words={[
                                    "Full Stack Developer",
                                    "AI explorer",
                                    "Problem Solver",
                                ]}
                                loop={0}
                                cursor
                                cursorStyle="|"
                                typeSpeed={120}
                                deleteSpeed={80}
                                delaySpeed={1500}
                            />
                        </span>
                    </h2>

                    <p className="mt-8 max-w-xl text-lg leading-8 text-gray-400">
                        I enjoy building modern web applications that combine thoughtful design with solid engineering. From crafting responsive interfaces to solving algorithmic challenges, I'm always looking to learn, improve, and create meaningful software.
                    </p>

                    <div className="mt-10 flex flex-wrap justify-center gap-5 lg:justify-start">

                        <a
                            href="/RadhikaGupta.pdf"
                            download="RadhikaGupta.pdf"
                            className="rounded-xl bg-pink-500 px-7 py-3 font-semibold transition hover:bg-pink-600"
                        >
                            Download Resume
                        </a>

                        <Link
                            to="/contact"
                            className="rounded-xl border border-white/10 bg-white/5 px-7 py-3 font-semibold backdrop-blur-xl transition hover:border-pink-500"
                        >
                            Contact Me
                        </Link>
                    </div>

                    <div className="mt-10 flex justify-center gap-6 text-2xl lg:justify-start">

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

                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 70 }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{
                        once: false,
                        amount: 0.25,
                    }}
                    transition={{
                        duration: 0.7,
                        ease: "easeOut",
                    }}
                    className="flex flex-1 justify-center"
                >

                    <div className="relative">

                        <div className="absolute inset-0 rounded-full bg-pink-500/20 blur-3xl"></div>

                        <img
                            alt=""
                            className="relative h-87.5 w-87.5 rounded-full border border-white/10 object-cover md:h-112.5 md:w-112.5"
                        />

                    </div>

                </motion.div>

            </section>

            <motion.section
                initial={{ opacity: 0, y: 70 }}
                whileInView={{
                    opacity: 1,
                    y: 0,
                }}
                viewport={{
                    once: false,
                    amount: 0.25,
                }}
                transition={{
                    duration: 0.7,
                    ease: "easeOut",
                }}
                className="mx-auto max-w-7xl px-6 py-28"
            >

                <div className="mb-10 flex items-center justify-between">

                    <h2 className="whitespace-nowrap text-3xl font-bold sm:text-4xl">
                        About Me
                    </h2>

                    <Link
                        to="/about"
                        className="flex items-center gap-2 text-lg text-pink-400 transition hover:gap-4"
                    >
                        <span className="hidden sm:inline text-lg">
                            Read More
                        </span>

                        <FaArrowRight />
                    </Link>

                </div>

                <p className="whitespace-pre-line max-w-5xl text-lg leading-9 text-gray-400">
                    {`Hello! I'm Radhika Gupta, a Computer Science undergraduate with a genuine passion for software engineering and building technology that creates meaningful impact. I enjoy transforming ideas into intuitive, responsive applications and find the entire process—from planning and designing to developing and refining—both exciting and rewarding. Every project I build is an opportunity to learn, experiment, and become a better developer while expanding my understanding of modern software development.

My primary interest lies in full-stack web development, where I enjoy crafting clean user interfaces and building scalable backend systems using modern technologies. Alongside development, I've built a strong foundation in Data Structures and Algorithms by solving hundreds of coding problems across platforms like LeetCode and GeeksforGeeks. Problem solving has strengthened my analytical thinking, improved my ability to write efficient and maintainable code, and taught me to approach challenges with creativity and precision. I'm also fascinated by Artificial Intelligence and enjoy exploring how intelligent systems can be combined with software engineering to build impactful solutions.

I believe that great software is built through curiosity, consistency, and continuous learning. Whether I'm building personal projects, contributing to open source, or experimenting with new technologies, I'm always looking for opportunities to grow as a developer. If you have an interesting project, an exciting idea, or simply want to connect and talk about technology, software engineering, or AI, I'd be delighted to connect and hear from you.`}
                </p>
            </motion.section>

            <motion.section
                initial={{ opacity: 0, y: 70 }}
                whileInView={{
                    opacity: 1,
                    y: 0,
                }}
                viewport={{
                    once: false,
                    amount: 0.25,
                }}
                transition={{
                    duration: 0.7,
                    ease: "easeOut",
                }}
                className="mx-auto max-w-7xl px-6 py-28"
            >

                <div className="mb-12 flex items-center justify-between">

                    <h2 className="whitespace-nowrap text-3xl font-bold sm:text-4xl">
                        Tech Stack
                    </h2>

                    <Link
                        to="/skills"
                        className="flex items-center gap-2 text-lg text-pink-400 transition hover:gap-4"
                    >
                        <span className="hidden sm:inline text-lg">
                            View All
                        </span>
                        <FaArrowRight />
                    </Link>

                </div>

                <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">

                    <SkillCard
                        icon={FaHtml5}
                        title="HTML"
                        subtitle="HyperText Markup Language"
                    />

                    <SkillCard
                        icon={FaCss3Alt}
                        title="CSS"
                        subtitle="Cascading Style Sheets"
                    />

                    <SkillCard
                        icon={SiJavascript}
                        title="JavaScript"
                        subtitle="Programming Language"
                    />

                    <SkillCard
                        icon={FaReact}
                        title="React"
                        subtitle="JS Library"
                    />

                    <SkillCard
                        icon={SiTailwindcss}
                        title="Tailwind CSS"
                        subtitle="Utility-First CSS"
                    />

                    <SkillCard
                        icon={SiMongodb}
                        title="MongoDB"
                        subtitle="NoSQL Database"
                    />

                    <SkillCard
                        icon={SiExpress}
                        title="Express.js"
                        subtitle="Backend Framework"
                    />

                    <SkillCard
                        icon={FaNodeJs}
                        title="Node.js"
                        subtitle="JavaScript Runtime"
                    />

                    <SkillCard
                        icon={SiMysql}
                        title="SQL"
                        subtitle="Structured Query Language"
                    />

                    <SkillCard
                        icon={FaJava}
                        title="Java"
                        subtitle="Programming Language"
                    />

                    <SkillCard
                        icon={FaPython}
                        title="Python"
                        subtitle="Programming Language"
                    />

                    <SkillCard
                        icon={SiCplusplus}
                        title="C++"
                        subtitle="Programming Language"
                    />

                    <SkillCard
                        icon={SiC}
                        title="C"
                        subtitle="Programming Language"
                    />

                </div>

            </motion.section>
            <motion.section
                initial={{ opacity: 0, y: 70 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.7 }}
                className="mx-auto max-w-7xl px-6 py-28"
            >

                <div className="mb-12">

                    <h2 className="whitespace-nowrap text-3xl font-bold sm:text-4xl">
                        Coding Profiles
                    </h2>

                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 lg:grid-cols-3">
                    <CodingProfileCard
                        icon={SiLeetcode}
                        title="LeetCode"
                        link="https://leetcode.com/u/Radhikagupta25/"
                    />

                    <CodingProfileCard
                        icon={SiGeeksforgeeks}
                        title="GeeksforGeeks"
                        link="https://www.geeksforgeeks.org/profile/radhikaaag7aqy"
                    />

                    <CodingProfileCard
                        icon={SiGithub}
                        title="GitHub"
                        link="https://github.com/Radhikagupta25"
                    />

                </div>

            </motion.section>

            <motion.section
                initial={{ opacity: 0, y: 70 }}
                whileInView={{
                    opacity: 1,
                    y: 0,
                }}
                viewport={{
                    once: false,
                    amount: 0.25,
                }}
                transition={{
                    duration: 0.7,
                    ease: "easeOut",
                }}
                className="mx-auto max-w-7xl px-6 py-28"
            >
                <div className="mb-12 flex items-center justify-between">

                    <h2 className="whitespace-nowrap text-3xl font-bold sm:text-4xl">
                        Featured Projects
                    </h2>

                    <Link
                        to="/projects"
                        className="flex items-center gap-2 text-lg text-pink-400 transition hover:gap-4"
                    >
                        <span className="hidden sm:inline text-lg">
                            View All
                        </span>
                        <FaArrowRight />
                    </Link>

                </div>

                <div className="grid gap-8 lg:grid-cols-3">

                    <ProjectCard
                        image={doodleDocImg}
                        title="DoodleDoc"
                        description="A feature-rich online whiteboard built with React, Konva, Zustand, and Tailwind CSS. Create drawings, shapes, text, and collaborate through room-based whiteboards with persistent storage."
                        techStack={["React", "Konva", "Zustand", "Tailwind CSS"]}
                        githubLink="https://github.com/Radhikagupta25/DoodleDoc"
                        liveLink="https://doodle-doc.vercel.app/"
                    />

                    <ProjectCard
                        image={currencyConverterImg}
                        title="Currency Converter"
                        description="A responsive currency converter that fetches real-time exchange rates and enables seamless conversion between multiple international currencies with a clean and intuitive interface."
                        techStack={["React", "API", "JavaScript", "Tailwind CSS"]}
                        githubLink="https://github.com/Radhikagupta25/CurrencyConverter"
                        liveLink="https://currency-converter-nezt.vercel.app/"
                    />

                    <ProjectCard
                        image={ecommerceImg}
                        title="E-Commerce Website"
                        description="A modern e-commerce application featuring product browsing, search, filtering, sorting, shopping cart functionality, and a responsive user experience powered by a REST API."
                        techStack={["HTML", "CSS", "JavaScript", "REST API"]}
                        githubLink="https://github.com/Radhikagupta25/E-commerce_website"
                        liveLink="https://e-commerce-website-seven-kappa.vercel.app/"
                    />

                </div>
            </motion.section>

            <motion.section
                initial={{ opacity: 0, y: 70 }}
                whileInView={{
                    opacity: 1,
                    y: 0,
                }}
                viewport={{
                    once: false,
                    amount: 0.25,
                }}
                transition={{
                    duration: 0.7,
                    ease: "easeOut",
                }}
                className="mx-auto max-w-7xl px-6 py-28"
            >
                <div className="mb-12 flex items-center justify-between">

                    <h2 className="whitespace-nowrap text-3xl font-bold sm:text-4xl">
                        Let's Connect
                    </h2>

                    <Link
                        to="/contact"
                        className="flex items-center gap-2 text-lg text-pink-400 transition hover:gap-4"
                    >
                        <span className="hidden sm:inline text-lg">
                            Contact Page
                        </span>

                        <FaArrowRight />
                    </Link>

                </div>

                <div className="grid gap-12 lg:grid-cols-2">

                    <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

                        <div className="space-y-6">

                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full rounded-xl border border-white/10 bg-[#111111] p-4 text-white outline-none transition focus:border-pink-500"
                            />

                            <input
                                type="email"
                                placeholder="Your Email"
                                className="w-full rounded-xl border border-white/10 bg-[#111111] p-4 text-white outline-none transition focus:border-pink-500"
                            />

                            <textarea
                                rows="6"
                                placeholder="Your Message"
                                className="w-full resize-none rounded-xl border border-white/10 bg-[#111111] p-4 text-white outline-none transition focus:border-pink-500"
                            />

                            <button className="rounded-xl bg-pink-500 px-8 py-3 font-semibold transition hover:bg-pink-600">
                                Send Message
                            </button>

                        </div>

                    </div>


                    <div className="flex flex-col justify-center">

                        <div className="hidden lg:block">

                            <h3 className="text-3xl font-bold">
                                Let's build something amazing together.
                            </h3>

                            <div className="mt-10 flex gap-5">

                                <a
                                    href="https://github.com/Radhikagupta25"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-2xl transition hover:border-pink-500 hover:text-pink-400"
                                >
                                    <FaGithub size={20} />
                                </a>

                                <a
                                    href="https://www.linkedin.com/in/radhika-gupta-596296290/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-2xl transition hover:border-pink-500 hover:text-pink-400"
                                >
                                    <FaLinkedin size={20} />
                                </a>

                                <a
                                    href="mailto:radhikaaaguptaaa25@gmail.com"
                                    className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-2xl transition hover:border-pink-500 hover:text-pink-400"
                                >
                                    <FaEnvelope size={20} />
                                </a>

                            </div>

                        </div>

                    </div>

                </div>

            </motion.section>

        </main>
    );
};

export default Home;