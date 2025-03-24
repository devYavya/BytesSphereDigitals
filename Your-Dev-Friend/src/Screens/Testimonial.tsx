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
        "Your Dev Friend transformed our business with their innovative solutions and exceptional service.",
      name: "Yavya Sharma",
      title: "CEO",
      company: "TechStart Inc.",
    },
    {
      quote:
        "The team's expertise and dedication to our project exceeded all expectations.",
      name: "Jatin Rajoria",
      title: "CTO",
      company: "GrowthLabs",
    },
    {
      quote:
        "Working with Your Dev Friend was a game-changer for our digital transformation.",
      name: "Vidhi Jain",
      title: "Director",
      company: "InnovateCo",
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
