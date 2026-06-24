import { motion } from 'framer-motion';
import Section from '../components/Section';
import { FaBriefcase } from 'react-icons/fa';

const experiences = [
  {
    company: "Future Interns",
    role: "Full Stack Developer",
    duration: "1 Month",
    responsibilities: [
      "Developed responsive and user-friendly web applications using modern frontend technologies.",
      "Designed and implemented interactive user interfaces.",
      "Worked on frontend and backend integration.",
      "Developed reusable components and optimized website performance.",
      "Participated in debugging, testing, and deployment activities."
    ],
    skills: ["React.js", "JavaScript (ES6+)", "HTML5 & CSS3", "Node.js & Express.js", "REST API", "Git & GitHub"]
  },
  {
    company: "Cognify",
    role: "Machine Learning Intern",
    duration: "1 Month",
    responsibilities: [
      "Collected, cleaned, and preprocessed datasets for machine learning models.",
      "Performed exploratory data analysis to identify patterns and insights.",
      "Built and evaluated predictive machine learning models.",
      "Worked with classification and regression algorithms.",
      "Visualized data and model performance using charts and reports."
    ],
    skills: ["Python", "Machine Learning", "EDA", "Pandas & NumPy", "Scikit-learn", "XGBoost", "Data Visualization"]
  }
];

const Experience = () => {
  return (
    <Section id="experience" title="Internship Experience">
      <div className="relative max-w-4xl mx-auto">
        {/* Timeline Line */}
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent1 via-accent2 to-transparent transform md:-translate-x-1/2"></div>
        
        {experiences.map((exp, index) => (
          <div key={index} className={`relative flex flex-col md:flex-row items-start mb-16 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
            
            {/* Timeline Icon */}
            <div className="absolute left-[-16px] md:left-1/2 md:-ml-4 top-0 w-8 h-8 rounded-full bg-primary border-2 border-accent2 flex items-center justify-center z-10 shadow-[0_0_15px_rgba(59,130,246,0.5)]">
              <FaBriefcase className="text-accent2 text-xs" />
            </div>

            {/* Content */}
            <div className={`w-full md:w-1/2 pl-8 md:pl-0 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50, y: 20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="glass-card p-6 border-l-4 border-l-accent2 relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <FaBriefcase className="text-6xl text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
                <h4 className="text-lg text-gradient font-semibold mb-2">{exp.company}</h4>
                <p className="text-sm text-gray-400 mb-4 font-mono bg-white/5 inline-block px-3 py-1 rounded">{exp.duration}</p>
                
                <ul className="list-disc list-inside text-gray-300 text-sm mb-6 space-y-2">
                  {exp.responsibilities.map((req, i) => (
                    <li key={i} className="leading-relaxed">{req}</li>
                  ))}
                </ul>
                
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map(skill => (
                    <span key={skill} className="text-xs bg-accent1/10 text-accent1 px-2 py-1 rounded-full border border-accent1/20">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Experience;
