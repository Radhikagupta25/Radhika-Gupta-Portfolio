import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaFileAlt,
} from "react-icons/fa";
import { HiOutlineMapPin } from "react-icons/hi2";

const contacts = [
  {
    icon: <FaEnvelope />,
    title: "Email",
    value: "radhikaaaguptaaa25@gmail.com",
    link: "mailto:radhikaaaguptaaa25@gmail.com",
  },
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    value: "+91 9084062509",
    link: "tel:+919084062509",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Location",
    value: "Delhi, Uttar Pradesh, India",
  },
  {
    icon: <FaGithub />,
    title: "GitHub",
    value: "github.com/Radhikagupta25",
    link: "https://github.com/Radhikagupta25",
  },
  {
    icon: <FaLinkedin />,
    title: "LinkedIn",
    value: "linkedin.com/in/radhika-gupta-596296290",
    link: "https://www.linkedin.com/in/radhika-gupta-596296290/",
  },
  {
    icon: <FaFileAlt />,
    title: "Resume",
    value: "Download Resume",
    link: "/RadhikaGupta.pdf",
  },
];

export default function Contact() {
  return (
    <section className="bg-[#09090B] min-h-screen pt-25 pb-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: .6 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Get in{" "}
            <span className="text-pink-500">
              touch
            </span>
          </h1>

          <p className="mt-5 text-gray-400 leading-8 text-[15px] sm:text-base">
            Feel free to reach out through any of the platforms below.
            Whether it's an internship opportunity, collaboration,
            freelance work, or simply a conversation about technology,
            I'd be happy to connect.
          </p>
        </motion.div>


        <div className="mt-16 grid gap-6 md:grid-cols-2">

          {contacts.map((item, index) => (

            <motion.a
              key={item.title}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{
                duration: .5,
                delay: index * .1,
              }}
              whileHover={{
                y: -6,
                scale: 1.02,
              }}
              className="group rounded-2xl border border-white/5 bg-[#171717] p-6 transition-all hover:border-pink-500/40 hover:shadow-[0_0_30px_rgba(236,72,153,.15)]"
            >

              <div className="flex items-center gap-4">

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-pink-500/10 text-xl text-pink-400 transition-all group-hover:bg-pink-500 group-hover:text-white">
                  {item.icon}
                </div>

                <div>

                  <h3 className="text-lg font-medium text-gray-300">
                    {item.title}
                  </h3>

                  <p className="mt-1 break-all text-pink-400 transition-colors group-hover:text-pink-300">
                    {item.value}
                  </p>

                </div>

              </div>

            </motion.a>

          ))}

        </div>
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="mt-24"
        >
          <h2 className="flex items-center gap-3 text-3xl md:text-4xl font-bold text-white">
            <HiOutlineMapPin className="text-pink-500 text-3xl md:text-4xl" />
            Find Me on the Map
          </h2>

          <p className="mt-5 max-w-3xl text-gray-400 leading-8 text-[15px] sm:text-base">
            Whether you're around Delhi or just passing through, you're always welcome to drop a hello! Here's where I'm currently based — let's catch up for coffee, collaboration, or just a quick chat.
          </p>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-10 overflow-hidden rounded-2xl border border-pink-500/20 shadow-[0_0_35px_rgba(236,72,153,0.12)]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d448196.5259033308!2d76.76357470437429!3d28.643684726799833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi!5e0!3m2!1sen!2sin!4v1782422799654!5m2!1sen!2sin"
              className="w-full h-75 sm:h-100 md:h-125"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </motion.div>
        </motion.section>
        {/* ======================== CTA + CONTACT FORM ======================== */}

        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="mt-24 border-t border-pink-500/20 pt-20"
        >
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left Content */}

            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6 }}
            >

              <h2 className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Let's connect
                <br />
                <span className="text-pink-500">&</span> build something cool
              </h2>

              <p className="mt-8 max-w-lg text-gray-400 leading-8 text-[15px] sm:text-base">
                I'm always open to internship opportunities, collaborative
                projects, hackathons, and exciting software engineering
                challenges. If you have an idea, opportunity, or simply want
                to connect, I'd love to hear from you.
              </p>

            </motion.div>

            {/* Contact Form */}

            <motion.form
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6 }}
              className="rounded-3xl border border-pink-500/20 bg-[#111111] p-6 sm:p-8 shadow-[0_0_35px_rgba(236,72,153,.12)]"
            >

              {/* Name */}

              <div className="mb-6">

                <label className="block text-gray-300 mb-2">
                  Your Name
                </label>

                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full rounded-xl border border-white/10 bg-[#1B1B1B] px-4 py-3
          text-white placeholder:text-gray-500
          focus:border-pink-500 focus:outline-none transition"
                />

              </div>

              {/* Email */}

              <div className="mb-6">

                <label className="block text-gray-300 mb-2">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full rounded-xl border border-white/10 bg-[#1B1B1B] px-4 py-3
          text-white placeholder:text-gray-500
          focus:border-pink-500 focus:outline-none transition"
                />

              </div>

              {/* Message */}

              <div className="mb-8">

                <label className="block text-gray-300 mb-2">
                  Message
                </label>

                <textarea
                  rows={6}
                  placeholder="Write your message..."
                  className="w-full rounded-xl border border-white/10 bg-[#1B1B1B] px-4 py-3
          text-white placeholder:text-gray-500 resize-none
          focus:border-pink-500 focus:outline-none transition"
                />

              </div>

              {/* Button */}

              <motion.button
                whileHover={{
                  scale: 1.03,
                }}
                whileTap={{
                  scale: .97,
                }}
                type="submit"
                className="w-full rounded-xl bg-pink-500 py-3 font-semibold text-white
        transition hover:bg-pink-600"
              >
                Send Message
              </motion.button>

            </motion.form>

          </div>
        </motion.section>

      </div>
    </section>

  );
}