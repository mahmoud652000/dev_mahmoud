import "./contact.css";
import { useForm, ValidationError } from "@formspree/react";
import Lottie from "lottie-react";
import doneAnimation from "../../animation/done.json";
import { motion } from "framer-motion";

const Contact = () => {
  const [state, handleSubmit] = useForm("xkgzbnnr");

  return (
    <section id="contact" className="contact-us">
      {/* Background effects */}
      <div className="contact-bg-orb contact-bg-orb-1" />
      <div className="contact-bg-orb contact-bg-orb-2" />

      <div className="contact-inner">
        {/* Left: Info + Quick Contact */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="contact-left"
        >
          <div className="section-header">
            <h2 className="section-title">Get In Touch</h2>
            <p className="section-subtitle">
              Have a project in mind or just want to say hello? My inbox is
              always open. Let&apos;s create something great together.
            </p>
          </div>

          <div className="contact-cards">
            <a href="mailto:mahemoudgamal6@gmail.com" className="contact-card glass-card">
              <span className="contact-card-icon">📧</span>
              <div className="contact-card-body">
                <span className="contact-card-label">Email Me</span>
                <span className="contact-card-value">mahemoudgamal6@gmail.com</span>
              </div>
              <span className="contact-card-arrow">→</span>
            </a>

            <a href="tel:+201024949382" className="contact-card glass-card">
              <span className="contact-card-icon">📱</span>
              <div className="contact-card-body">
                <span className="contact-card-label">Call Me</span>
                <span className="contact-card-value">01024949382</span>
              </div>
              <span className="contact-card-arrow">→</span>
            </a>

            <div className="contact-card glass-card">
              <span className="contact-card-icon">📍</span>
              <div className="contact-card-body">
                <span className="contact-card-label">Location</span>
                <span className="contact-card-value">Mahalla El-Kubra, Egypt</span>
              </div>
            </div>

            <div className="contact-card glass-card contact-card-highlight">
              <span className="contact-card-icon">💼</span>
              <div className="contact-card-body">
                <span className="contact-card-label">Availability</span>
                <span className="contact-card-value">
                  <span className="available-dot" /> Open for new opportunities
                </span>
              </div>
            </div>
          </div>

          <div className="contact-social">
            <span className="contact-social-label">Follow me</span>
            <div className="contact-social-icons flex">
              <a href="https://github.com/mahmoud652000" target="_blank" rel="noopener noreferrer" className="icon icon-github" data-tooltip="GitHub"></a>
              <a href="https://www.linkedin.com/in/mahmoud-elbana-25473b150" target="_blank" rel="noopener noreferrer" className="icon icon-linkedin" data-tooltip="LinkedIn"></a>
              <a href="https://x.com/Mahmoud36468898" target="_blank" rel="noopener noreferrer" className="icon icon-twitter" data-tooltip="X"></a>
              <a href="https://www.instagram.com/mahmoud_elbana47" target="_blank" rel="noopener noreferrer" className="icon icon-instagram" data-tooltip="Instagram"></a>
            </div>
          </div>
        </motion.div>

        {/* Right: Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="contact-right"
        >
          <div className="form-card glass-card">
            <h3 className="form-title">Send a Message</h3>

            {state.succeeded ? (
              <div className="form-success">
                <Lottie
                  loop={false}
                  style={{ height: 80 }}
                  animationData={doneAnimation}
                />
                <h4>Message Sent!</h4>
                <p>Thanks for reaching out. I&apos;ll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Your Name</label>
                    <div className="input-wrapper">
                      <input
                        autoComplete="off"
                        required
                        type="text"
                        name="name"
                        id="name"
                        placeholder="John Doe"
                      />
                      <span className="input-icon">👤</span>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <div className="input-wrapper">
                      <input
                        autoComplete="off"
                        required
                        type="email"
                        name="email"
                        id="email"
                        placeholder="your@email.com"
                      />
                      <span className="input-icon">📧</span>
                    </div>
                    <ValidationError prefix="Email" field="email" errors={state.errors} />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <div className="input-wrapper">
                    <input
                      autoComplete="off"
                      required
                      type="text"
                      name="subject"
                      id="subject"
                      placeholder="Project Collaboration"
                    />
                    <span className="input-icon">📝</span>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Your Message</label>
                  <div className="input-wrapper textarea-wrapper">
                    <textarea
                      required
                      name="message"
                      id="message"
                      placeholder="Tell me about your project..."
                      rows={5}
                    ></textarea>
                    <span className="input-icon">💬</span>
                  </div>
                  <ValidationError prefix="Message" field="message" errors={state.errors} />
                </div>

                <input
                  type="hidden"
                  name="_subject"
                  value="New message from Mahmoud's Portfolio"
                />

                <button
                  type="submit"
                  disabled={state.submitting}
                  className="submit-btn"
                >
                  {state.submitting ? (
                    <>
                      <span className="spinner" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <span className="send-icon">→</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
