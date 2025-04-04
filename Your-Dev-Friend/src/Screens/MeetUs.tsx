import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../components/Styles/MeetUs.css";

const teamMembers = [
  {
    name: "Yavya Sharma",
    bio: "Software Engineer Capgemini",
    bio2: "Expert in project management.",
    about:
      "A passionate developer dedicated to transforming the digital business landscape. With expertise in scaling startups, engineering cutting-edge solutions, and driving technological innovation, I strive to bridge the gap between business needs and digital excellence. Committed to delivering ByteSphere Digital’s values globally, I focus on creating impactful, scalable, and future-ready solutions that empower businesses to thrive in the digital era.",
    image: "./yavya.jpg",
    social: {},
  },
  {
    name: "Abhishek Sharma",
    bio: "Ex SDE @Siemens Tech",
    bio2: "IIT Khargpur Alumnus",
    bio3: "Founder Logicup.in \n Logicup is a tech institute offering job oriented courses in DSA, Programming Languages, Full stack Web Development, DevOps, Android Development...",
    about:
      "As a Software Engineer, I am passionate about leveraging technology to help businesses grow and thrive. With a strong foundation in logical problem-solving and strategic thinking, I design and develop efficient, scalable solutions tailored to business needs. My expertise in software architecture, automation, and data-driven decision-making enables companies to streamline operations, enhance user experiences, and drive innovation. By combining technical excellence with a deep understanding of business goals, I aim to create impactful software that fuels long-term success.",
    image: "./abhishek.jpg",
    social: {},
  },
];

const MeetUs: React.FC = () => {
  const [, setTimeLeft] = useState(5);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 1 ? prev - 1 : 5));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="meet-our-team-container">
      <h2 className="meet-our-team-title">Meet Our Brains</h2>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        style={{ height: "100%" }}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        onSlideChange={() => {
          setTimeLeft(5);
        }}
      >
        {teamMembers.map((member, index) => (
          <SwiperSlide key={index}>
            <div className="team-member-container">
              <div className="team-member-content">
                <div className="team-member-text">
                  <h3>{member.name}</h3>
                  <p className="team-member-bio">{member.bio}</p>
                  <p className="team-member-bio">{member.bio2}</p>
                  <p className="team-member-bio">{member.bio3}</p>
                  <p className="team-member-bio">{member.about}</p>
                  <p className="team-member-socials"></p>
                </div>
                <div className="team-member-image-container">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="team-member-image"
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MeetUs;
