import { motion } from "framer-motion";

const SkillCard = ({ icon: Icon, title }) => {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25 }}
      className="group flex items-center gap-4 rounded-2xl border border-pink-500/20 bg-white/5 px-5 py-4 backdrop-blur-xl transition-all duration-300 hover:border-pink-500/50 hover:shadow-[0_0_20px_rgba(236,72,153,0.15)]"
    >
      <div className="shrink-0 text-3xl text-pink-400 transition duration-300 group-hover:scale-110">
        <Icon />
      </div>

      <h3 className="min-w-0 wrap-break-words text-base font-semibold text-white sm:text-lg">
        {title}
      </h3>
    </motion.div>
  );
};

export default SkillCard;