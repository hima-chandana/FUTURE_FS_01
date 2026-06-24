import { motion } from 'framer-motion';
import Section from '../components/Section';
import { FaGraduationCap } from 'react-icons/fa';

const educations = [
  {
    institution: "VIT AP UNIVERSITY",
    degree: "B.Tech in Computer Science and Engineering",
    year: "2024 - 2029",
    score: "CGPA: 8.93"
  },
  {
    institution: "SRI CHAITANYA COLLEGE",
    degree: "Intermediate",
    year: "2022 - 2024",
    score: "Percentage: 97.4%"
  },
  {
    institution: "SRI CHAITANYA SCHOOL",
    degree: "Secondary Education",
    year: "2022",
    score: "Percentage: 96.3%"
  }
];

const Education = () => {
  return (
    <Section id="education" title="Education Journey">
      <div className="relative max-w-4xl mx-auto pl-8 md:pl-0">
        {/* Timeline Line */}
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent3 via-accent1 to-transparent transform md:-translate-x-1/2"></div>
        
        {educations.map((edu, index) => (
          <div key={index} className={`relative flex flex-col md:flex-row items-start mb-12 ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
            
            {/* Timeline Icon */}
            <div className="absolute left-[-32px] md:left-1/2 md:-ml-4 top-0 w-8 h-8 rounded-full bg-primary border-2 border-accent3 flex items-center justify-center z-10 shadow-[0_0_15px_rgba(6,182,212,0.5)]">
              <FaGraduationCap className="text-accent3 text-xs" />
            </div>

            {/* Content */}
            <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50, y: 20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="glass-card p-6 border-l-4 border-l-accent3 relative group hover:bg-white/10 transition-colors"
              >
                <div className="absolute -right-4 -top-4 w-20 h-20 bg-accent3/10 rounded-full blur-2xl group-hover:bg-accent3/20 transition-colors pointer-events-none"></div>
                
                <h3 className="text-xl font-bold text-white mb-1">{edu.degree}</h3>
                <h4 className="text-lg text-accent3 font-semibold mb-2">{edu.institution}</h4>
                <div className="flex justify-between items-center text-sm">
                  <span className="font-mono bg-white/5 px-3 py-1 rounded text-gray-400">{edu.year}</span>
                  <span className="font-bold text-accent1 bg-accent1/10 px-3 py-1 rounded">{edu.score}</span>
                </div>
              </motion.div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Education;
