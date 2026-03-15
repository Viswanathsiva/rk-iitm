import { useEffect } from "react";
import "./About.scss";

export default function About() {
  useEffect(() => {
    document.title = "RameshKK | About";
  }, []);
  return (
    <main className="about-page">
      {/* BIO SECTION */}
      <section className="about-bio card text-justify">
        <p>
          <strong>
            <em>Ramesh Kannan Kandasami</em>
          </strong>{" "}
          is an Associate Professor in the{" "}
          <strong>Geotechnical Engineering Group</strong>, Department of Civil
          Engineering, IIT Madras. Prior to joining IIT Madras, he served as a
          Postdoctoral Research Associate with the Geotechnical Research Group
          at the Schofield Centre, University of Cambridge. At Cambridge, his
          research focused on developing a fundamental understanding of
          hydraulic fracturing in soft rocks and wellbore strengthening, under a
          project funded by the British Petroleum – International Centre for
          Advanced Materials (BP-ICAM).
        </p>

        <p>
          Ramesh Kannan earned his Ph.D. from the Indian Institute of Science
          (IISc), where his work centered on the mechanics of
          cohesive–frictional granular materials through comprehensive
          experimental characterization and advanced material modeling.
        </p>

        <p>
          His current research is centered on advancing the understanding of the
          mechanical behavior of transitional geomaterials across multiple
          length scales. His laboratory is engaged in the development of
          state-of-the-art constitutive models, advanced experimental
          methodologies, and robust numerical solvers to address complex
          challenges in geomechanics. His research adopts a multi-physical and
          multi-scale perspective, with primary focus areas including the
          mechanics of gas hydrate–bearing sediments, CO₂ sequestration, ballast
          breakage, soil liquefaction, and risk-based assessment of dam safety.
        </p>

        <a
          href="https://civil.iitm.ac.in/faculty/rameshkk/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary mt-2"
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
            logo="assets/images/Universities/IITM.png"
            link="https://www.iitm.ac.in/"
          />

          <TimelineItem
            title="Assistant Professor"
            institute="IIT Madras, Chennai, India"
            period="2019 – 2025"
            logo="assets/images/Universities/IITM.png"
            link="https://www.iitm.ac.in/"
          />

          <TimelineItem
            title="Post Doctoral Research Associate"
            institute="University of Cambridge, Cambridgeshire, United Kingdom"
            period="2017 – 2019"
            logo="assets/images/Universities/UoC.png"
            link="http://www.eng.cam.ac.uk/"
          />

          <TimelineItem
            title="Senior Research Associate"
            institute="Indian Institute of Science, Bangalore, India"
            period="2016 – 2017"
            logo="assets/images/Universities/IISC.png"
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
            logo="assets/images/Universities/IISC.png"
            link="https://www.iisc.ac.in/"
          />

          <EducationCard
            institute="Indian Institute of Technology Delhi (IITD)"
            degree="M.Tech – Rock Mechanics & Underground Structures"
            period="2008 – 2010"
            logo="assets/images/Universities/IITD.png"
            link="https://home.iitd.ac.in/"
          />

          <EducationCard
            institute="M.S.E.C., Anna University"
            degree="B.E. – Civil Engineering"
            period="2003 – 2007"
            logo="assets/images/Universities/MSEC.jpg"
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
