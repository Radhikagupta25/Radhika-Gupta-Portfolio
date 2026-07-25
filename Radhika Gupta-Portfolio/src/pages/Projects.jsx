import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";
import doodleDocImg from "../assets/ProjectImages/doodleDocImg.png";
import currencyConverterImg from "../assets/ProjectImages/currencyConverterImg.png";
import ecommerceImg from "../assets/ProjectImages/ecommerceImg.png";
import waveImg from "../assets/ProjectImages/waveImg.png"
import authServiceImg from "../assets/ProjectImages/authServiceImg.png"
import ToddlerToPhD from "../assets/ProjectImages/ToddlerToPhD.png"

const Projects = () => {
    return (
        <section className="bg-[#09090B] min-h-screen pt-16 pb-24 md:pt-20 md:pb-28">
            <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.6 }}
                    className="mb-10 md:mb-12"
                >
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                        Projects
                    </h1>
                </motion.div>

                <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">

                    <motion.div
                        initial={{ opacity: 0, y: 70 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: .5, delay: .3 }}
                    >
                        <ProjectCard
                            image={waveImg}
                            title="Wave - Real-Time Chat App"
                            description="A full-stack real-time messaging platform with 1:1 and group chats, live typing indicators, read receipts, presence tracking, and in-app voice/video calling powered by Socket.io and ZegoCloud."
                            techStack={["React", "Node.js", "Express.js", "MongoDB", "Socket.io", "JWT"]}
                            githubLink="https://github.com/Radhikagupta25/wave"
                            liveLink="https://wave-ashy-six.vercel.app/"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 70 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: .5, delay: .3 }}
                    >
                        <ProjectCard
                            image={authServiceImg}
                            title="Authentication Service"
                            description="A production-ready, reusable authentication backend with JWT auth, refresh token rotation, Google OAuth, email verification, and Swagger-documented APIs for seamless integration across MERN apps."
                            techStack={["Node.js", "Express.js", "MongoDB", "JWT", "Swagger"]}
                            githubLink="https://github.com/Radhikagupta25/Authentication-Service"
                            liveLink=""
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 70 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <ProjectCard
                            image={ToddlerToPhD}
                            title="ToddlerToPhD - AI Explanation Platform"
                            description="A full-stack AI-powered learning platform that explains any topic across Toddler, Teenager, and Expert levels using level-aware prompt engineering and the Gemini API, with instant level switching and an adaptive user interface."
                            techStack={[
                                "React",
                                "Node.js",
                                "Express.js",
                                "Gemini API",
                                "Tailwind CSS",
                            ]}
                            githubLink="https://github.com/Radhikagupta25/ToddlerToPhD"
                            liveLink="https://toddler-to-ph-d.vercel.app/"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 70 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: .5 }}
                    >
                        <ProjectCard
                            image={doodleDocImg}
                            title="DoodleDoc"
                            description="A feature-rich online whiteboard built with React, Konva, Zustand, and Tailwind CSS. Create drawings, shapes, text, and collaborate through room-based whiteboards with persistent storage."
                            techStack={["React", "Konva", "Zustand", "Tailwind CSS"]}
                            githubLink="https://github.com/Radhikagupta25/DoodleDoc"
                            liveLink="https://doodle-doc.vercel.app/"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 70 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: .5, delay: .15 }}
                    >
                        <ProjectCard
                            image={currencyConverterImg}
                            title="Currency Converter"
                            description="A responsive currency converter that fetches real-time exchange rates and enables seamless conversion between multiple international currencies with a clean and intuitive interface."
                            techStack={["React", "API", "JavaScript", "Tailwind CSS"]}
                            githubLink="https://github.com/Radhikagupta25/CurrencyConverter"
                            liveLink="https://currency-converter-nezt.vercel.app/"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 70 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: .5, delay: .3 }}
                    >
                        <ProjectCard
                            image={ecommerceImg}
                            title="E-Commerce Website"
                            description="A modern e-commerce application featuring product browsing, search, filtering, sorting, shopping cart functionality, and a responsive user experience powered by a REST API."
                            techStack={["HTML", "CSS", "JavaScript", "REST API"]}
                            githubLink="https://github.com/Radhikagupta25/E-commerce_website"
                            liveLink="https://e-commerce-website-seven-kappa.vercel.app/"
                        />
                    </motion.div>

                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{ delay: .4 }}
                    className="mt-20 border-t border-pink-500/20 pt-10"
                >
                    <p className="text-center text-gray-400 leading-8 max-w-3xl mx-auto">
                        I'm constantly exploring new technologies and building projects
                        that solve real-world problems. More exciting full-stack and AI-powered
                        applications are currently in development.
                    </p>
                </motion.div>

            </div>
        </section>
    );
};

export default Projects;