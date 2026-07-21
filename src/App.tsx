import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-start gap-8">
          <div>
            <h1 className="text-4xl font-bold">Rahul Joban</h1>
            <p className="text-xl text-gray-600 mt-2">Full-Stack Software Engineer</p>
            <p className="text-gray-600 mt-4 max-w-xl">
              I build tools that solve real problems — from retail inventory systems to 
              customer-facing web apps. Currently based in NYC.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="https://Github.com/rahuljoban" target="_blank" className="text-gray-600 hover:text-gray-900">
                <FaGithub size={24} />
              </a>
              <a href="https://www.linkedin.com/in/rahul-joban-35737612a/" target="_blank" className="text-gray-600 hover:text-gray-900">
                <FaLinkedin size={24} />
              </a>
              <a href="mailto:rahuljoban@gmail.com" className="text-gray-600 hover:text-gray-900">
                <FaEnvelope size={24} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-6">Projects</h2>
        <div className="border rounded-lg p-6 bg-white shadow-sm hover:shadow-md transition">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <h3 className="text-xl font-semibold">Retail Inventory App</h3>
              <p className="text-gray-600 mt-1">
                A full-stack inventory management system built for retail environments.
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                <span className="bg-gray-100 px-2 py-1 text-xs rounded">React</span>
                <span className="bg-gray-100 px-2 py-1 text-xs rounded">FastAPI</span>
                <span className="bg-gray-100 px-2 py-1 text-xs rounded">PostgreSQL</span>
                <span className="bg-gray-100 px-2 py-1 text-xs rounded">Tailwind</span>
                <span className="bg-gray-100 px-2 py-1 text-xs rounded">Vercel</span>
                <span className="bg-gray-100 px-2 py-1 text-xs rounded">Render</span>
              </div>
            </div>
            <a 
              href="https://retail-restock-app.vercel.app" 
              target="_blank" 
              className="flex items-center gap-1 text-blue-600 hover:text-blue-800 text-sm font-medium"
            >
              Live Demo <FiExternalLink size={14} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;