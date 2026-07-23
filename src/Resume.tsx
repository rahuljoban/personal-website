import { FaDownload } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Resume() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans flex flex-col">
      {/* Simple header with back link */}
      <header className="w-full bg-slate-800/50 backdrop-blur-sm border-b border-slate-700/50 py-4 px-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link to="/" className="text-indigo-300 hover:text-indigo-200 transition-colors">
            ← Back to Portfolio
          </Link>
          <a
            href="/resume.pdf"
            download
            className="flex items-center gap-2 text-indigo-300 hover:text-indigo-200 font-medium text-sm bg-indigo-900/30 px-4 py-2 rounded-full border border-indigo-700/50 hover:bg-indigo-800/40 transition-all"
          >
            <FaDownload size={14} /> Download PDF
          </a>
        </div>
      </header>

      {/* Embedded PDF Viewer */}
      <main className="flex-1 w-full px-4 py-6">
        <div className="max-w-5xl mx-auto h-[calc(100vh-120px)] rounded-xl overflow-hidden border border-slate-700/50 shadow-2xl">
          <iframe
            src="/resume.pdf"
            className="w-full h-full"
            title="Rahul Joban's Resume"
          />
        </div>
      </main>
    </div>
  );
}