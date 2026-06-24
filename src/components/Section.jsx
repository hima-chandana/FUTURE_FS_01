import { motion } from 'framer-motion';

const Section = ({ children, id, className = '', title }) => {
  return (
    <section id={id} className={`py-20 px-6 md:px-12 lg:px-24 min-h-screen flex flex-col justify-center ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto w-full"
      >
        {title && (
          <div className="mb-12 md:mb-20 text-center">
            <h2 className="text-4xl md:text-5xl font-bold inline-block relative">
              <span className="text-gradient">{title}</span>
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-accent1 to-accent3 rounded-full"></div>
            </h2>
          </div>
        )}
        {children}
      </motion.div>
    </section>
  );
};

export default Section;
