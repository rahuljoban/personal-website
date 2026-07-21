import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans flex flex-col">
      {/* Header — big, bold, full-width */}
      <header className="w-full bg-slate-800/50 backdrop-blur-sm border-b border-slate-700/50 py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6 flex items-center gap-10 md:gap-16">
          {/* Photo placeholder — even bigger */}
          <div className="w-32 h-32 md:w-48 md:h-48 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 border-4 border-slate-700 shadow-2xl flex items-center justify-center text-slate-300 text-5xl flex-shrink-0 overflow-hidden">
            <span>📷</span>
          </div>
          <div>
            <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight">Rahul Joban</h1>
            <p className="text-3xl md:text-4xl text-slate-300 font-medium mt-3">Full-Stack Software Engineer</p>
            <p className="text-xl text-slate-400 mt-3">NYC · Building tools that solve real problems</p>
          </div>
        </div>
      </header>

      {/* Main Content — fills remaining space with bigger text */}
      <main className="flex-1 max-w-6xl mx-auto w-full px-6 py-20 md:py-28">
        {/* Bio — bigger and bolder */}
        <section className="mb-24">
          <p className="text-2xl md:text-3xl text-slate-300 max-w-4xl leading-relaxed">
            I build tools that solve real problems — from retail inventory systems to customer-facing web apps.
          </p>
          <div className="flex gap-8 mt-10 text-slate-400">
            <a href="https://github.com/rahuljoban" target="_blank" className="hover:text-white transition-colors">
              <FaGithub size={36} />
            </a>
            <a href="https://linkedin.com/in/rahuljobanputra" target="_blank" className="hover:text-white transition-colors">
              <FaLinkedin size={36} />
            </a>
            <a href="mailto:rahuljoban@gmail.com" className="hover:text-white transition-colors">
              <FaEnvelope size={36} />
            </a>
          </div>
        </section>

        {/* Projects */}
        <section>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight border-b border-slate-700 pb-4 mb-8">
            Projects
          </h2>

          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 md:p-10 hover:border-slate-600 transition-colors">
            <div className="flex flex-wrap items-start justify-between gap-6">
              <div>
                <h3 className="text-3xl md:text-4xl font-semibold">Retail Inventory App</h3>
                <p className="text-xl text-slate-400 mt-3 max-w-xl leading-relaxed">
                  Full-stack inventory management system with live stock tracking, priority sorting, and CRUD operations.
                </p>
                <div className="flex flex-wrap gap-3 mt-6">
                  <span className="bg-slate-700 px-4 py-2 text-sm font-mono rounded-full border border-slate-600">React</span>
                  <span className="bg-slate-700 px-4 py-2 text-sm font-mono rounded-full border border-slate-600">FastAPI</span>
                  <span className="bg-slate-700 px-4 py-2 text-sm font-mono rounded-full border border-slate-600">PostgreSQL</span>
                  <span className="bg-slate-700 px-4 py-2 text-sm font-mono rounded-full border border-slate-600">Tailwind</span>
                  <span className="bg-slate-700 px-4 py-2 text-sm font-mono rounded-full border border-slate-600">Vercel</span>
                  <span className="bg-slate-700 px-4 py-2 text-sm font-mono rounded-full border border-slate-600">Render</span>
                </div>
              </div>
              <a
                href="https://retail-restock-app.vercel.app"
                target="_blank"
                className="flex items-center gap-2 text-indigo-300 hover:text-indigo-200 font-medium text-lg bg-indigo-900/30 px-6 py-3 rounded-full border border-indigo-700/50 hover:bg-indigo-800/40 transition-all shrink-0"
              >
                Live Demo <FiExternalLink size={20} />
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="max-w-6xl mx-auto w-full px-6 py-10 text-center text-lg text-slate-500 border-t border-slate-800/50">
        © {new Date().getFullYear()} Rahul Joban — built with React & Tailwind
      </footer>
    </div>
  );
}

export default App;