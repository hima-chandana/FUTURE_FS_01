import { motion } from 'framer-motion';
import Section from '../components/Section';
import { FaUserGraduate, FaLightbulb, FaBullseye, FaCode } from 'react-icons/fa';

const About = () => {
  const cards = [
    {
      title: "Who I Am",
      icon: <FaUserGraduate className="text-3xl text-accent1 mb-4" />,
      content: "I am a passionate Computer Science student and aspiring Full Stack Developer with a strong interest in web development, software engineering, and emerging technologies. Through academic projects, internships, and self-learning, I have developed a solid foundation in modern web technologies and problem-solving techniques."
    },
    {
      title: "My Goals",
      icon: <FaBullseye className="text-3xl text-accent2 mb-4" />,
      content: "My goal is to become a skilled Full Stack Developer capable of designing scalable and secure web applications. In the long term, I aspire to work on cutting-edge technologies, lead development teams, and build software products that positively impact people's lives."
    },
    {
      title: "What Makes Me Unique",
      icon: <FaLightbulb className="text-3xl text-accent3 mb-4" />,
      content: "I combine technical skills with a strong willingness to learn and adapt. My dedication, curiosity, and growth mindset help me stay motivated. I enjoy exploring challenges, finding creative solutions, and continuously improving my abilities while collaborating effectively with teams."
    },
    {
      title: "Interests",
      icon: <FaCode className="text-3xl text-accent1 mb-4" />,
      content: "Full Stack Web Development, UI/UX Design, React.js & Modern JS Frameworks, Backend with Node.js, Database Design, Machine Learning, Cloud Computing, Open Source, and Mobile Application Development."
    }
  ];

  return (
    <Section id="about" title="About Me">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
        {/* Glow effect behind cards */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-accent2/20 blur-[100px] rounded-full pointer-events-none -z-10"></div>
        
        {cards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className="glass-card p-8 group hover:border-accent2/50 transition-colors duration-300 relative overflow-hidden"
          >
            {/* Hover gradient sweep */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent1/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
            
            <div className="relative z-10">
              {card.icon}
              <h3 className="text-2xl font-semibold mb-3 text-white">{card.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {card.content}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default About;
