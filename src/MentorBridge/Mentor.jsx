import React from 'react';
import './Mentor.css';

const mentors = [
  {
    name: "Dr. Ananya Sharma",
    title: "AI Researcher, MIT",
    image: "/images/mentor1.jpg",
    bio: "Passionate about guiding students in machine learning, data science, and deep learning."
  },
  {
    name: "Mr. Ravi Verma",
    title: "Software Engineer, Google",
    image: "/images/mentor2.jpg",
    bio: "Specializes in frontend engineering, system design, and tech career guidance."
  },
  {
    name: "Ms. Neha Kapoor",
    title: "Product Manager, Microsoft",
    image: "/images/mentor3.jpg",
    bio: "Helps mentees navigate product thinking, user experience, and roadmapping."
  }
];

const MentorSection = () => {
  return (
    <section className="mentor-section" id="mentors">
      <div className="container">
        <h2 className="section-title">Meet Our Mentors</h2>
        <div className="mentor-grid">
          {mentors.map((mentor, index) => (
            <div className="mentor-card" key={index}>
              <img src={mentor.image} alt={mentor.name} className="mentor-image" />
              <h3 className="mentor-name">{mentor.name}</h3>
              <p className="mentor-title">{mentor.title}</p>
              <p className="mentor-bio">{mentor.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MentorSection;
