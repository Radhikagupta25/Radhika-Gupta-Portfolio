import { motion } from "framer-motion";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const CodingProfileCard = ({ icon: Icon, title, link }) => {
    return (
        <motion.a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="group flex h-52 flex-col items-center justify-center rounded-2xl border border-pink-500/20 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-pink-500/50 hover:shadow-[0_0_20px_rgba(236,72,153,0.18)]"
        >
            {/* Icon */}

            <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-pink-500/10 text-5xl text-pink-400 transition duration-300 group-hover:scale-110 group-hover:rotate-6">
                <Icon />
            </div>

            {/* Title */}

            <h3 className="mt-6 text-2xl font-semibold text-white">
                {title}
            </h3>

            {/* Hover Text */}

            <div className="mt-3 flex items-center gap-2 text-pink-400 opacity-0 transition-all duration-300 group-hover:opacity-100">
                <span className="text-sm font-medium">
                    View Profile
                </span>

                <FaArrowUpRightFromSquare className="text-xs" />
            </div>
        </motion.a>
    );
};

export default CodingProfileCard;