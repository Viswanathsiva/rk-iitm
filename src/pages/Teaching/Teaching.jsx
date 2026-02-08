import React, { useEffect } from "react";
import { Accordion, AccordionTab } from "primereact/accordion";
import "./Teaching.scss";
import { TfiQuoteRight } from "react-icons/tfi";
import { TbArrowBadgeRightFilled } from "react-icons/tb";
import { FaFileAlt } from "react-icons/fa";

export default function Teaching() {
  useEffect(() => {
    document.title = "RameshKK | Teaching";
  }, []);

  const micromechanicals = [
    {
      srcLink:
        "https://docs.google.com/presentation/d/e/2PACX-1vQ3R7f439rdj2hUxGLRTx6mfENJ7F3q_OOWt5CZ5TIhkEQw2UPRXTtEHlNp5W8akA/pubembed?start=true&loop=true&delayms=3000",
      slideDesc: "Micromechanical Analysis of Granular Materials using DEM",
    },
    {
      srcLink:
        "https://docs.google.com/presentation/d/e/2PACX-1vSBx7vdDiWnSKw2DNH_iYhrzf7HHEoiZxJjah0qAYrvQt3gcV2pXnn4cHx3ioDGlA/pubembed?start=true&loop=true&delayms=3000",
      slideDesc: "Micromechanical Analysis of Granular Materials using DEM",
    },
    {
      srcLink:
        "https://docs.google.com/presentation/d/e/2PACX-1vRiE1qlKQmr1Dgo3p6SOD3dxySshaFxXo70a1RRvFGk062UbseamnzdwAXQipTWEw/pubembed?start=true&loop=true&delayms=3000",
      slideDesc: "Micromechanical Analysis of Granular Materials using DEM",
    },
    {
      srcLink:
        "https://docs.google.com/presentation/d/e/2PACX-1vQDDhWSBLrbiqir3aAP0ylJ_UNLJUu-dlW6o2PzJKHygcZuLsY6h6nASVGEykof5w/pubembed?start=true&loop=true&delayms=3000",
      slideDesc: "Micromechanical Analysis of Granular Materials using DEM",
    },
  ];
  const geomaterials = [
    {
      srcLink:
        "https://docs.google.com/presentation/d/e/2PACX-1vT_NJIr5ubp3HV1krSissg11esXPGXuxgiYY7kyQWryNtPgy9XE1BDS7cEwD9hCzQ/pubembed?start=true&loop=true&delayms=3000",
      slideDesc: "Micromechanical Analysis of Granular Materials using DEM",
    },
    {
      srcLink:
        "https://docs.google.com/presentation/d/e/2PACX-1vRPQjvzDfZRibSm4az2HRp2jPKhFJz-GO1mb4g5dlp7XjmHfFFksVLNY6jQlALzsA/pubembed?start=true&loop=true&delayms=3000",
      slideDesc: "Micromechanical Analysis of Granular Materials using DEM",
    },
    {
      srcLink:
        "https://docs.google.com/presentation/d/e/2PACX-1vQ5APvS6DPtL2DBuZXjPNil5XPXzH5PU2cGmOK1C995iBmfq42nbq6Hp_LjcFwogQ/pubembed?start=true&loop=true&delayms=3000",
      slideDesc: "Micromechanical Analysis of Granular Materials using DEM",
    },
    {
      srcLink:
        "https://docs.google.com/presentation/d/e/2PACX-1vSZDep5ixqxdNZd8CSDef3zAkeqkAdx7MKlLODHKOdwJJNob-pvJViKRhZNhOwM7g/pubembed?start=true&loop=true&delayms=3000",
      slideDesc: "Micromechanical Analysis of Granular Materials using DEM",
    },
  ];
  const others = [
    {
      srcLink:
        "https://docs.google.com/presentation/d/e/2PACX-1vRiIQz0VqX8lzViIyKgXHnFuvJsNtq7Vb54Anh2c2GvOgEnMX6n144e9CXjbes7ew/pubembed?start=true&loop=true&delayms=3000",
      slideDesc: "Micromechanical Analysis of Granular Materials using DEM",
    },
    {
      srcLink:
        "https://docs.google.com/presentation/d/e/2PACX-1vRhYpd-NKEK_qnlVyM8Z-NzxU7X-Y7NONvsnEofu4jYYkZEOI4pKmS9i-OWrzG7_Q/pubembed?start=true&loop=true&delayms=3000",
      slideDesc: "Micromechanical Analysis of Granular Materials using DEM",
    },
  ];
  return (
    <div className="teaching">
      {/* ===============================
          IIT MADRAS
      =============================== */}
      <section>
        <h2>IIT Madras</h2>

        <h5>Course Instructor</h5>
        <Accordion className="teaching-accordion">
          <AccordionTab
            className="accordion-header"
            header="CE 2040 – Geotechnical Engineering"
          >
            <a
              className="syllabus-link"
              href="\assets\pdf\Course_Sheet_CV2040_Geotechnical_Engg_2026.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Syllabus <i className="pi pi-external-link" />
            </a>
            <ul>
              <li>Introduction to geotechnical engineering</li>
              <li>Soil classification</li>
              <li>Stresses in soil</li>
              <li>Permeability and seepage</li>
              <li>Compressibility of soils</li>
              <li>Shear strength of soils</li>
              <li>Site investigation</li>
              <li>Applied geotechnical engineering</li>
            </ul>
          </AccordionTab>

          <AccordionTab
            className="accordion-header"
            header="CE 3350 – Geotechnical Engineering II"
          >
            <a
              className="syllabus-link"
              href="/assets/pdf/Syllabus_CE3350_Geotechnical_Engineering_II_2023.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Syllabus <i className="pi pi-external-link" />
            </a>
            <ul>
              <li>Analysis of state of stress in soil</li>
              <li>Failure theory; Shear strength of clays and sands</li>
              <li>Site investigation and subsoil exploration</li>
              <li>Earth pressure theories and retaining walls</li>
              <li>Stability analysis; Sheet piles and its applications</li>
              <li>Analysis of anchored wall</li>
              <li>
                Bearing capacity of shallow foundations and deep foundations
              </li>
              <li>Methods of construction</li>
              <li>Slope stability: Methods of analysis</li>
              <li>Types of failure and methods of analysis</li>
              <li>Introduction to soil dynamics</li>
            </ul>
          </AccordionTab>

          <AccordionTab
            className="accordion-header"
            header="CE 5300 – Applied Soil Mechanics"
          >
            <a
              className="syllabus-link"
              href="/assets/pdf/Syllabus_ASM_2021.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Syllabus <i className="pi pi-external-link" />
            </a>
            <ul>
              <li>Introduction to earthern structures</li>
              <li>Cavity expansion theory and its applications</li>
              <li>Earth pressure theories</li>
              <li>
                Retaining walls: Design of retaining walls and stability checks
              </li>
              <li>Sheet pile walls / anchored bulkheads, open cuts</li>
              <li>
                Theory of arching in soils and its applications in tunnels
              </li>
              <li>Diaphragm walls, pre-stressed ground anchors</li>
              <li>Slope stability: Methods of analysis</li>
              <li>Slope protection and stabilisation</li>
              <li>
                Earth dams and embankments: Choice of material, design of
                section, filters and drains
              </li>
              <li>
                Numerical packages used for solving some earth pressure and
                slope stability problems
              </li>
            </ul>
          </AccordionTab>

          <AccordionTab
            className="accordion-header"
            header="CE 6350 – Mechanics & Constitutive Modelling of Geomaterials"
          >
            <a
              className="syllabus-link"
              href="/assets/pdf/Syllabus_CE6350_Mechanics_and_Constitutive_Modelling_of_Geomaterials_2024.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Syllabus <i className="pi pi-external-link" />
            </a>
            <ul>
              <li>Revisiting fundamental tenets of soil behaviour</li>
              <li>Elemental testing of geomaterials</li>
              <li>Compression of soils</li>
              <ul class="nested-li">
                <li>Behaviour of OC and NC soils</li>
                <li>State boundary surfaces</li>
              </ul>
              <li>Stress path and invariants</li>
              <li>Critical state concepts, Roscoe and Hvorslev surface</li>
              <li>Brief introduction to continuum mechanics</li>
              <ul class="nested-li">
                <li>Vector calculus and indicial notation</li>
                <li>Tensors</li>
                <li>Kinetics and Kinematics</li>
              </ul>
              <li>Linear and non-linear elasticity</li>
              <ul class="nested-li">
                <li>Isotropic linear elastic stress-strain relations</li>
                <li>Hyperbolic non-linear model</li>
              </ul>
              <li>Constitutive laws (classical plasticity)</li>
              <ul class="nested-li">
                <li>
                  Yield function - (Tresca, Von-Mises, Mohr-Coulomb model and
                  others)
                </li>
                <li>Flow rule and plastic potential</li>
                <li>Hardening law</li>
                <li>Associated and non-associated plasticity</li>
              </ul>
              <li>Original Cam clay and Modified Cam clay</li>
              <li>Introduction to anisotropic critical state theory</li>
            </ul>
          </AccordionTab>
        </Accordion>

        <h5 className="mt">Course Coordinator</h5>
        <Accordion className="teaching-accordion">
          <AccordionTab
            className="accordion-header"
            header="CE 1010 – Introduction to Civil Engineering"
          >
            <a
              className="syllabus-link"
              href="/assets/pdf/CE1010_Introduction_to_Civil_Engineering.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              View/Download Syllabus <i className="pi pi-external-link" />
            </a>
          </AccordionTab>
        </Accordion>
      </section>

      {/* ===============================
          SHORT COURSES
      =============================== */}
      <section>
        <h2>Short Courses</h2>
        <ul className="highlight-list">
          <li className="flex align-items-center gap-2">
            <TfiQuoteRight />
            Delivered lectures in a short course at IIT - Khanpur on
            <strong> Micromechanical Analysis of Granular Materials </strong>
            (Nov-2025)
          </li>
          <li className="flex align-items-center gap-2">
            <TfiQuoteRight />
            Presented CCE sponsored short course at IISc Bangalore on
            <strong> Soil Constitutive Models</strong> (May-2023)
          </li>
          <li className="flex align-items-center gap-2">
            <TfiQuoteRight />
            Organized AICTE-QIP sponsored short course at IIT Madras on
            <strong> Introduction to Constitutive Modelling</strong> (Jan-2022)
          </li>
        </ul>
      </section>

      {/* ===============================
          UNIVERSITY OF CAMBRIDGE
      =============================== */}
      <section>
        <h2>University of Cambridge</h2>
        <h5>Course Supervisor</h5>
        <ul className="highlight-list">
          <li className="flex align-items-center gap-2">
            <TbArrowBadgeRightFilled />
            3D1 – Geotechnical Engineering I
          </li>
          <li className="flex align-items-center gap-2">
            <TbArrowBadgeRightFilled />
            3D2 – Geotechnical Engineering II
          </li>
        </ul>
      </section>

      {/* ===============================
          WEBINARS
      =============================== */}
      <section>
        <h2>Webinars</h2>
        <div className="video-grid">
          <iframe
            src="https://www.youtube.com/embed/VBmY2KtinIs"
            title="Webinar 1"
            allowFullScreen
          />
          <iframe
            src="https://www.youtube.com/embed/1xhmlVhvm6k"
            title="Webinar 2"
            allowFullScreen
          />
        </div>
      </section>

      {/* ===============================
          PRESENTATIONS
      =============================== */}
      <section className="presentaions">
        <h2>Presentations</h2>
        <div className="presentation-header flex align-items-center py-3">
          <FaFileAlt />
          <h5>Micromechanical Analysis of Granular Materials</h5>
        </div>
        <div className="flex flex-wrap justify-content-between">
          {micromechanicals.map((presentation) => (
            <div className="my-3">
              <iframe
                className=""
                src={presentation.srcLink}
                frameborder="0"
                allowfullscreen="true"
                mozallowfullscreen="true"
                webkitallowfullscreen="true"
              />
              {/* <p className="text-center p-3 font-semibold text-muted">
                {presentation.slideDesc}
              </p> */}
            </div>
          ))}
        </div>
        <div className="mt-4 presentation-header flex align-items-center py-3">
          <FaFileAlt />
          <h5>Constitutive modelling of Geomaterials</h5>
        </div>
        <div className="flex flex-wrap justify-content-between">
          {geomaterials.map((presentation) => (
            <div className="my-3">
              <iframe
                className=""
                src={presentation.srcLink}
                frameborder="0"
                allowfullscreen="true"
                mozallowfullscreen="true"
                webkitallowfullscreen="true"
              />
              {/* <p className="text-center p-3 font-semibold text-muted">
                {presentation.slideDesc}
              </p> */}
            </div>
          ))}
        </div>
        <div className="mt-4 presentation-header flex align-items-center py-3">
          <FaFileAlt />
          <h5>Others</h5>
        </div>
        <div className="flex flex-wrap justify-content-between">
          {others.map((presentation) => (
            <div className="my-3">
              <iframe
                className=""
                src={presentation.srcLink}
                frameborder="0"
                allowfullscreen="true"
                mozallowfullscreen="true"
                webkitallowfullscreen="true"
              />
              {/* <p className="text-center p-3 font-semibold text-muted">
                {presentation.slideDesc}
              </p> */}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
