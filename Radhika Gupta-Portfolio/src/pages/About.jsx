import { motion } from "framer-motion";
import { VerticalTimeline, VerticalTimelineElement, } from "react-vertical-timeline-component";
import { FaGraduationCap, FaSchool } from "react-icons/fa";
import "react-vertical-timeline-component/style.min.css";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <main className="bg-[#09090B] text-white">

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
        className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10 pt-24 md:pt-32 pb-16"      >
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
          About Me
        </h1>


        <div className="mt-6 max-w-4xl space-y-5 text-[15px] sm:text-base leading-7 sm:leading-8 text-gray-400">

          <p>
            Hello! I'm <span className="font-medium text-white">Radhika Gupta</span>, a Computer Science undergraduate with an immense passion for software engineering and building products that create meaningful impact. I genuinely enjoy turning ideas into responsive, scalable applications while constantly exploring new technologies and better ways to solve problems.
          </p>

          <p>
            My journey revolves around full-stack web development, where I love bringing ideas to life through clean user interfaces and efficient backend systems. Alongside development, Data Structures & Algorithms have become an integral part of my learning, helping me strengthen my analytical thinking, optimize solutions, and approach every challenge with a problem-solving mindset.
          </p>

          <p>
            Beyond web development, I'm actively exploring Artificial Intelligence and its potential to build smarter applications. I believe growth comes from consistency, curiosity, and building real-world projects that push me outside my comfort zone. Every day is another opportunity to learn something new, improve my craft, and become a better software engineer. Right now, I’m actively looking for job and internship opportunities and building full-stack capabilities alongside AI/ML learning.

            You can reach out to me at{" "}
            <a href="mailto:radhikaaaguptaaa25@gmail.com">
              <b>
                <span style={{ color: "#ff69b4" }} className="break-all sm:break-normal">
                  radhikaaaguptaaa25@gmail.com
                </span>
              </b>
            </a>
            , or check out my work on{" "}
            <a
              href="https://github.com/Radhikagupta25"
              target="_blank"
              rel="noopener noreferrer"
            >
              <b>
                <span style={{ color: "#ff69b4" }}>GitHub</span>
              </b>
            </a>{" "}
            and{" "}
            <a
              href="https://www.linkedin.com/in/radhika-gupta-596296290/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <b>
                <span style={{ color: "#ff69b4" }}>LinkedIn</span>
              </b>
            </a>.
          </p>

        </div>

        <div className="mt-10 sm:mt-12">

          <div className="space-y-5">

            <div className="flex items-start gap-3 sm:gap-4">
              <div className="mt-2 h-2.5 w-2.5 rounded-full bg-pink-500 shrink-0"></div>

              <p className="text-[15px] sm:text-base leading-7 text-gray-400">
                Passionate about building responsive, scalable, and user-centric web applications using modern technologies.
              </p>
            </div>

            <div className="flex items-start gap-3 sm:gap-4">
              <div className="mt-2 h-2.5 w-2.5 rounded-full bg-pink-500 shrink-0"></div>

              <p className="text-[15px] sm:text-base leading-7 text-gray-400">
                Solved <span className="font-medium text-white">600+ DSA problems</span> across LeetCode and GeeksforGeeks, continuously improving problem-solving and analytical skills.
              </p>
            </div>

            <div className="flex items-start gap-3 sm:gap-4">
              <div className="mt-2 h-2.5 w-2.5 rounded-full bg-pink-500 shrink-0"></div>

              <p className="text-[15px] sm:text-base leading-7 text-gray-400">
                Built multiple frontend and full-stack projects while focusing on clean code, reusable components, and responsive design.
              </p>
            </div>

            <div className="flex items-start gap-3 sm:gap-4">
              <div className="mt-2 h-2.5 w-2.5 rounded-full bg-pink-500 shrink-0"></div>

              <p className="text-[15px] sm:text-base leading-7 text-gray-400">
                Constantly exploring Artificial Intelligence alongside software engineering to build impactful real-world solutions.
              </p>
            </div>

            <div className="flex items-start gap-3 sm:gap-4">
              <div className="mt-2 h-2.5 w-2.5 rounded-full bg-pink-500 shrink-0"></div>

              <p className="text-[15px] sm:text-base leading-7 text-gray-400">
                Always excited to collaborate, learn from experienced developers, and contribute to meaningful projects.
              </p>
            </div>

          </div>

        </div>

      </motion.section>
      <section className="max-w-7xl mx-auto px-6 py-24">
        <motion.h2
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
          className="text-3xl md:text-4xl font-bold mb-16 text-center"
        >
          Education
        </motion.h2>

        <VerticalTimeline lineColor="#ec4899">

          <VerticalTimelineElement
            contentStyle={{
              background: "#111111",
              color: "#fff",
              border: "1px solid rgba(236,72,153,.3)",
              borderRadius: "18px",
              boxShadow: "0 0 25px rgba(236,72,153,.15)",
            }}
            contentArrowStyle={{
              borderRight: "7px solid #ec4899",
            }}
            date="2024 - Present"
            iconStyle={{
              background: "#ec4899",
              color: "#fff",
            }}
            icon={<FaGraduationCap />}
          >
            <h3 className="text-xl font-semibold">
              B.Tech in Computer Science
            </h3>

            <h4 className="text-pink-400 mt-1">
              Ajay Kumar Garg Engineering College
            </h4>

            <p className="text-gray-300 mt-3">
              Current CGPA: <span className="text-white font-semibold">8.5</span>
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            contentStyle={{
              background: "#111111",
              color: "#fff",
              border: "1px solid rgba(236,72,153,.3)",
              borderRadius: "18px",
              boxShadow: "0 0 25px rgba(236,72,153,.15)",
            }}
            contentArrowStyle={{
              borderRight: "7px solid #ec4899",
            }}
            date="2024"
            iconStyle={{
              background: "#ec4899",
              color: "#fff",
            }}
            icon={<FaSchool />}
          >
            <h3 className="text-xl font-semibold">
              Senior Secondary Education
            </h3>

            <h4 className="text-pink-400 mt-1">
              Heritage Academy
            </h4>

            <p className="text-gray-300 mt-3">
              Percentage:{" "}
              <span className="text-white font-semibold">
                93.8%
              </span>
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            contentStyle={{
              background: "#111111",
              color: "#fff",
              border: "1px solid rgba(236,72,153,.3)",
              borderRadius: "18px",
              boxShadow: "0 0 25px rgba(236,72,153,.15)",
            }}
            contentArrowStyle={{
              borderRight: "7px solid #ec4899",
            }}
            date="2022"
            iconStyle={{
              background: "#ec4899",
              color: "#fff",
            }}
            icon={<FaSchool />}
          >
            <h3 className="text-xl font-semibold">
              Secondary Education
            </h3>

            <h4 className="text-pink-400 mt-1">
              Heritage Academy
            </h4>

            <p className="text-gray-300 mt-3">
              Percentage:{" "}
              <span className="text-white font-semibold">
                95.4%
              </span>
            </p>
          </VerticalTimelineElement>

        </VerticalTimeline>
      </section>
      <section className="mt-16">

        {/* Divider */}

        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="h-px w-full bg-pink-500/25"></div>
        </div>

        {/* Ending Text */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-16"
        >
          <div className="max-w-4xl mx-auto text-center">

            <p className="text-[15px] sm:text-base leading-9 text-gray-400">
              You can find more of my projects on the{" "}
              <Link
                to="/projects"
                className="font-semibold text-pink-400 hover:text-pink-300 transition-colors"
              >
                Projects
              </Link>{" "}
              page and explore the technologies, ideas, and problem-solving
              approach behind each of them.
            </p>

            <p className="mt-8 text-[15px] sm:text-base leading-9 text-gray-400">
              If you're looking for a developer who codes with{" "}
              <span className="font-semibold text-white">
                clarity, consistency, and creativity
              </span>
              —
            </p>

            <p className="mt-2 text-[15px] sm:text-base leading-9 text-gray-400">
              Let's connect via the{" "}
              <Link
                to="/contact"
                className="font-semibold text-pink-400 hover:text-pink-300 transition-colors"
              >
                Contact
              </Link>{" "}
              page and create something impactful together.
            </p>

          </div>
        </motion.div>

      </section>
    </main>
  );
};

export default About;