// ProjectsSkillsPage.jsx
import { Link } from "react-router-dom";

export default function ProjectsSkillsPage() {
  const projects = [
    { title: "Project One", link: "#", image: "https://source.unsplash.com/random/800x600?project1" },
    { title: "Project Two", link: "#", image: "https://source.unsplash.com/random/800x600?project2" },
    { title: "Project Three", link: "#", image: "https://source.unsplash.com/random/800x600?project3" },
  ];

  const skills = [
    "JavaScript", "React", "HTML", "CSS", "Tailwind CSS", "Framer Motion",
    "Python", "SQL", "Machine Learning", "Data Analysis"
  ];

  return (
    <div className="bg-white text-gray-900 font-sans min-h-screen p-8">
      <header className="flex justify-between items-center p-6 shadow-sm sticky top-0 bg-white/80 backdrop-blur z-50 mb-8">
        <h1 className="text-3xl font-normal font-sans-fallback">Tatiana Korzyukova</h1>
        <nav className="flex space-x-6">
          <Link to="/" className="hover:text-blue-600">Home</Link>
          <Link to="/projects" className="hover:text-blue-600">Projects and Skills</Link>
          <Link to="/hobbies" className="hover:text-blue-600">Hobbies</Link>
        </nav>
      </header>

      <main className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {projects.map((project, index) => (
            <a key={index} href={project.link} className="block group">
              <img
                src={project.image}
                alt={project.title}
                className="rounded-lg shadow-md w-full h-48 object-cover group-hover:scale-105 transition-transform"
              />
              <p className="mt-2 text-center text-lg font-medium group-hover:text-blue-600">{project.title}</p>
            </a>
          ))}
        </div>

        <h2 className="text-3xl font-semibold mb-6 text-center">Skills</h2>
        <ul className="flex flex-wrap justify-center gap-4 text-lg">
          {skills.map((skill, index) => (
            <li key={index} className="bg-gray-200 text-gray-800 px-4 py-2 rounded-full">{skill}</li>
          ))}
        </ul>
      </main>
      
      <footer className="text-center p-6 border-t mt-10">
        <p className="text-sm">© {new Date().getFullYear()} Tatiana Kor. All rights reserved.</p>
      </footer>
    </div>
  );
}