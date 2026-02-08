import React, { useEffect, useState } from "react";
import { Carousel } from "primereact/carousel";

import "primereact/resources/themes/lara-light-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { Dialog } from "primereact/dialog";
import { CgChevronRightO } from "react-icons/cg";

import "./Research.scss";

/* ===============================
   Research Carousel Data
   =============================== */
const imgContents = [
  {
    img: "c_phi.png",
    name: "3D Contact Bound Structure of a c-φ Material",
  },
  {
    img: "failure_surface.jpg",
    name: "Failure Surface for Cohesive Frictional Materials",
  },
  { img: "frac.png", name: "Fracture Capture Simulator" },
  {
    img: "velocity.png",
    name: "Flow Kinematics of Granular Materials through Hopper considering Realistic Morphology",
  },
  {
    img: "Preprocessing.jfif",
    name: "CITA - Concrete Image Thresholder and Analyser",
  },
  {
    img: "Agg_fracture.png",
    name: "Aggregate breakage under pseudo-realistic and realistic morphologies using PD-DEM",
  },
  {
    img: "zones.jfif",
    name: "Fluid Induced Cavity Expansion Model for Porous Medium",
  },
  {
    img: "Temperature.jfif",
    name: "Methane Extraction from Horizontal Wellbore in Gas-Hydrate Reservoir using THMC simulator",
  },
  {
    img: "Triaxial.jpeg",
    name: "High Pressure Temperature Gas Controlled Triaxial Apparatus",
  },
  { img: "sand.jfif", name: "3D Modelling of Soil-Geogrid Interaction" },
  { img: "termite_mound.png", name: "Termite Mound" },
];

export default function Research() {
  useEffect(() => {
    document.title = "RameshKK | Research";
  }, []);

  const [visible, setVisible] = useState(false);
  const [activeItem, setActiveItem] = useState(null);

  const handleImageClick = (item) => {
    setActiveItem(item);
    setVisible(true);
  };

  const carouselTemplate = (item) => (
    <div className="research-slide text-center">
      <img
        src={`/assets/images/others/${item.img}`}
        alt={item.name}
        className="w-full clickable-img"
        loading="lazy"
        onClick={() => handleImageClick(item)}
      />
      <div className="research-caption mt-2">{item.name}</div>
    </div>
  );

  return (
    <div className="research p-3">
      <div className="container mt-4">
        {/* ===============================
            Research Interests
           =============================== */}
        <h2 className="mb-3">Research Interests</h2>
        <ul className="research-list p-0 mt-3 ms-3">
          <li className="flex align-items-center gap-3">
            <CgChevronRightO className="" />
            Geo-mechanics
          </li>
          <li className="flex align-items-center gap-3">
            <CgChevronRightO />
            Constitutive Behaviour of Transitional Geo-materials
          </li>
          <li className="flex align-items-center gap-3">
            <CgChevronRightO />
            Hydraulic Fracturing / Wellbore Strengthening (Energy Geotechnics)
          </li>
          <li className="flex align-items-center gap-3">
            <CgChevronRightO />
            Micromechanics of Granular Materials
          </li>
          <li className="flex align-items-center gap-3">
            <CgChevronRightO />
            Bio-inspired and Bio-mediated Geotechnics
          </li>
        </ul>

        <hr />

        {/* ===============================
            Research Highlights (PrimeReact Carousel)
           =============================== */}
        <h2 className="mb-3">Research Highlights</h2>

        <Carousel
          value={imgContents}
          itemTemplate={carouselTemplate}
          numVisible={1}
          numScroll={1}
          circular
          autoplayInterval={3000}
          showNavigators
          showIndicators={false}
          className="mt-3"
        />
        <Dialog
          header={activeItem?.name}
          visible={visible}
          style={{ width: "75vw", maxWidth: "900px" }}
          onHide={() => setVisible(false)}
          maximizable
          draggable={false}
        >
          {activeItem && (
            <img
              src={`/assets/images/others/${activeItem.img}`}
              alt={activeItem.name}
              style={{
                width: "100%",
                borderRadius: "14px",
                objectFit: "contain",
              }}
            />
          )}
        </Dialog>

        <hr />

        {/* ===============================
            Research Videos
           =============================== */}
        <div className="research-videos">
          <div className="row mt-4">
            <div className="col-lg-6 text-center">
              <video className="research-videos-tag" autoPlay loop muted>
                <source
                  src="/assets/videos/verticalDisplacement.mp4"
                  type="video/mp4"
                />
              </video>
              <p className="mt-2">Vertical Displacement</p>
            </div>

            <div className="col-lg-6 text-center">
              <video className="research-videos-tag" autoPlay loop muted>
                <source src="/assets/videos/volumetric.mp4" type="video/mp4" />
              </video>
              <p className="mt-2">Volumetric Strain</p>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-lg-6 text-center">
              <video className="research-videos-tag" autoPlay loop muted>
                <source
                  src="/assets/videos/porePressure.mp4"
                  type="video/mp4"
                />
              </video>
              <p className="mt-2">Pore Pressure</p>
            </div>

            <div className="col-lg-6 text-center">
              <video className="research-videos-tag" autoPlay loop muted>
                <source
                  src="/assets/videos/deviatoricStrain.mp4"
                  type="video/mp4"
                />
              </video>
              <p className="mt-2">Deviatoric Strain</p>
            </div>
          </div>

          <h5 className="text-center mt-4">
            Spatial and Temporal Variation of Geomechanical Parameters during
            Methane Gas Hydrate Extraction
          </h5>
        </div>

        <hr />

        {/* ===============================
            Evolution Videos
           =============================== */}
        <div className="row research-videos mt-4">
          <div className="col-lg-6 text-center py-3">
            <video className="research-evolution" autoPlay loop muted>
              <source
                src="/assets/videos/evolution masked.mp4"
                type="video/mp4"
              />
            </video>
          </div>

          <div className="col-lg-6 text-center py-3">
            <video className="research-evolution" autoPlay loop muted>
              <source
                src="/assets/videos/Evolution vs time.mp4"
                type="video/mp4"
              />
            </video>
          </div>

          <h5 className="text-center mt-3">
            Fluid Induced Instabilities / Fingering in Granular Medium
          </h5>
        </div>
      </div>
    </div>
  );
}
