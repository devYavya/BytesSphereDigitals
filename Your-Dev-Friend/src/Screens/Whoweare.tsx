import React from "react";
import "../components/Styles/Whoweare.css";

const values = [
  {
    title: "Excellence",
    description:
      "Committed to delivering the highest quality solutions that exceed expectations.",
    icon: (
      <path
        d="M12 15L8.5 9H15.5L12 15Z M12 3C13.1046 3 14 3.89543 14 5C14 6.10457 13.1046 7 12 7C10.8954 7 10 6.10457 10 5C10 3.89543 10.8954 3 12 3Z M7 21H17 M9 17V21 M15 17V21"
        stroke="#4263EB"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "Results-Driven",
    description:
      "Focused on achieving measurable outcomes that drive your business forward.",
    icon: <circle cx="12" cy="12" r="9" stroke="#4263EB" strokeWidth="2" />,
  },
  {
    title: "Client-Focused",
    description:
      "Your success is our priority. We work closely with you every step of the way.",
    icon: (
      <>
        <path
          d="M17 21V19C17 16.7909 15.2091 15 13 15H5C2.79086 15 1 16.7909 1 19V21"
          stroke="#8A3FFC"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z"
          stroke="#8A3FFC"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </>
    ),
  },
];

const ValueCard: React.FC<{
  title: string;
  description: string;
  icon: React.ReactNode;
}> = ({ title, description, icon }) => (
  <div className="value-card">
    <div className="who-icon-container">
      <svg
        className="who-icon"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {icon}
      </svg>
    </div>
    <h3 className="value-title">{title}</h3>
    <p className="value-description">{description}</p>
  </div>
);

const WhoWeAre: React.FC = () => {
  return (
    <section className="who-we-are">
      <div className="who-container">
        <h2 className="section-title">Who We Are</h2>
        <p className="section-subtitle">
          A team of passionate developers and designers dedicated to your
          digital success.
        </p>

        <div className="values-container">
          {values.map((value, index) => (
            <ValueCard key={index} {...value} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
