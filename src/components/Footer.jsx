import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-secondary/50 border-t border-white/10 pt-16 pb-8 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-accent1/5 blur-[120px] pointer-events-none -z-10"></div>
      
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand & Intro */}
          <div className="md:col-span-1">
            <a href="#home" className="text-2xl font-bold tracking-tighter block mb-4">
              <span className="text-white">Hima</span>
              <span className="text-gradient"> Verse</span>
            </a>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              A passionate Full Stack Developer focused on building interactive, accessible, and user-centric digital experiences.
            </p>
            <div className="flex gap-4">
              <a href="https://github.com/hima-chandana" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <FaGithub className="text-xl" />
              </a>
              <a href="https://www.linkedin.com/in/hima-chandana-bhoomireddy-a6a040382/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent2 transition-colors">
                <FaLinkedin className="text-xl" />
              </a>
              <a href="mailto:bhoomireddyhima@gmail.com" className="text-gray-400 hover:text-accent1 transition-colors">
                <FaEnvelope className="text-xl" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Skills', 'Projects', 'Experience'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-gray-400 hover:text-accent3 transition-colors text-sm flex items-center gap-2">
                    <span className="text-accent3 text-xs">▹</span> {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="text-gray-400 text-sm flex items-start gap-3">
                <span className="text-accent1 mt-1"><FaEnvelope /></span>
                <a href="mailto:bhoomireddyhima@gmail.com" className="hover:text-white transition-colors">bhoomireddyhima@gmail.com</a>
              </li>
              <li className="text-gray-400 text-sm flex items-start gap-3">
                <span className="text-accent2 mt-1"><FaLinkedin /></span>
                <a href="https://www.linkedin.com/in/hima-chandana-bhoomireddy-a6a040382/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn Profile</a>
              </li>
              <li className="text-gray-400 text-sm flex items-start gap-3">
                <span className="text-accent3 mt-1">📍</span>
                <span>Proddatur, Kadapa,<br/>Andhra Pradesh, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Hima Chandana Bhoomireddy. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm flex items-center gap-1">
            Designed & Built with <FaHeart className="text-red-500" />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
