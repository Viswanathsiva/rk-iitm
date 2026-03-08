import { OverlayTrigger, Tooltip } from "react-bootstrap";
import "./Home.scss";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.title = "RameshKK | Home";
  }, []);
  return (
    <main className="home-page container">
      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-left">
          <img
            src="/assets/images/Dr. Ramesh Kannan K.jpeg"
            alt="Dr. Ramesh Kannan Kandasami"
            className="profile-image"
          />
        </div>

        <div className="hero-right">
          <h1>Ramesh Kannan Kandasami</h1>
          <h2>Associate Professor</h2>

          <p className="affiliation">
            Department of Civil Engineering <br />
            Indian Institute of Technology Madras
          </p>

          <div className="contact-info">
            <p>📍 Room No: 121, Building Science Block</p>
            <p>📞 044-22574259</p>
            <p>✉️ rameshkk@iitm.ac.in | rameshkk@civil.iitm.ac.in</p>
          </div>

          <div className="scholar-images">
            <a
              href="https://scholar.google.co.in/citations?user=D42RIhcAAAAJ&hl=en"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Google Scholar"
            >
              <img
                src="/assets/images/scholars/google-scholar-circle.png"
                alt="Google Scholar"
                className="profile-img-sch"
              />
            </a>

            <a
              href="https://orcid.org/0000-0003-0803-3109"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="ORCID"
            >
              <img
                src="/assets/images/scholars/orcid-circle.png"
                alt="ORCID"
                className="profile-img-sch"
              />
            </a>

            <a
              href="https://iitm.irins.org/profile/150507"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="IRINS"
            >
              <img
                src="/assets/images/scholars/irins.png"
                alt="IRINS"
                className="profile-img-sch irins-img"
              />
            </a>

            <a
              href="https://www.researchgate.net/profile/Ramesh-Kannan-Kandasami"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="ResearchGate"
            >
              <img
                src="/assets/images/scholars/researchgate-circle.png"
                alt="ResearchGate"
                className="profile-img-sch"
              />
            </a>

            <a
              href="https://www.scopus.com/authid/detail.uri?authorId=55804419900"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Scopus"
            >
              <img
                src="/assets/images/scholars/scopus-circle.png"
                alt="Scopus"
                className="profile-img-sch scopus-img"
              />
            </a>
          </div>
        </div>
      </section>

      {/* RESEARCH SUMMARY */}
      <section className="research-summary">
        <OverlayTrigger
          placement="top"
          overlay={
            <Tooltip id="research-tooltip">
              Please navigate to <b>Research page</b> to see more insights!
            </Tooltip>
          }
        >
          {/* IMPORTANT: Single ref-safe wrapper */}
          <div className="research-tooltip-target">
            <h3>Research Focus</h3>
            <p>
              Research at Geomechanics laboratory is centered on developing a
              fundamental understanding of the mechanical behavior of purely
              frictional and transitional geomaterials, spanning scales from
              individual particles to the continuum level.
            </p>
          </div>
        </OverlayTrigger>
      </section>

      <section className="cta">
        <p>
          If you find my research interesting and wish to join my group, please
          feel free to contact me with your CV.
        </p>
        <p>
          Also, please apply to an appropriate position from the links given
          below:
        </p>
        <div className="positions-card">
          <div className="item">
            <span className="icon">🎓</span>
            <div>
              <h4>Postdoctoral Research Associates</h4>
              <p>
                <a
                  href="https://anrfonline.in/ANRF/npdf?HomePage=New"
                  target="_blank"
                >
                  N-PDF
                </a>{" "}
                |
                <a
                  href="https://www.iitm.ac.in/careers/post-doctoral-opportunities"
                  target="_blank"
                >
                  IITM-PDF
                </a>
              </p>
            </div>
          </div>

          <div className="item">
            <span className="icon">📘</span>
            <div>
              <h4>MS and PhD Positions</h4>
              <p>
                <a href="https://research.iitm.ac.in/" target="_blank">
                  Research IITM
                </a>
              </p>
            </div>
          </div>

          <div className="item">
            <span className="icon">📗</span>
            <div>
              <h4>M.Tech Students</h4>
              <p>
                <a href="https://mtechadm.iitm.ac.in/" target="_blank">
                  IITM PG
                </a>
              </p>
            </div>
          </div>
          <div className="contact">
            For more queries, please
            <a href="mailto:yourmail@iitm.ac.in">E-mail me</a>
          </div>
        </div>
      </section>
    </main>
  );
}
