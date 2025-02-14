import { motion } from 'framer-motion';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="contact-container">
        <motion.div 
          className="contact-image"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img src="https://cdn.pixabay.com/photo/2018/03/22/02/37/email-3249062_1280.png" alt="Contact" />
        </motion.div>

        <motion.form 
          className="contact-form"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2>Get in Touch</h2>
          <div className="form-group">
            <input type="text" id="name" required />
            <label htmlFor="name">Your Name</label>
          </div>
          <div className="form-group">
            <input type="email" id="email" required />
            <label htmlFor="email">Your Email</label>
          </div>
          <div className="form-group">
            <textarea id="message" rows="4" required />
            <label htmlFor="message">Your Message</label>
          </div>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="submit-btn"
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;