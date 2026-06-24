import { useState } from 'react';
import { motion } from 'framer-motion';
import Section from '../components/Section';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState({ submitted: false, success: false, message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Construct the mailto URL with the form data
    const mailtoUrl = `mailto:bhoomireddyhima@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    // Open the default email client
    window.location.href = mailtoUrl;

    // Show a success message (optional, as the mail client will open)
    setStatus({ submitted: true, success: true, message: 'Opening your default email client...' });
    
    // Reset the form (optional)
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setStatus({ submitted: false, success: false, message: '' });
    }, 3000);
  };

  const contactInfo = [
    { icon: <FaEnvelope />, title: "Email", value: "bhoomireddyhima@gmail.com", href: "mailto:bhoomireddyhima@gmail.com" },
    { icon: <FaPhoneAlt />, title: "Phone", value: "9876543210", href: "tel:+919876543210" },
    { icon: <FaMapMarkerAlt />, title: "Location", value: "Proddatur, Kadapa, Andhra Pradesh, India", href: null }
  ];

  return (
    <Section id="contact" title="Get In Touch">
      <div className="flex flex-col lg:flex-row gap-12 relative">
        {/* Contact Info */}
        <div className="w-full lg:w-1/3">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-8 h-full relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent1/10 rounded-full blur-2xl"></div>
            
            <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
            <p className="text-gray-400 mb-8 text-sm">
              Feel free to reach out to me for any questions, collaboration opportunities, or just to say hi!
            </p>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-accent2 shrink-0">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">{info.title}</p>
                    {info.href ? (
                      <a href={info.href} className="text-gray-300 hover:text-white hover:text-gradient transition-all text-sm block mt-1">
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-gray-300 text-sm mt-1">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 pt-8 border-t border-white/10">
              <p className="text-sm text-gray-500 mb-4">Connect on social media</p>
              <div className="flex gap-4">
                <a href="https://github.com/hima-chandana" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-accent1 hover:text-white transition-all">
                  <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/hima-chandana-bhoomireddy-a6a040382/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-accent2 hover:text-white transition-all">
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Contact Form */}
        <div className="w-full lg:w-2/3">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-8"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Send Me A Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-primary/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent1 focus:ring-1 focus:ring-accent1 transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-primary/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent1 focus:ring-1 focus:ring-accent1 transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-primary/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent1 focus:ring-1 focus:ring-accent1 transition-all"
                  placeholder="How can I help you?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full bg-primary/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent1 focus:ring-1 focus:ring-accent1 transition-all resize-none"
                  placeholder="Your message here..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`btn-primary w-full md:w-auto px-8 py-3 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              {status.submitted && (
                <div className={`p-4 rounded-lg text-sm ${status.success ? 'bg-green-500/10 text-green-400 border border-green-500/20' : 'bg-red-500/10 text-red-400 border border-red-500/20'}`}>
                  {status.message}
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
