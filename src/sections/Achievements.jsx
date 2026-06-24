import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Section from '../components/Section';
import { FaTrophy, FaCar } from 'react-icons/fa';

const Counter = ({ end, duration = 2, suffix = '' }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime = null;
    let animationFrame;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = (currentTime - startTime) / (duration * 1000);

      if (progress < 1) {
        setCount(Math.floor(end * progress));
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return <>{count}{suffix}</>;
};

const Achievements = () => {
  const achievements = [
    {
      title: "Hackathon Winner",
      description: "Secured top position for developing AIM_OPS, an AI-powered operations monitoring platform.",
      icon: <FaTrophy className="text-4xl text-yellow-500 mb-4" />,
      link: "https://github.com/bhuvan1439/aim-ops-1",
      image: "/assets/hackathon winning.jpeg"
    },
    {
      title: "ECS PROJECT",
      description: "Developed an Adaptive Vehicle Headlight System that automatically adjusts headlight direction based on vehicle movement, improving nighttime visibility and road safety while demonstrating innovation in automotive technology.",
      icon: <FaCar className="text-4xl text-accent2 mb-4" />,
      link: null,
      image: "/assets/ecs1.jpeg"
    }
  ];

  return (
    <Section id="achievements" title="Achievements">
      {/* Counters */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {[
          { label: "Projects Completed", value: 15, suffix: "+" },
          { label: "Hackathons Won", value: 1, suffix: "" },
          { label: "Hours Coded", value: 1000, suffix: "+" },
        ].map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="text-center p-6 glass-card relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-accent1/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">
              <Counter end={stat.value} suffix={stat.suffix} />
            </div>
            <div className="text-gray-400 font-medium text-sm md:text-base">{stat.label}</div>
          </motion.div>
        ))}
      </div>

      {/* Highlight Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {achievements.map((ach, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="glass-card flex flex-col md:flex-row overflow-hidden group hover:border-white/20 transition-all duration-300"
          >
            <div className="w-full md:w-2/5 h-48 md:h-auto overflow-hidden">
              <img 
                src={ach.image} 
                alt={ach.title} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
              />
            </div>
            <div className="w-full md:w-3/5 p-6 flex flex-col justify-center">
              {ach.icon}
              <h3 className="text-2xl font-bold text-white mb-3">{ach.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">{ach.description}</p>
              {ach.link && (
                <a 
                  href={ach.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-accent1 font-medium hover:text-accent2 transition-colors text-sm flex items-center gap-2 w-max"
                >
                  View Project <span className="text-lg">→</span>
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Achievements;
