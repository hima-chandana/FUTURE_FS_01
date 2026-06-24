import { motion } from 'framer-motion';
import Section from '../components/Section';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython, FaJava, FaGitAlt } from 'react-icons/fa';
import { SiMysql } from 'react-icons/si';

const Skills = () => {
  const techSkills = [
    { name: "HTML/CSS", level: 90, icon: <div className="flex gap-1"><FaHtml5 className="text-[#E34F26]" /><FaCss3Alt className="text-[#1572B6]" /></div> },
    { name: "JavaScript", level: 85, icon: <FaJs className="text-[#F7DF1E]" /> },
    { name: "React.js", level: 85, icon: <FaReact className="text-[#61DAFB]" /> },
    { name: "Node.js", level: 75, icon: <FaNodeJs className="text-[#339933]" /> },
    { name: "MySQL", level: 70, icon: <SiMysql className="text-[#4479A1]" /> },
    { name: "Python", level: 80, icon: <FaPython className="text-[#3776AB]" /> },
    { name: "Java", level: 75, icon: <FaJava className="text-[#007396]" /> },
    { name: "Git & GitHub", level: 85, icon: <FaGitAlt className="text-[#F05032]" /> },
  ];

  const softSkills = [
    "Communication",
    "Teamwork",
    "Problem Solving",
    "Leadership",
    "Time Management",
    "Project Management"
  ];

  return (
    <Section id="skills" title="My Skills">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Technical Skills */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <span className="text-accent2">{"<"}</span>
            Technical Skills
            <span className="text-accent2">{"/>"}</span>
          </h3>
          <div className="space-y-6">
            {techSkills.map((skill, index) => (
              <div key={skill.name}>
                <div className="flex justify-between mb-2">
                  <span className="font-medium text-gray-300 flex items-center gap-2">
                    {skill.icon}
                    {skill.name}
                  </span>
                  <span className="text-gray-400 text-sm">{skill.level}%</span>
                </div>
                <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-accent1 to-accent2 rounded-full relative"
                  >
                    <div className="absolute top-0 right-0 bottom-0 w-10 bg-gradient-to-r from-transparent to-white/30 blur-[2px]"></div>
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <span className="text-accent1">{"{"}</span>
            Soft Skills
            <span className="text-accent1">{"}"}</span>
          </h3>
          <div className="grid grid-cols-2 gap-4">
            {softSkills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -3, scale: 1.02 }}
                className="glass-card p-4 text-center border-t-2 border-t-accent3/30 hover:border-t-accent3 transition-all duration-300"
              >
                <span className="font-medium text-gray-200">{skill}</span>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-8 p-6 glass-card border border-accent1/20 relative overflow-hidden"
          >
            <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-accent1/20 rounded-full blur-[40px]"></div>
            <h4 className="text-lg font-medium text-white mb-2">Continuous Learner</h4>
            <p className="text-sm text-gray-400">
              Technology is always evolving, and so am I. Currently focusing on expanding my knowledge in AI integration and advanced cloud architectures.
            </p>
          </motion.div>
        </div>
      </div>
    </Section>
  );
};

export default Skills;
