// HomePage.tsx

import { Button } from "@/components/ui/button";
import { motion} from "framer-motion"; // Импортируем Variants для типов
import { Linkedin, Instagram, Github, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

// Определяем интерфейс для пропсов HomePage
interface HomePageProps {
  style: "minimal" | "modern";
  setStyle: (style: "minimal" | "modern") => void;
  containerClasses: string;
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
}

// Компонент главной страницы, который будет содержать About Me, Social Media и другие секции
export default function HomePage({
  setStyle,
  containerClasses,
  menuOpen,
  setMenuOpen,
}: HomePageProps) { // Применяем интерфейс здесь
  return (
    <div className={containerClasses}>
      {/* Header */}
      <header className="flex justify-between items-center p-6 shadow-sm sticky top-0 bg-white/80 backdrop-blur z-50">
        <h1 className="text-3xl font-normal font-sans-fallback">Tatiana Korzyukova</h1>

        {/* Desktop nav */}
        <nav className="hidden md:flex space-x-6">
          <a href="#about" className="hover:text-blue-600">About</a>
          <Link to="/projects" className="hover:text-blue-600">Projects and Skills</Link>
          <Link to="/hobbies" className="hover:text-blue-600">Hobbies</Link>
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
          <a href="#about" className="block hover:text-blue-600" onClick={() => setMenuOpen(false)}>About</a>
          <Link to="/projects" className="block hover:text-blue-600" onClick={() => setMenuOpen(false)}>Projects and Skills</Link>
          <Link to="/hobbies" className="block hover:text-blue-600" onClick={() => setMenuOpen(false)}>Hobbies</Link>

          <div className="flex space-x-2 pt-4">
            <Button variant="outline" onClick={() => setStyle("minimal")}>Minimal</Button>
            <Button onClick={() => setStyle("modern")}>Modern</Button>
          </div>
        </div>
      )}

      {/* About Me */}
      <motion.section
        id="about"
        className="max-w-4xl mx-auto p-8 pt-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
  
      >
        <div className="flex flex-col md:flex-row items-center md:items-stretch gap-8">
          {/* Блок с фото */}
          <div className="flex-shrink-0 w-full md:w-1/2">
            <img src="/me2.jpg" alt="Tatiana Korzyukova" className="w-full h-full object-cover" />
          </div>
          {/* Блок с описанием */}
          <div className="flex-1 text-center md:text-left">
            <p className="text-lg leading-relaxed">
              Hello, my name is Tatiana. I was born in Chukotka, Russia, which is near the Arctic Circle and Alaska 
              (and yes, I've had to run away from a brown bear. I later moved to Moscow for my Master's degree 
              in Aerospace Engineering. Due to the tense situation in my home country, I moved to the United States
              where I mastered a new language and a new profession as a Front-end Developer. Currently,
              I am going through a Data Science bootcamp. That's my story in a nutshell. You can find more information 
              about me here on the website, but if there's anything you can't find, don't hesitate to ask.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Social Media */}
      <motion.section
        id="social"
        className="max-w-4xl mx-auto p-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      
      >
        <h2 className="text-3xl font-semibold mb-4">Social Media</h2>
        <div className="flex flex-wrap gap-6">
          <a href="https://www.linkedin.com/in/tatiana-korzyukova/" className="flex items-center space-x-2 hover:text-blue-600"><Linkedin /><span>LinkedIn</span></a>
          <a href="https://www.instagram.com/korzyukova/#" className="flex items-center space-x-2 hover:text-pink-600"><Instagram /><span>Instagram</span></a>
          <a href="https://github.com/Korzyukova" className="flex items-center space-x-2 hover:text-gray-600"><Github /><span>GitHub</span></a>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="text-center p-6 border-t mt-10">
        <p className="text-sm">© {new Date().getFullYear()} Tatiana Kor. All rights reserved.</p>
      </footer>
    </div>
  );
}