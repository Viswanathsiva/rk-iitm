import { useEffect } from "react";
import "./About.scss";

export default function About() {
  useEffect(() => {
    document.title = "RameshKK | About";
  }, []);
  return (
    <main className="about-page">
      {/* BIO SECTION */}
      <section className="about-bio card">
        <p>
          <strong>
            <em>Ramesh Kannan Kandasami</em>
          </strong>{" "}
          is an Assistant Professor in the{" "}
          <strong>Geotechnical Engineering</strong> division, Department of
          Civil Engineering, IIT Madras. Prior to joining this institute, he was
          working as a post-doctoral research associate with the Geotechnical
          Research Group at the Schofield centre, University of Cambridge (UoC).
          His research at Cambridge involved fundamental understanding on the
          mechanics of hydraulic fracturing in soft rocks and wellbore
          strengthening. This research project was funded by British Petroleum -
          International Centre for Advanced Materials (BP-ICAM). He completed
          his Ph.D. at the Indian Institute of Science (IISc) where he worked
          extensively on understanding the mechanics of cohesive-frictional
          granular materials through comprehensive characterization and material
          modelling. Ramesh's work focusses on fundamental understanding on the
          mechanics of frictional and transitional geomaterials from particulate
          to continuum level which will eventually lead to better engineer
          intricate geo-systems.
        </p>

        <a
          href="https://civil.iitm.ac.in/faculty/rameshkk/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          View IIT Madras Faculty Profile
        </a>
      </section>

      {/* EXPERIENCE */}
      <section className="about-section">
        <h2>Research Experience</h2>

        <div className="timeline">
          <TimelineItem
            title="Associate Professor"
            institute="IIT Madras, Chennai, India"
            period="2025 – Present"
            logo="/assets/images/Universities/IITM.png"
            link="https://www.iitm.ac.in/"
          />

          <TimelineItem
            title="Assistant Professor"
            institute="IIT Madras, Chennai, India"
            period="2019 – 2025"
            logo="/assets/images/Universities/IITM.png"
            link="https://www.iitm.ac.in/"
          />

          <TimelineItem
            title="Post Doctoral Research Associate"
            institute="University of Cambridge, United Kingdom"
            period="2017 – 2019"
            logo="/assets/images/Universities/UoC.png"
            link="http://www.eng.cam.ac.uk/"
          />

          <TimelineItem
            title="Senior Research Associate"
            institute="Indian Institute of Science, Bangalore"
            period="2016 – 2017"
            logo="/assets/images/Universities/IISC.png"
            link="https://www.iisc.ac.in/"
          />
        </div>
      </section>

      {/* EDUCATION */}
      <section className="about-section">
        <h2>Education</h2>

        <div className="education-grid">
          <EducationCard
            institute="Indian Institute of Science (IISc)"
            degree="Ph.D. – Geotechnical Engineering"
            period="2010 – 2016"
            logo="/assets/images/Universities/IISC.png"
            link="https://www.iisc.ac.in/"
          />

          <EducationCard
            institute="Indian Institute of Technology Delhi (IITD)"
            degree="M.Tech – Rock Mechanics & Underground Structures"
            period="2008 – 2010"
            logo="/assets/images/Universities/IITD.png"
            link="https://home.iitd.ac.in/"
          />

          <EducationCard
            institute="M.S.E.C., Anna University"
            degree="B.E. – Civil Engineering"
            period="2003 – 2007"
            logo="/assets/images/Universities/MSEC.jpg"
            link="https://msec.edu.in/"
          />
        </div>
      </section>
    </main>
  );
}

/* ---------- Reusable Components ---------- */

function TimelineItem({ title, institute, period, logo, link }) {
  return (
    <div className="timeline-item">
      <img src={logo} alt={institute} />
      <div>
        <h4>{title}</h4>
        <a href={link} target="_blank" rel="noopener noreferrer">
          {institute}
        </a>
        <span>{period}</span>
      </div>
    </div>
  );
}

function EducationCard({ institute, degree, period, logo, link }) {
  return (
    <div className="edu-card">
      <img src={logo} alt={institute} />
      <h4>
        <a href={link} target="_blank" rel="noopener noreferrer">
          {institute}
        </a>
      </h4>
      <p>{degree}</p>
      <span>{period}</span>
    </div>
  );
}
