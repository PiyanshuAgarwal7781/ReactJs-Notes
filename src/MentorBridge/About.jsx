import React from 'react';
import './About.css';

export default function About() {
  return (
    <div className="about-container">
      <section className="about-intro">
        <h1>About Mentor Bridge IT</h1>
        <p>
          Mentor Bridge IT is a platform dedicated to connecting enthusiastic learners
          with experienced mentors across technology and innovation domains. We believe
          that mentorship is the key to unlocking one’s true potential.
        </p>
      </section>

      <section className="about-mission">
        <h2> Our Mission</h2>
        <p>
          To create a collaborative and supportive ecosystem where students, mentors,
          and professionals can grow together through knowledge sharing, workshops,
          and real-world projects.
        </p>
      </section>

      <section className="about-why">
        <h2> Why Choose Mentor Bridge IT?</h2>
        <ul>
          <li>Expert mentors from diverse technical backgrounds</li>
          <li>Hands-on learning through projects and hackathons</li>
          <li>Regular events and webinars</li>
          <li>Strong community support and networking opportunities</li>
        </ul>
      </section>

      <section className="about-team">
        <h2> Meet Our Team</h2>
        <div className="team-members">
          <div className="team-card">
            <h4>Piyanshu Agarwal</h4>
            <p>Frontend & Backend Developer</p>
          </div>
          <div className="team-card">
            <h4>v.srinivas</h4>
            <p>UI/UX Designer</p>
          </div>
          <div className="team-card">
            <h4>shiva shankar</h4>
            <p>Event Manager</p>
          </div>
        </div>
      </section>

      <section className="about-cta">
        <h3>Want to be part of the bridge?</h3>
        <button>Join Us</button>
      </section>
    </div>
  );
}
