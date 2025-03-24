import React, { useState } from "react";
import "../Styles/ContactPage.css";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
  projectType: string;
}

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
    projectType: "website",
  });

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const isValidEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(""); // Reset error message
    setIsSubmitting(true);

    // Validate input fields
    if (!formData.name || !isValidEmail(formData.email)) {
      setError("Please enter a valid name and email.");
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "", projectType: "website" });
      } else {
        setError(data.error || "Something went wrong. Please try again.");
      }
    } catch (error) {
      setError("Network error. Please try again.");
      console.error("Error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToContactForm = () => {
    document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <div className="hero-section">
        <h1>Ready to Transform Your Digital Presence?</h1>
        <p>Let's create something extraordinary together. Your success story starts here.</p>
        <button className="start-project-btn" onClick={scrollToContactForm}>
          Start Your Project
        </button>
      </div>

      {/* Contact Form Section */}
      <div id="contact-form" className="contact-form-container">
        <h2>Contact Us</h2>

        {submitted ? (
          <div className="success-message">
            <p className="success-title">Thank you for reaching out!</p>
            <p>We've received your message and will get back to you within 24 hours.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            {error && <p className="error-message">{error}</p>}

            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="projectType">Project Type</label>
              <select
                id="projectType"
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
              >
                <option value="website">Website Design</option>
                <option value="ecommerce">E-commerce Platform</option>
                <option value="branding">Brand Identity</option>
                <option value="marketing">Digital Marketing</option>
                <option value="app">Mobile App</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                required
              ></textarea>
            </div>

            <button type="submit" disabled={isSubmitting} className="submit-btn">
              {isSubmitting ? "Submitting..." : "Start Your Project"}
            </button>
          </form>
        )}
      </div>

      {/* Contact Information */}
      <div className="contact-info">
        <div className="info-card">
          <div className="icon location-icon"></div>
          <h3>Our Location</h3>
          <p>Jaipur</p>
        </div>

        <div className="info-card">
          <div className="icon email-icon"></div>
          <h3>Email Us</h3>
          <p>info@yourdevfriend.com</p>
        </div>

        <div className="info-card">
          <div className="icon phone-icon"></div>
          <h3>Call Us</h3>
          <p>Coming Soon....</p>
          <p>Mon-Fri: 9am-6pm</p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
