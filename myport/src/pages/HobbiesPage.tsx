// HobbiesPage.jsx
import { Link } from "react-router-dom";

export default function HobbiesPage() {
  const hobbiesPhotos = [
    "https://source.unsplash.com/random/800x600?knitting",
    "https://source.unsplash.com/random/800x600?hiking",
    "https://source.unsplash.com/random/800x600?youtube",
    "https://source.unsplash.com/random/800x600?hobby",
    "https://source.unsplash.com/random/800x600?mountain",
    "https://source.unsplash.com/random/800x600?travel"
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

      <main className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6 text-center">My Hobbies</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {hobbiesPhotos.map((src, index) => (
            <img
              key={index}
              src={src}
              alt="Hobby photo"
              className="rounded-2xl shadow w-full h-48 object-cover"
            />
          ))}
        </div>
      </main>
      
      <footer className="text-center p-6 border-t mt-10">
        <p className="text-sm">© {new Date().getFullYear()} Tatiana Kor. All rights reserved.</p>
      </footer>
    </div>
  );
}