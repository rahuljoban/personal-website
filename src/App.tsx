import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';
import Resume from './Resume';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  return (
    <div 
      className="min-h-screen text-slate-100 font-sans flex flex-col bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/background.jpg')" }}>      {/* Header — slightly smaller, less padding */}
      <header className="w-full bg-slate-800/50 backdrop-blur-sm border-b border-slate-700/50 py-10 md:py-14">
        <div className="max-w-6xl mx-auto px-6 flex items-center gap-8 md:gap-12">
        <img 
          src="/profile.jpg" 
          alt="Rahul Joban" 
          className="w-32 h-32 md:w-40 md:h-40 rounded-full border-2 border-slate-600 shadow-lg object-cover flex-shrink-0"        />
          <div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">Rahul Joban</h1>
            <p className="text-2xl md:text-3xl text-slate-300 font-medium mt-2">Full-Stack Software Engineer</p>
            <p className="text-lg text-slate-400 mt-2">NYC · Building tools that solve real problems</p>
          </div>
        </div>
      </header>

      {/* Main Content — reduced top padding to close the gap */}
      <main className="flex-1 max-w-6xl mx-auto w-full px-6 py-8 md:py-12">
        {/* Bio — tighter spacing */}
        <section className="mb-16">
          <p className="text-xl md:text-2xl text-slate-300 max-w-3xl leading-relaxed">
            I build tools that solve real problems — from retail inventory systems to customer-facing web apps.
          </p>
          <div className="flex gap-6 mt-6">
            <a 
              href="https://github.com/rahuljoban" 
              target="_blank" 
              className="text-[#333] hover:text-[#000] transition-colors"
            >
              <FaGithub size={28} />
            </a>
            <a 
              href="https://linkedin.com/in/rahuljobanputra" 
              target="_blank" 
              className="text-[#0A66C2] hover:text-[#004182] transition-colors"
            >
              <FaLinkedin size={28} />
            </a>
            <a 
              href="mailto:rahuljoban@gmail.com" 
              className="text-[#EA4335] hover:text-[#C5221F] transition-colors"
            >
              <FaEnvelope size={28} />
            </a>
          </div>
          <Link
            to="/resume"
            className="inline-flex items-center gap-2 text-indigo-300 hover:text-indigo-200 font-medium text-sm bg-indigo-900/30 px-4 py-2 rounded-full border border-indigo-700/50 hover:bg-indigo-800/40 transition-all mt-2"
          >
            📄 View Resume
          </Link>
        </section>

        {/* Projects */}
        <section>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight border-b border-slate-700 pb-4 mb-8">
            Projects
          </h2>

          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-slate-600 transition-colors">
            <div className="flex flex-wrap items-start justify-between gap-6">
              <div>
                <h3 className="text-2xl md:text-3xl font-semibold">Retail Inventory App</h3>
                <p className="text-lg text-slate-400 mt-2 max-w-xl leading-relaxed">
                  Full-stack inventory management system with live stock tracking, priority sorting, and CRUD operations.
                </p>
                <div className="flex flex-wrap gap-3 mt-6">
                  <span className="bg-slate-700 px-4 py-1.5 text-sm font-mono rounded-full border border-slate-600">React</span>
                  <span className="bg-slate-700 px-4 py-1.5 text-sm font-mono rounded-full border border-slate-600">FastAPI</span>
                  <span className="bg-slate-700 px-4 py-1.5 text-sm font-mono rounded-full border border-slate-600">PostgreSQL</span>
                  <span className="bg-slate-700 px-4 py-1.5 text-sm font-mono rounded-full border border-slate-600">Tailwind</span>
                  <span className="bg-slate-700 px-4 py-1.5 text-sm font-mono rounded-full border border-slate-600">Vercel</span>
                  <span className="bg-slate-700 px-4 py-1.5 text-sm font-mono rounded-full border border-slate-600">Render</span>
                </div>
              </div>
              <a
                href="https://retail-restock-app.vercel.app"
                target="_blank"
                className="flex items-center gap-2 text-indigo-300 hover:text-indigo-200 font-medium text-base bg-indigo-900/30 px-5 py-2.5 rounded-full border border-indigo-700/50 hover:bg-indigo-800/40 transition-all shrink-0"
              >
                Live Demo <FiExternalLink size={18} />
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="max-w-6xl mx-auto w-full px-6 py-8 text-center text-base text-slate-500 border-t border-slate-800/50">
        © {new Date().getFullYear()} Rahul Joban — built with React & Tailwind
      </footer>
    </div>
  );
}

export default App;