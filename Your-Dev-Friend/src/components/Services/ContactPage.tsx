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
    setError("");
    setIsSubmitting(true);

    if (!formData.name || !isValidEmail(formData.email)) {
      setError("Please enter a valid name and email.");
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch(
        "https://bytesspheredigitals.onrender.com/send-email",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
        setFormData({
          name: "",
          email: "",
          message: "",
          projectType: "website",
        });
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

  return (
    <div className="contact-page">
      <div className="contact-container">
        {/* Left Column: Welcome Section */}
        <div className="contact-column welcome-column">
          <div className="welcome-content">
            <h2>Ready To Create Your Business Online ?</h2>
            <p>
              We're passionate about transforming your ideas into digital
              solutions. Whether you're a startup or an established business,
              we're here to help you achieve your goals.
            </p>

            <div className="contact-methods">
              <div className="contact-method">
                <i className="icon-email"></i>
                <span>contact@bytesspheredigitals.com</span>
              </div>
              <div className="contact-method">
                <i className="icon-phone"></i>
                <span> +91 8003445444</span>
              </div>
            </div>
          </div>
        </div>

        {/* Middle Column: Contact Form */}
        <div className="contact-column form-column">
          <div className="form-content">
            <h3>Connect With US</h3>

            {submitted ? (
              <div className="success-message">
                <h4>Thank You!</h4>
                <p>We'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                {error && <div className="error-message">{error}</div>}

                <div className="form-group">
                  {/* <label htmlFor="name">Your Name</label> */}
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  {/* <label htmlFor="email">Email Address</label> */}
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  {/* <label htmlFor="projectType">Project Type</label> */}
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                  >
                    <option value="website">Select Project Type</option>
                    <option value="website">Website Development</option>
                    <option value="ecommerce">
                      E-commerce/Ed-tech Platform
                    </option>
                    <option value="app">Mobile App</option>
                    <option value="ai">AI Integration</option>
                    <option value="bot">Bot Support</option>
                    <option value="seo">Seo</option>
                    <option value="branding">Brand Identity</option>
                    <option value="marketing">Digital Marketing</option>
                  </select>
                </div>

                <div className="form-group">
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="submit-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Scheduling Connect" : "Connect"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
