import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaJava,
  FaGithub,
  FaHtml5,
  FaPython,
} from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { TbBrandCpp } from "react-icons/tb";
import { PiFileC } from "react-icons/pi";
import { VscVscode } from "react-icons/vsc";
import {
  SiJavascript,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPostman,
  SiVercel,
  SiNetlify,
} from "react-icons/si";

const categories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: <FaReact /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "HTML5", icon: <FaHtml5 /> },
      { name: "CSS3", icon: <FaCss3Alt /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "MySQL", icon: <SiMysql /> },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "Java", icon: <FaJava /> },
      { name: "Python", icon: <FaPython /> },
      { name: "C", icon: <PiFileC /> },
      { name: "C++", icon: <TbBrandCpp /> },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "GitHub", icon: <FaGithub /> },
      { name: "VS Code", icon: <VscVscode /> },
      { name: "Postman", icon: <SiPostman /> },
      { name: "Vercel", icon: <SiVercel /> },
      { name: "Netlify", icon: <SiNetlify /> },
    ],
  },
];

export default function Skills() {
  return (
    <section className="bg-[#09090B] pt-16 pb-24 md:pt-20 md:pb-28 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold mb-16"
        >
          Skills
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-2">

          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              className="rounded-3xl border border-pink-500/20 bg-[#111111] p-8 shadow-lg transition-all hover:border-pink-500/60 hover:shadow-[0_0_35px_rgba(236,72,153,.2)]"
            >
              <h3 className="text-2xl font-semibold text-pink-400 mb-8">
                {category.title}
              </h3>

              <div className="grid grid-cols-2 gap-4">

                {category.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ scale: 1.08 }}
                    className="flex items-center gap-3 rounded-xl border border-white/10 bg-[#1A1A1A] px-4 py-3 transition-all hover:border-pink-500 hover:bg-pink-500/10"
                  >
                    <div className="text-2xl text-pink-400">
                      {skill.icon}
                    </div>

                    <span className="text-gray-200 text-sm font-medium">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}