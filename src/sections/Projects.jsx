import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Section from '../components/Section';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    id: 1,
    title: "Women Safety",
    category: "Full Stack",
    description: "A comprehensive Women Safety Website designed to provide emergency assistance, safety resources, and support services for women. Features an SOS emergency button, location sharing, and nearby help centers.",
    tech: ["React.js", "Node.js", "Express", "MongoDB", "EmailJS"],
    image: "/assets/women_safety1.jpeg",
    github: "https://github.com/hima-chandana/women_safety.git"
  },
  {
    id: 2,
    title: "AIM_OPS",
    category: "Monitoring",
    description: "An AI-powered operations and monitoring platform to streamline infrastructure management. Features real-time dashboards, automated alert management, and incident reporting.",
    tech: ["React.js", "Node.js", "MongoDB", "Chart.js"],
    image: "/assets/aimops1.jpeg",
    github: "https://github.com/bhuvan1439/aim-ops-1"
  },
  {
    id: 3,
    title: "HappyTrip",
    category: "Full Stack",
    description: "A modern travel and tourism website for discovering, planning, and booking vacations. Provides detailed destination info, itinerary planning, and booking assistance.",
    tech: ["React.js", "Tailwind CSS", "Node.js", "MongoDB"],
    image: "/assets/happytrip1.jpeg",
    github: "#"
  },
  {
    id: 4,
    title: "UpYield",
    category: "Finance",
    description: "A modern financial and investment platform to track investments and analyze performance. Features portfolio management, financial calculators, and market insights.",
    tech: ["React.js", "Node.js", "MongoDB", "Recharts"],
    image: "/assets/upyeild1.jpeg",
    github: "https://github.com/bhuvan1439/UpYield"
  }
];

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Full Stack', 'Monitoring', 'Finance'];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <Section id="projects" title="Featured Projects">
      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              filter === cat 
                ? 'bg-gradient-to-r from-accent1 to-accent2 text-white shadow-lg' 
                : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              key={project.id}
              className="glass-card group overflow-hidden rounded-2xl border border-white/5 hover:border-accent2/50 transition-colors"
            >
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-300 z-10"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Overlay Links */}
                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex items-center justify-center gap-6">
                  {project.github !== "#" && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-accent1 hover:scale-110 transition-all">
                      <FaGithub className="text-xl" />
                    </a>
                  )}
                  <a href="#" className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-accent3 hover:scale-110 transition-all">
                    <FaExternalLinkAlt className="text-xl" />
                  </a>
                </div>
              </div>
              
              <div className="p-6 relative">
                <div className="absolute -top-4 right-6 bg-accent1/20 text-accent1 px-3 py-1 rounded-full text-xs font-semibold border border-accent1/30 backdrop-blur-md">
                  {project.category}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-gradient transition-all">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map(tech => (
                    <span key={tech} className="text-xs font-medium px-2.5 py-1 bg-white/5 rounded text-gray-300 border border-white/5">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </Section>
  );
};

export default Projects;
