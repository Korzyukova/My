import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Linkedin, Instagram, Github, Menu, X } from "lucide-react";

export default function App() {
  const [style, setStyle] = useState<"minimal" | "modern">("minimal");
  const [menuOpen, setMenuOpen] = useState(false);

  const containerClasses =
    style === "minimal"
      ? "bg-white text-gray-900 font-sans"
      : "bg-gradient-to-b from-gray-100 to-gray-300 text-gray-800 font-sans";

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className={containerClasses}>
      {/* Header */}
      <header className="flex justify-between items-center p-6 shadow-sm sticky top-0 bg-white/80 backdrop-blur z-50">
        <h1 className="text-3xl font-normal font-sans-fallback ">Tatiana Korzyukova</h1>

        {/* Desktop nav */}
        <nav className="hidden md:flex space-x-6">
          <a href="#about" className="hover:text-blue-600">About</a>
          <a href="#photos" className="hover:text-blue-600">Photos</a>
          <a href="#projects" className="hover:text-blue-600">Projects</a>
          <a href="#social" className="hover:text-blue-600">Social</a>
          <a href="#hobbies" className="hover:text-blue-600">Hobbies</a>
          <a href="#skills" className="hover:text-blue-600">Skills</a>
        </nav>

        {/* Style switch */}
        <div className="hidden md:flex space-x-2">
          <Button variant="outline" onClick={() => setStyle("minimal")}>Minimal</Button>
          <Button onClick={() => setStyle("modern")}>Modern</Button>
        </div>

        {/* Mobile menu toggle */}
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </header>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur shadow p-6 space-y-4">
          {[
            ["#about", "About"],
            ["#photos", "Photos"],
            ["#projects", "Projects"],
            ["#social", "Social"],
            ["#hobbies", "Hobbies"],
            ["#skills", "Skills"],
          ].map(([href, label]) => (
            <a key={href} href={href} className="block hover:text-blue-600" onClick={() => setMenuOpen(false)}>
              {label}
            </a>
          ))}

          <div className="flex space-x-2 pt-4">
            <Button variant="outline" onClick={() => setStyle("minimal")}>Minimal</Button>
            <Button onClick={() => setStyle("modern")}>Modern</Button>
          </div>
        </div>
      )}

      {/* About Me */}
      <motion.section
        id="about"
        className="max-w-4xl mx-auto p-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={sectionVariants}
      >
        <h2 className="text-3xl font-semibold mb-4">About Me</h2>
        <p className="text-lg leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </motion.section>

      {/* Travel Photos */}
      <motion.section
        id="photos"
        className="max-w-5xl mx-auto p-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={sectionVariants}
      >
        <h2 className="text-3xl font-semibold mb-6">Travel Photos</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <img
              key={i}
              src={`https://source.unsplash.com/random/800x600?sig=${i}&travel`}
              alt="Travel"
              className="rounded-2xl shadow w-full h-48 object-cover"
            />
          ))}
        </div>
      </motion.section>

      {/* Projects */}
      <motion.section
        id="projects"
        className="max-w-4xl mx-auto p-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={sectionVariants}
      >
        <h2 className="text-3xl font-semibold mb-4">Projects</h2>
        <ul className="list-disc list-inside space-y-2">
          <li><a href="#" className="text-blue-600 underline">Project One</a></li>
          <li><a href="#" className="text-blue-600 underline">Project Two</a></li>
          <li><a href="#" className="text-blue-600 underline">Project Three</a></li>
        </ul>
      </motion.section>

      {/* Social Media */}
      <motion.section
        id="social"
        className="max-w-4xl mx-auto p-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={sectionVariants}
      >
        <h2 className="text-3xl font-semibold mb-4">Social Media</h2>
        <div className="flex flex-wrap gap-6">
          <a href="https://www.linkedin.com/in/tatiana-korzyukova/" className="flex items-center space-x-2 hover:text-blue-600">
            <Linkedin /><span>LinkedIn</span>
          </a>
          <a href="https://www.instagram.com/korzyukova/#" className="flex items-center space-x-2 hover:text-pink-600">
            <Instagram /><span>Instagram</span>
          </a>
          <a href="https://github.com/Korzyukova" className="flex items-center space-x-2 hover:text-gray-600">
            <Github /><span>GitHub</span>
          </a>
        </div>
      </motion.section>

      {/* Hobbies */}
      <motion.section
        id="hobbies"
        className="max-w-4xl mx-auto p-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={sectionVariants}
      >
        <h2 className="text-3xl font-semibold mb-4">Hobbies</h2>
        <p className="mb-4">
          In my free time I enjoy knitting and hiking. You can explore more on my YouTube channel:
        </p>
        <a href="#" className="text-red-600 underline">My YouTube Channel</a>
      </motion.section>

      {/* Skills */}
      <motion.section
        id="skills"
        className="max-w-4xl mx-auto p-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={sectionVariants}
      >
        <h2 className="text-3xl font-semibold mb-4">Skills</h2>
        <p>
          Explore my full skillset <a href="#" className="text-blue-600 underline">here</a>.
        </p>
      </motion.section>

      {/* Footer */}
      <footer className="text-center p-6 border-t mt-10">
        <p className="text-sm">© {new Date().getFullYear()} Tatiana Kor. All rights reserved.</p>
      </footer>
    </div>
  );
}
