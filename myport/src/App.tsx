import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";


// Импортируем компоненты страниц из папки pages
import HomePage from "./pages/HomePage.tsx";
import ProjectsSkillsPage from "./pages/ProjectsSkillsPage.tsx";
import HobbiesPage from "./pages/HobbiesPage.tsx";

// Главный компонент, который будет маршрутизировать
export default function MainApp() {
  const [style, setStyle] = useState<"minimal" | "modern">("minimal"); // Добавлен тип
  const [menuOpen, setMenuOpen] = useState(false);

  const containerClasses =
    style === "minimal"
      ? "bg-white text-gray-900 font-sans"
      : "bg-gradient-to-b from-gray-100 to-gray-300 text-gray-800 font-sans";

  // Определяем sectionVariants здесь, так как оно используется в HomePage

  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <HomePage
            style={style}
            setStyle={setStyle}
            containerClasses={containerClasses}
            menuOpen={menuOpen}
            setMenuOpen={setMenuOpen}
            
          />
        } />
        <Route path="/projects" element={<ProjectsSkillsPage />} />
        <Route path="/hobbies" element={<HobbiesPage />} />
      </Routes>
    </BrowserRouter>
  );
}