import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({
    image,
    title,
    description,
    techStack,
    githubLink,
    liveLink,
}) => {
    return (
        <motion.div
            whileHover={{ y: -10, scale: 1.02 }}
            transition={{ duration: 0.3 }}
            onClick={() => window.open(liveLink, "_blank")}
            className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-xl transition-all duration-300 hover:border-pink-500/40"
        >
            <div className="overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="h-60 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
            </div>

            <div className="p-6">
                <h2 className="text-2xl font-bold text-white">
                    {title}
                </h2>

                <p className="mt-4 text-gray-400 leading-7">
                    {description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                    {techStack.map((tech, index) => (
                        <span
                            key={index}
                            className="rounded-full border border-pink-500/30 bg-pink-500/10 px-4 py-1 text-sm font-medium text-pink-300"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                <div className="mt-8 flex flex-wrap gap-4">

                    <a
                        href={githubLink}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-2 rounded-xl border border-white/10 bg-[#181818] px-5 py-3 font-medium text-white transition-all duration-300 hover:border-pink-500 hover:bg-pink-500"
                    >
                        <FaGithub />
                        GitHub
                    </a>

                    <a
                        href={liveLink}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 rounded-xl bg-pink-500 px-5 py-3 font-medium text-white transition-all duration-300 hover:bg-pink-600"
                    >
                        <FaExternalLinkAlt />
                        Live Demo
                    </a>

                </div>

            </div>
        </motion.div>
    );
};

export default ProjectCard;