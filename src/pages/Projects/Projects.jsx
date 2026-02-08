import { useEffect } from "react";
import "./Projects.scss";
const projects = [
  {
    projectTitile:
      "Pilot project on flood & earthquake safety of existing dams in the state of Maharashtra",
    role: "Co-Principal Investigator",
    sponsor: "Water Resources Department, Govt. of Maharashtra",
    timePeriod: "2024 - 2027",
  },
  {
    projectTitile:
      "Study of compaction mechanics of bituminous mixtures and applications in 3-D paving",
    role: "Co-Principal Investigator",
    sponsor: "Core Research Grant, SERB",
    timePeriod: "2024 - 2027",
  },
  {
    projectTitile:
      "Investigations on the influence of Geogrids in Bituminous Pavements",
    role: "Principal Investigator",
    sponsor: "IndInfravit Trust",
    timePeriod: "2024 - 2027",
  },
  {
    projectTitile:
      "Improving the performance of ballasts to support high-speed rail tracks",
    role: "Principal Investigator",
    sponsor:
      "Scheme for Promotion of Academic and Research Collaboration, MHRD",
    timePeriod: "2023 - 2025",
  },
  {
    projectTitile:
      "Optimization of coir geotextiles based on its form for low-volume rural roads",
    role: "Principal Investigator",
    sponsor: "Ministry of Road Transport and Highways of India",
    timePeriod: "2022 - 2023",
  },
  {
    projectTitile: "Subsurface mechanics and geo-energy laboratory",
    role: "Co-Principal Investigator",
    sponsor: "MHRD-IIT Madras, IoE Scheme",
    timePeriod: "2021 - 2026",
  },
  {
    projectTitile:
      "Multi-physical understanding of the mechanics of gas hydrate sediments",
    role: "Principal Investigator",
    sponsor: "New Faculty Seed Grant, IIT Madras",
    timePeriod: "2021 - 2024",
  },
  {
    projectTitile:
      "Framework for optimizing and enhancing the performance of concrete pavements using natural coir fibres (CoirCon)",
    role: "Co-Principal Investigator",
    sponsor: "Coir Board",
    timePeriod: "2021 - 2023",
  },
  {
    projectTitile:
      "Field demonstration and standardization of coir geotextiles for erosion control and pavement applications",
    role: "Co-Principal Investigator",
    sponsor: "Coir Board",
    timePeriod: "2021 - 2023",
  },
  {
    projectTitile: "Geotechnical aspects and dam design - Kalpasar dam project",
    role: "Co-Principal Investigator",
    sponsor: "National Centre for Coastal Research, MOES",
    timePeriod: "2021 - 2023",
  },
  {
    projectTitile: "Fluid injection through porous media",
    role: "Principal Investigator",
    sponsor: "Exploratory research project, IIT Madras",
    timePeriod: "2020 - 2021",
  },
  {
    projectTitile:
      "A critical understanding on the mechanics of gas hydrate sediments for sustainable long term energy extraction",
    role: "Principal Investigator",
    sponsor: "Start-up Research Grant, SERB",
    timePeriod: "2019 - 2023",
  },
  {
    projectTitile: "Particle Migration Studies in Porous Media",
    role: "Principal Investigator",
    sponsor: "New Faculty Initiation Grant, IIT Madras",
    timePeriod: "2019 - 2023",
  },
];

const Projects = () => {
  useEffect(() => {
    document.title = "RameshKK | Projects";
  }, []);

  return (
    <>
      <section className="projects py-5">
        <div className="container">
          <h2 className="fw-bold mb-5">Projects</h2>

          <div className="row g-4">
            {projects.map((project, index) => (
              <div className="col-12" key={index}>
                <div className="card project-card border-0 shadow-sm h-100">
                  <div className="card-body">
                    <div className="">
                      <h6 className="fw-semibold mb-2">
                        {project.projectTitile}
                      </h6>
                      <span className="time-period fw-bold text-muted">
                        {project.timePeriod}
                      </span>
                    </div>

                    <hr />

                    <p className="mb-1">
                      <span className="text-muted">Role as </span>
                      <strong>{project.role}</strong>
                    </p>

                    <p className="mb-0">
                      <span className="text-muted">Sponsored by </span>
                      <em className="fw-semibold">{project.sponsor}</em>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
