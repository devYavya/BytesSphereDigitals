import React from "react";
import "../components/Styles/Testimonial.css"; 

interface TestimonialProps {
  quote: string;
  name: string;
  title: string;
  company: string;
}

const TestimonialCard: React.FC<TestimonialProps> = ({
  quote,
  name,
  title,
  company,
}) => {
  return (
    <div className="testimonial-card">
      <div className="speech-bubble-icon">
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 24H28V32C28 34.2091 26.2091 36 24 36H16L12 40V24Z"
            stroke="#4169E1"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </div>
      <p className="testimonial-quote">{quote}</p>
      <h3 className="client-name">{name}</h3>
      <p className="client-position">
        {title}, {company}
      </p>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote:
        "ByteSphere Digital transformed our fragrance business with their innovative digital solutions and exceptional service. From the outset, they took the time to truly understand our brand’s essence, vision, and target audience. Their team crafted a stunning, user-friendly website that not only captures the elegance and allure of our fragrance collections but also provides a seamless shopping experience for our customers.",
      name: "Jatin Rajoria",
      title: "Founder",
      company: "Verite Royale",
    },
    {
      quote:
        "The team's exceptional expertise and unwavering dedication to our project went far beyond what we had hoped for. From the very beginning, they demonstrated a deep understanding of our goals and brought invaluable insights, creativity, and technical skill to the table. Their proactive approach, attention to detail, and consistent communication ensured that every aspect of the project was executed flawlessly.",
      name: "Mohammed Kashif",
      title: "CTO & Co-Founder",
      company: "Deshore",
    },
    {
      quote:
        "Working with ByteSphere Digital was a game-changer for our digital transformation. They didn’t just build us a website—they created a complete digital experience that truly reflects the warmth, personality, and charm of our café. From an intuitive menu layout and online ordering system to a beautifully designed gallery that showcases our cozy ambiance and signature dishes, every detail was thoughtfully executed.",
      name: "Luv",
      title: "Owner",
      company: "Night&Day cafe",
    },
  ];

  return (
    <section className="testimonials-section">
      <div className="container">
        <h2 className="section-title">Client Testimonials</h2>
        <p className="section-subtitle">
          What our clients say about working with us
        </p>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              name={testimonial.name}
              title={testimonial.title}
              company={testimonial.company}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
