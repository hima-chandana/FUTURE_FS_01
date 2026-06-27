import { motion } from 'framer-motion';
import Section from '../components/Section';
import { FaCertificate } from 'react-icons/fa';

const certifications = [
  {
    name: "RADIOTHON HACKATHON",
    image: "/assets/radiothon.png"
  },
  {
    name: "TECH SPRINT",
    image: "/assets/techsprint.png"
  },
  {
    name: "CODE4CHANGE",
    image: "/assets/code4change.png"
  },
  {
    name: "TECHNOLOGY JOB SIMULATION",
    image: "/assets/deloitte.png"
  },
  {
    name: "CYBER JOB SIMULATION",
    image: "/assets/deloitte.png"
  },
  {
    name: "DATA ANALYTICS JOB SIMULATION",
    image: "/assets/deloitte.png"
  }
];

const Certifications = () => {
  return (
    <Section id="certifications" title="Certifications">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ y: -10 }}
            className="glass-card overflow-hidden group border border-white/10 hover:border-accent1/50 transition-all duration-300"
          >
            <div className="relative h-48 md:h-56 overflow-hidden bg-primary/50">
              <img 
                src={`${import.meta.env.BASE_URL}${cert.image.startsWith('/') ? cert.image.slice(1) : cert.image}`} 
                alt={cert.name} 
                className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent opacity-80"></div>
            </div>
            
            <div className="p-6 relative -mt-12 text-center">
              <div className="w-12 h-12 mx-auto bg-gradient-to-br from-accent1 to-accent2 rounded-full flex items-center justify-center mb-4 shadow-lg border-4 border-primary">
                <FaCertificate className="text-white text-xl" />
              </div>
              <h3 className="text-xl font-bold text-white group-hover:text-gradient transition-all">{cert.name}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Certifications;
