import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';
import Resume from './Resume';
import Navbar from './components/Navbar';

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
      style={{ backgroundImage: "url('/background.jpg')" }}
    >
      {/* Dark overlay */}
      <div className="min-h-screen backdrop-brightness-50 flex flex-col">
        {/* Navbar */}
        <Navbar />

        {/* Header */}
        <header className="w-full bg-slate-900/80 backdrop-blur-sm border-b border-slate-700/50 py-8 md:py-12">
          <div className="max-w-6xl mx-auto px-6 flex flex-row items-center justify-between gap-4 md:gap-10">
            <div className="flex-1 min-w-0">
              <h1 className="text-3xl md:text-6xl font-extrabold tracking-tight">Rahul Joban</h1>
              <p className="text-lg md:text-2xl text-slate-300 font-medium mt-1">Full-Stack Software Engineer</p>
              <p className="text-sm md:text-base text-slate-400 mt-1">NYC · Building tools that solve real problems</p>
            </div>
            <img
              src="/profile.jpg"
              alt="Rahul Joban"
              className="w-16 h-16 md:w-24 md:h-24 rounded-full border-2 border-slate-600 shadow-lg object-cover flex-shrink-0"
            />
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 max-w-6xl mx-auto w-full px-6 py-8 md:py-12">
          <section className="mb-16">
            <p className="text-xl md:text-2xl text-slate-200 max-w-3xl leading-relaxed drop-shadow-lg">
              I build tools that solve real problems — from retail inventory systems to customer-facing web apps.
            </p>

            <div className="flex flex-wrap gap-4 mt-6">
              <div className="flex gap-6 text-slate-300">
                <a href="https://github.com/rahuljoban" target="_blank" className="text-[#333] hover:text-[#000] transition-colors">
                  <FaGithub size={28} />
                </a>
                <a href="https://linkedin.com/in/rahuljobanputra" target="_blank" className="text-[#0A66C2] hover:text-[#004182] transition-colors">
                  <FaLinkedin size={28} />
                </a>
                <a href="mailto:rahuljoban@gmail.com" className="text-[#EA4335] hover:text-[#C5221F] transition-colors">
                  <FaEnvelope size={28} />
                </a>
              </div>
            </div>
          </section>

          {/* Projects */}
          <section className="mt-6">
            <h2 className="inline-block text-3xl md:text-4xl font-bold tracking-tight px-6 py-2 rounded-full border border-slate-600 bg-slate-900/70 backdrop-blur-sm text-slate-100 mb-6">
              Projects
            </h2>

            <div className="bg-slate-900/70 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-slate-600 transition-colors">
              <div className="flex flex-wrap items-start justify-between gap-6">
                <div>
                  <h3 className="text-2xl md:text-3xl font-semibold">Retail Inventory App</h3>
                  <p className="text-lg text-slate-300 mt-2 max-w-xl leading-relaxed">
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

        <footer className="max-w-6xl mx-auto w-full px-6 py-8 text-center text-base text-slate-400 border-t border-slate-700/50">
          © {new Date().getFullYear()} Rahul Joban — built with React & Tailwind
        </footer>
      </div>
    </div>
  );
}

export default App;