import React, { useEffect } from "react";
import { Accordion, AccordionTab } from "primereact/accordion";
import "./Publications.scss";
import { FaLink } from "react-icons/fa";
import { Badge } from "primereact/badge";
import { Avatar } from "primereact/avatar";
import JournalBanner from "../../components/JournalBanner/JournalBanner";

const scholarProfiles = [
  {
    name: "Google Scholar",
    link: "https://scholar.google.co.in/citations?user=D42RIhcAAAAJ&hl=en",
    img: "/assets/images/scholars/google-scholar-circle.png",
  },
  {
    name: "ORCID",
    link: "https://orcid.org/0000-0003-0803-3109",
    img: "/assets/images/scholars/orcid-circle.png",
  },
  {
    name: "IRINS",
    link: "https://iitm.irins.org/profile/150507",
    img: "/assets/images/scholars/irins.png",
    className: "irins-img",
  },
  {
    name: "ResearchGate",
    link: "https://www.researchgate.net/profile/Ramesh-Kannan-Kandasami",
    img: "/assets/images/scholars/researchgate-circle.png",
  },
  {
    name: "Scopus",
    link: "https://www.scopus.com/authid/detail.uri?authorId=55804419900",
    img: "/assets/images/scholars/scopus-circle.png",
  },
];

const journalPublications = [
  {
    journalName:
      'Wani S., Rao M. S., and Kandasami R. K. (2026) "Role of hydrate cementation habits on the geomechanical behavior of hydrate bearing sediments", Engineering Geology, Vol. 365, pp. 108650',
    link: "https://doi.org/10.1016/j.enggeo.2026.108650",
  },
  {
    journalName:
      'Kumar N., and Kandasami R. K. (2026) "Assessing tensile performance and damage in glasgrid reinforcements using image-based characterization", Geotextiles and Geomembranes, Vol. 54(4), pp. 575-601',
    link: "",
  },
  {
    journalName:
      'Kumar J. S., Chaudhuri A., and Kandasami R. K. (2026) "Geomechanical unload‐reload response of cylindrical cavities for wellbore stability", International Journal for Numerical and Analytical Methods in Geomechanics,',
    link: "https://doi.org/10.1002/nag.70238",
  },
  {
    journalName:
      'Kumar J. S., and Kandasami R. K. (2025) "Kinetic to capillary flow transition during drilling fluid injection through porous medium", Géotechnique Letters, Vol. 15(4), pp. 289-294',
    link: "https://doi.org/10.1680/jgele.24.00139",
  },
  {
    journalName:
      'Kalyan N. S. S. P., Badu P., and Kandasami R. K. (2025) "Complex network and fabric driven non-affine kinematics of aggregate-rubber mixtures", Computers and Geotechnics, Vol. 187, pp. 107436',
    link: "https://doi.org/10.1016/j.compgeo.2025.107436",
  },
  {
    journalName:
      'Bandaru B., Kandasami R. K., and Robinson R. G. (2025) "Cementation and pore-filling mechanisms in cement treated low-plastic clays", Acta Geotechnica, Vol. 21(1), pp. 91-116',
    link: "https://doi.org/10.1007/s11440-025-02760-2",
  },
  {
    journalName:
      'Wani S., Agarwal I., Bugalia N., and Kandasami R. K. (2025) "Predicting the performance of slurry TBM through marine deposits using machine learning models", Automation in Construction, Vol. 177, pp. 106308',
    link: "https://doi.org/10.1016/j.autcon.2025.106308",
  },
  {
    journalName:
      'Rehman M. U., Kandasami R. K., and Banerjee S. (2025) "Simplified approach for liquefaction assessment in granular soils: integrating bulk and grain properties", Granular Matter, Vol. 27(3), pp. 56',
    link: "https://doi.org/10.1007/s10035-025-01529-4",
  },
  {
    journalName:
      'Konstantinou C., Kandasami R. K., Biscontin G., and Papanastasiou P. (2025) "Effects of stress state during fluid injection fracturing experiments in weakly cemented porous media", Engineering Fracture Mechanics, Vol. 319, pp. 111016',
    link: "https://doi.org/10.1016/j.engfracmech.2025.111016",
  },
  {
    journalName:
      'Kumar N., Rawat P., and Kandasami R. K. (2025) "Enhancing the characteristics of natural coir fiber yarns using biopolymer for textile reinforced cementitious composites", Construction and Building Materials, Vol. 470, pp. 140427',
    link: "https://doi.org/10.1016/j.conbuildmat.2025.140427",
  },
  {
    journalName:
      'Kandasami R. K., Konstantinou C., and Biscontin G. (2025) "Development of a fracture capture simulator to quantify the instability evolution in porous medium", Journal of Rock Mechanics and Geotechnical Engineering, Vol. 17(12)',
    link: "https://doi.org/10.1016/j.jrmge.2025.01.043",
  },
  {
    journalName:
      'Wani S., Kandasami R. K., and Wu W. (2025) "Hypoplastic model for gas hydrate-bearing sediments considering pore morphology", Computers and Geotechnics, Vol. 181, pp. 107115',
    link: "https://doi.org/10.1016/j.compgeo.2025.107115",
  },
  {
    journalName:
      'Wani S. and Kandasami R. K. (2025) "Identification and extension of an advanced gas hydrate sediment constitutive model using the auto-calibration technique", International Journal of Geomechanics, Vol. 25(5), pp. 04025050',
    link: "https://doi.org/10.1061/IJGNAI.GMENG-9768",
  },
  {
    journalName:
      'Wani S., Alipour M. J., Kandasami R. K. and Wu W. (2024) "MS-IS hypoplastic model considering stiffness degradation under cyclic loading conditions", International Journal for Numerical and Analytical Methods in Geomechanics, pp. 1-18',
    link: "https://doi.org/10.1002/nag.3900",
  },
  {
    journalName:
      'Kalyan N. S. S. P., Fukumoto Y. and Kandasami R. K. (2024) "Investigating rock particle breakage using 3D coupled PD-DEM: Emphasis on local surface features", Engineering Fracture Mechanics, Vol. 312, pp. 110585',
    link: "https://doi.org/10.1016/j.engfracmech.2024.110585",
  },
  {
    journalName:
      'Wani S., Kandasami R. K., Kumar R. and Wu P. (2024) "Disturbed State Concept-Based Model Incorporating Strain-Softening Behavior for Gas Hydrate Sediments", Energy and Fuels, Vol. 38(10), pp. 8712–8725',
    link: "https://pubs.acs.org/doi/full/10.1021/acs.energyfuels.4c01171",
  },
  {
    journalName:
      'Kumar J. S., Kandasami R. K. and Sangwai J. S. (2024) "Formation and evolution of particle migration zones for different drilling fluid compositions in porous media", Acta Geotechnica, Vol. 19(3), pp. 1–20',
    link: "https://link.springer.com/article/10.1007/s11440-024-02316-w",
  },
  {
    journalName:
      'Shoeb Md., Kandasami R. K., Singh S., and Sebastian S. (2024) "Framework for treatment of coconut coir fibres through physico-chemical techniques", International Journal of Geosynthetics and Ground Engineering, Vol. 10(2), pp. 1–22',
    link: "https://link.springer.com/article/10.1007/s40891-024-00529-3",
  },
  {
    journalName:
      'Kumar J. S., Chaudhuri A., Detournay E., and Kandasami R. K. (2024) "Fluid injection-induced cavity expansion in dry porous medium", International Journal for Numerical and Analytical Methods in Geomechanics, Vol. 48(1), pp. 104–122',
    link: "https://onlinelibrary.wiley.com/doi/abs/10.1002/nag.3631",
  },
  {
    journalName:
      'Wani S., Samala R., Kandasami R. K., and Chaudhuri A. (2023) "Positioning of horizontal well-bore in the hydrate reservoir using a custom developed coupled THMC solver", Computers and Geotechnics, Vol. 161, pp. 105618',
    link: "https://linkinghub.elsevier.com/retrieve/pii/S0266352X23003750",
  },
  {
    journalName:
      'Singh S., Kandasami R. K., Murthy T. G., and Coop M. (2023) "On the modelling of stress-dilatancy behavior in weakly cemented sands", Soils and Foundations, Vol. 63(4), pp. 101328',
    link: "https://www.sciencedirect.com/science/article/pii/S0038080623000574",
  },
  {
    journalName:
      'Konstantinou C., Kandasami R. K., Biscontin G., and Papanastasiou P. (2023) "Fluid injection through artificially reconstituted bio-cemented sands", Geomechanics for Energy and the Environment, Vol. 34, pp. 100466',
    link: "https://www.sciencedirect.com/science/article/abs/pii/S2352380823000357",
  },
  {
    journalName:
      'Kalyan N. S. S. P., and Kandasami R. K. (2023) "Flow kinematics of granular materials considering realistic morphology", Powder Technology, Vol. 424, pp. 118516',
    link: "https://linkinghub.elsevier.com/retrieve/pii/S0032591023003005",
  },
  {
    journalName:
      'Farooq H. A., Kandasami R. K., Sorrentino G., and Biscontin G. (2023) "Rupture resistance of filter cake under static filtration using a novel experimental technique", Chemical Engineering Science, Vol. 270, pp. 118508',
    link: "https://www.sciencedirect.com/science/article/abs/pii/S0009250923000647",
  },
  {
    journalName:
      'Selvam M., Kalyan N. S. S. P., Kandasami R. K., and Singh S. (2023) "Assessing the effect of different compaction mechanisms on the internal structure of roller compacted concrete", Construction and Building Materials, Vol. 365, pp. 130072',
    link: "https://www.sciencedirect.com/science/article/abs/pii/S095006182203728X",
  },
  {
    journalName:
      'Deviprasad B. S., et al., and Kandasami R. K. (2022) "Deterministic and probabilistic measures of liquefaction susceptibility: A comparison", Indian Geotechnical Journal, Vol. 53, pp. 208–219',
    link: "https://link.springer.com/article/10.1007/s40098-022-00666-4",
  },
  {
    journalName:
      'Kumar N., Kandasami R. K., and Singh S. (2022) "Effective utilization of natural fibres (coir and jute) for sustainable low-volume rural road construction: A critical review", Construction and Building Materials, Vol. 347, pp. 128606',
    link: "https://www.sciencedirect.com/science/article/abs/pii/S0950061822022632",
  },
  {
    journalName:
      'Konstantinou C., Kandasami R. K., Wilkes C., and Biscontin G. (2021) "Fluid Injection Under Differential Confinement", Transport in Porous Media, Vol. 139, pp. 627-650',
    link: "https://link.springer.com/article/10.1007/s11242-021-01692-1",
  },
  {
    journalName:
      'Kandasami R. K., Singh S., and Murthy T. G. (2021) "Experimental investigations on the stress path dependence of weakly cemented sand", Journal of Geotechnical and Geoenvironmental Engineering, ASCE, Vol. 147(4), pp. 04021007',
    link: "https://ascelibrary.org/doi/abs/10.1061/%28ASCE%29GT.1943-5606.0002475",
  },
  {
    journalName:
      'Kandasami R. K., and Murthy T. G. (2017) "Manifestation of particle morphology on the mechanical behaviour of granular ensembles", Granular Matter, Vol. 19 (2), pp. 21(1-13)',
    link: "https://link.springer.com/article/10.1007/s10035-017-0703-z",
  },
  {
    journalName:
      'Kandasami R. K., Borges R. M., and Murthy T. G. (2016) "Effect of biocementation on the strength and stability of termite mounds", Environmental Geotechnics, Vol. 3 (2), pp. 99-113',
    link: "https://www.icevirtuallibrary.com/doi/abs/10.1680/jenge.15.00036",
  },
  {
    journalName:
      'Kandasami R. K., and Murthy T. G. (2015) "Experimental studies on the influence of intermediate principal stress and inclination on the mechanical behaviour of angular sands", Granular Matter, Vol. 17 (2), pp. 217-230',
    link: "https://link.springer.com/article/10.1007/s10035-015-0554-4",
  },
  {
    journalName:
      'Bhargav S. D. B., Kandasami R. K., Murthy T. G., and Ananthasuresh G. K. (2015) "Design of a portable compliant device for estimating the failure-load of meso-scale cemented sand specimens", Journal of Mechanical Design, ASME, Vol. 137 (6), pp. 1-8',
    link: "https://asmedigitalcollection.asme.org/mechanicaldesign/article-abstract/137/6/065001/375449/Design-of-a-Portable-Compliant-Device-for",
  },
];

const patents = [
  {
    patentName:
      'Kandasami R. K., Biscontin G., and Konstantinou C. (2022) "Physical modeling and real-time recording of fracture propagation in geo-materials using a fracture capture simulator", Joint patent between University of Cambridge and IIT Madras, Indian Patent No. 430818, Application No. 202241040415',
    link: "https://home.iitm.ac.in/rameshkk/assets/pdf/certificate_1.pdf",
  },
];

const conferencePublications = [
  {
    journalName:
      "Rao M. S., Wani S., and Kandasami R. K. (2026) Influence of effective confinement pressure on geomechanical characteristics of hydrate-bearing sediments, Geo-Congress 2026, pp. 433-442",
    link: "https://doi.org/10.1061/9780784486719.044",
  },
  {
    journalName:
      "Bandaru B., Robinson R. G., and Kandasami R. K. (2026) Influence of cement dosage and plasticity on the stiffness of stabilised clays: classification and mechanical response, Geo-Congress 2026, pp. 496-501",
    link: "https://doi.org/10.1061/9780784486764.049",
  },
  {
    journalName:
      "Kumar J. S., and Kandasami R. K. (2026) Experimental study on drilling fluid particle migration through porous media, Advances in Rock Mechanics—Infrastructure Development, Proceedings of the 13th Asian Rock Mechanics Symposium (ARMS13)",
    link: "https://doi.org/10.1007/978-981-95-4259-8_23",
  },
  {
    journalName:
      "Anwar A., Kalyan N. S. S. P., and Kandasami R. K. (2025) Compaction mechanics of soft-rigid mixtures considering realistic particle morphology, EPJ Web of Conferences, Vol. 340, pp. 07016",
    link: "https://doi.org/10.1051/epjconf/202534007016",
  },
  {
    journalName:
      "Manjunath K., Kalyan N. S. S. P., Kandasami R. K., and Banerjee S. (2025) Hydrodynamic forces on particles considering realistic morphologies, EPJ Web of Conferences, Vol. 340, pp. 08003",
    link: "https://doi.org/10.1051/epjconf/202534008003",
  },
  {
    journalName:
      "Sebastin C., Kumar J. S., and Kandasami R. K. (2025) Effect of overburden pressure on cylindrical cavity expansion using advanced constitutive models, International Conference of the International Association for Computer Methods and Advances in Geomechanics, pp. 770-777",
    link: "https://link.springer.com/chapter/10.1007/978-981-95-5969-5_109",
  },
  {
    journalName:
      "Fukumoto Y., Kalyan N. S. S. P., Kandasami R. K., and Shimbo T. (2025) Fracture and post-fracture modeling of compacted clay soils based on coupled peridynamics-DEM, International Conference of the International Association for Computer Methods and Advances in Geomechanics, pp. 301-309",
    link: "https://link.springer.com/chapter/10.1007/978-981-95-5969-5_40",
  },
  {
    journalName:
      "Bandaru B., Robinson R. G., and Kandasami R. K. (2025) Early-age prediction of compressibility in cement-stabilized clays using critical state framework, International Conference of the International Association for Computer Methods and Advances in Geomechanics, pp. 519-525",
    link: "https://link.springer.com/chapter/10.1007/978-981-95-5969-5_73",
  },
  {
    journalName:
      "Bandaru B., Kandasami R. K., and Robinson R. G. (2025) Curing stress effects on stabilization of low and high plastic clays in inactive and active zones, GeoVadis, CRC Press, pp. 129-134",
    link: "https://www.taylorfrancis.com/chapters/oa-edit/10.1201/9781003645931-22/curing-stress-effects-stabilization-low-high-plastic-clays-inactive-active-zones-balaji-bandaru-ramesh-kandasami-robinson",
  },
  {
    journalName:
      "Kumar N., and Kandasami R. K. (2025) Evaluation of mechanical degradation to glasgrid under cyclic loading during installation in roads, GeoVadis, CRC Press, pp. 651-656",
    link: "https://www.taylorfrancis.com/chapters/oa-edit/10.1201/9781003645917-101/evaluation-mechanical-degradation-glasgrid-cyclic-loading-installation-roads-nitish-kumar-ramesh-kannan-kandasami",
  },
  {
    journalName:
      "Wani S., and Kandasami R. K. (2025) Parametric analysis and modeling of gas hydrate sediment behavior, GeoVadis, CRC Press, pp. 136-141",
    link: "https://www.taylorfrancis.com/chapters/oa-edit/10.1201/9781003645917-19/parametric-analysis-modeling-gas-hydrate-sediment-behavior-wani-kannan",
  },
  {
    journalName:
      "Rehman M. U., Kandasami R. K., and Banerjee S. (2025) Packing index as a novel measure for estimating the liquefaction resistance in granular soils, GeoVadis, CRC Press, pp. 351-356",
    link: "https://www.taylorfrancis.com/chapters/oa-edit/10.1201/9781003645917-53/packing-index-novel-measure-estimating-liquefaction-resistance-granular-soils-rehman-kandasami-banerjee",
  },
  {
    journalName:
      "Rao M. S., Wani S., and Kandasami R. K. (2025) Mechanical characterization of hydrate-bearing sediments using multistage triaxial testing, 3rd International Conference on Energy Geotechnics 2025",
    link: "https://hal.science/hal-05344006/document",
  },
  {
    journalName:
      "Pulaganti N. and Kandasami R. K. (2025) Particle gradation and relative density governing the pore constriction size, Soil Dynamics and Computational Geomechanics: Select Proceedings of 8IYGEC 2021, pp. 221",
    link: "https://doi.org/10.1007/978-981-96-1368-7",
  },
  {
    journalName:
      "Kalyan N. S. S. P., Badu P., and Kandasami R. K. (2025) Numerical study on the influence of rubber content on the mechanical behaviour of angular aggregates, IOP Conference Series: Earth and Environmental Science, Vol. 1480(1), pp. 012058",
    link: "https://iopscience.iop.org/article/10.1088/1755-1315/1480/1/012058/meta",
  },
  {
    journalName:
      "Fukumoto Y., Kalyan N. S. S. P., Kandasami R. K., and Shimbo T. (2025) Coupled peridynamics and DEM with unstructured grid for evaluating the effect of particle morphology on fracture behavior, IOP Conference Series: Earth and Environmental Science, Vol. 1480(1), pp. 012036",
    link: "https://iopscience.iop.org/article/10.1088/1755-1315/1480/1/012036/meta",
  },
  {
    journalName:
      "Kalyan N. S. S. P., Fukumoto Y., and Kandasami R. K. (2025) Geometric effects on particle fragmentation: Numerical perspective from coupled continuum-discrete simulations, IOP Conference Series: Earth and Environmental Science, Vol. 1480(1), pp. 012043",
    link: "https://iopscience.iop.org/article/10.1088/1755-1315/1480/1/012043/meta",
  },
  {
    journalName:
      "Kumar J. S., Kalyan N. S. S. P., Lijith K. P., and Kandasami R. K. (2025) Investigations on particle migration during suspension injection through porous medium using x-ray CT, IOP Conference Series: Earth and Environmental Science, Vol. 1480(1), pp. 012013",
    link: "https://iopscience.iop.org/article/10.1088/1755-1315/1480/1/012013/meta",
  },
  {
    journalName:
      "Rao M. S., Wani S., and Kandasami R. K. (2025) Effect of hydrate morphology on geomechanical behavior of gas hydrate sediments, Geotechnical Frontiers 2025, pp. 535–544",
    link: "https://doi.org/10.1061/9780784486016.054",
  },
  {
    journalName:
      "Kumar J. S., Kandasami R. K., Chaudhuri A., and Detournay E. (2024) Investigating the deformation characteristics of dry Mohr-Coulomb material during radial fluid injection, ARMA US Rock Mechanics/Geomechanics Symposium 2024, pp. 1201",
    link: "https://doi.org/10.56952/ARMA-2024-1201",
  },
  {
    journalName:
      "Rao M. S., Wani S., and Kandasami R. K. (2024) Experimental investigation and modeling of geomechanical behavior for methane hydrate-bearing sediments, ARMA US Rock Mechanics/Geomechanics Symposium 2024, pp. 1203",
    link: "https://doi.org/10.56952/ARMA-2024-1203",
  },
  {
    journalName:
      "Wani S., Rehman M. U., Rao M. S., Kandasami R. K., and Banerjee S. (2024) Hypoplastic model predictions for Ennore sand under monotonic and cyclic loading conditions, ARMA US Rock Mechanics/Geomechanics Symposium 2024, pp. 1204",
    link: "https://doi.org/10.56952/ARMA-2024-1204",
  },
  {
    journalName:
      "Wani S., Samala R., Kandasami R. K., and Chaudhuri A. (2024) Extraction-induced deformation in the gas hydrate reservoir using a multiphase-coupled THMC solver, Geo-Congress 2024, pp. 72–81",
    link: "https://doi.org/10.1061/9780784485347.008",
  },
  {
    journalName:
      "Kumar J. S., and Kandasami R. K. (2024) Investigating the impact of particle migration phenomena on drilling mud filtrates during injection through porous media, Geo-Congress 2024, pp. 218–227",
    link: "https://doi.org/10.1061/9780784485330.023",
  },
  {
    journalName:
      "Bandaru B., Kandasami R. K., and Robinson R. G. (2024) Applicability of MCC and CASM-based structured soil models, Geo-Congress 2024, pp. 92–100",
    link: "https://doi.org/10.1061/9780784485347.010",
  },
  {
    journalName:
      "Kumar J. S., and Kandasami R. K. (2023) Rheological behavior of granular materials under different relative densities, 8th International Symposium on Deformation Characteristics of Geomaterials (ISDCG2023), E3S Web of Conferences, Vol. 544, pp. 1–6",
    link: "https://www.e3s-conferences.org/articles/e3sconf/abs/2024/74/e3sconf_is-porto2024_09002/e3sconf_is-porto2024_09002.html",
  },
  {
    journalName:
      "Kumar N., Narayanan M. S., Thasneem S., and Kandasami R. K. (2023) Experimental and numerical investigations on the pullout behaviour of coir geotextile, Geosynthetics: Leading the Way to a Resilient Planet, pp. 597–603",
    link: "",
  },
  {
    journalName:
      "Wani S., Samala R., Kandasami R. K., and Chaudhuri A. (2023) Numerical Study on the Effect of Hydrate Saturation on the Geo-Mechanical Behavior of Gas Hydrate Sediments, IACMAG 2022, Lecture Notes in Civil Engineering, Vol. 288",
    link: "",
  },
  {
    journalName:
      "Wani S., Samala R., Kandasami R. K., and Chaudhuri A. (2022) Numerical study on the hydrate rich sediment behavior during depressurization, Geomechanics and Natural Materials, WCCM-APCOM, Vol. 1600, pp. 1–12",
    link: "https://www.scipedia.com/public/Wani_et_al_2022a",
  },
  {
    journalName:
      "Selvakumar N., Pulaganti N., and Kandasami R. K. (2022) Formation of internal filter cake due to particle migration in porous media, Geo-Congress: Soil Improvement, Geosynthetics, and Innovative Geomaterials",
    link: "",
  },
  {
    journalName:
      "Kumar J. S., and Kandasami R. K. (2021) Fluid induced deformation in porous media – Sensitivity analysis of a poroelastic model, IOP Conference Series: Earth and Environmental Science, Vol. 861(7), pp. 072147",
    link: "",
  },
  {
    journalName:
      "Kalyan N. S. S. P., and Kandasami R. K. (2021) Computationally efficient approach to quantify 2D particle morphological descriptors, EPJ Web Conferences, Vol. 249, pp. 05002",
    link: "",
  },
  {
    journalName:
      "Wani S., Samala R., Chaudhuri A., and Kandasami R. K. (2020) Efficacy of elastic-plastic constitutive models in predicting the geo-mechanical response of gas hydrate sediments, E3S Web of Conferences, Vol. 205, pp. 13012",
    link: "",
  },
  {
    journalName:
      "Zachariah N., Kandasami R. K., Das A., Murthy T. G., and Borges R. M. (2019) Strength and cementation in a termite mound, Earthen Dwellings and Structures, pp. 131–139",
    link: "",
  },
  {
    journalName:
      "Singh S., Kandasami R. K., Mahendran R. K., and Murthy T. G. (2017) System size effects on the mechanical response of cohesive-frictional granular ensembles, EPJ Web Conferences, Vol. 140, pp. 08007",
    link: "",
  },
  {
    journalName:
      "Singh S., Kandasami R. K., and Murthy T. G. (2017) Prediction of mechanical response of geomaterials using advanced elasto-plastic constitutive models, Procedia Engineering, Vol. 173, pp. 793–799",
    link: "",
  },
  {
    journalName:
      "Singh S., Kandasami R. K., and Murthy T. G. (2017) Mechanics and modeling of cohesive frictional granular materials, Advances in Laboratory Testing and Modelling of Soils and Shales, Springer, pp. 493–500",
    link: "",
  },
  {
    journalName:
      "Kandasami R. K., Singh S., and Murthy T. G. (2016) Mechanical behaviour of cemented sands: experiments and model prediction, Indian Geotechnical Conference Proceedings, Vol. 186, pp. 1–4",
    link: "",
  },
  {
    journalName:
      "Kandasami R. K., and Murthy T. G. (2015) Experimental investigations on cemented sands with varying intermediate principal stress ratio, XVI ECSMGE–ISI Conference Proceedings, pp. 3189–3194",
    link: "",
  },
  {
    journalName:
      "Kandasami R. K., and Murthy T. G. (2015) The effects of length scale on the mechanical behaviour of cemented sands, ISRM Congress Proceedings",
    link: "",
  },
  {
    journalName:
      "Kandasami R. K., and Murthy T. G. (2014) Effect of Intermediate Principal Stress on the Mechanical Behavior of Angular Sand, Soil Behavior and Geomechanics, pp. 406–415",
    link: "https://doi.org/10.1061/9780784413388.042",
  },
  {
    journalName:
      "Kandasami R. K., and Murthy T. G. (2014) Effect of particle shape on the mechanical response of a granular ensemble, Geomechanics from Micro to Macro, Vol. 2, pp. 1093–1098",
    link: "",
  },
  {
    journalName:
      "Yadav S., Singh S., Kandasami R. K., Murthy T. G., and Saldana C. (2014) Experimental studies on the cutting of granular materials, Geomechanics from Micro to Macro, Vol. 2, pp. 1209–1212",
    link: "",
  },
  {
    journalName:
      "Kandasami R. K., and Murthy T. G. (2014) Fabric studies on angular sand under drained and undrained conditions, Indian Geotechnical Conference Proceedings, Vol. 1, pp. 326–333",
    link: "",
  },
  {
    journalName:
      "Kandasami R. K., and Murthy T. G. (2013) Experimental studies on the mechanics of cohesive frictional granular media, American Institute of Physics, Vol. 1542, pp. 987–990",
    link: "",
  },
  {
    journalName:
      "Kandasami R. K., and Murthy T. G. (2013) Effect of confining pressure on small strain stiffness properties of Cauvery delta sand, Indian Geotechnical Conference Proceedings, Vol. 1, pp. 1–6",
    link: "",
  },
  {
    journalName:
      "Kandasami R. K., and Sharma K. G. (2011) Thermo-hydro-mechanical analysis of underground nuclear repositories, Third International Conference on Infrastructure and Environment, Vol. 1, pp. 109–116",
    link: "",
  },
];

export default function Publications() {
  useEffect(() => {
    document.title = "RameshKK | Publications";
  }, []);
  return (
    <div className="publication container my-5 ">
      {/* Scholar Profiles */}
      <h2 className="mb-3">Scholar Profiles</h2>

      <div className="row mb-5">
        <div className="col flex justify-content-center scholar-images">
          {scholarProfiles.map((item, idx) => (
            <a
              key={idx}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={item.img}
                alt={item.name}
                className={`profile-img-sch ${item.className || ""}`}
              />
            </a>
          ))}
        </div>
      </div>

      <JournalBanner />
      {/* Publications */}
      <Accordion multiple>
        <AccordionTab
          header={
            <span className="flex align-items-center gap-2 w-full">
              <span className="font-bold white-space-nowrap">
                📘 Journal Publications
              </span>
              <Badge
                value={`${journalPublications.length}`}
                className="ml-auto"
              />
            </span>
          }
        >
          <ol className="publication-list">
            {journalPublications.map((pub, i) => (
              <li key={i} className="">
                <span className="pub-authors-desc">{pub.journalName} </span>
                <a
                  href={pub.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mx-2"
                >
                  <FaLink />
                </a>
              </li>
            ))}
          </ol>
        </AccordionTab>

        <AccordionTab
          header={
            <span className="flex align-items-center gap-2 w-full">
              <span className="font-bold white-space-nowrap">📜 Patents</span>
              <Badge value={`${patents.length}`} className="ml-auto" />
            </span>
          }
        >
          <ol className="publication-list">
            {patents.map((pub, i) => (
              <li key={i} className="">
                <span className="pub-authors-desc">{pub.patentName} </span>
                <a
                  href={pub.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mx-2"
                >
                  <FaLink />
                </a>
              </li>
            ))}
          </ol>
        </AccordionTab>

        <AccordionTab
          header={
            <span className="flex align-items-center gap-2 w-full">
              <span className="font-bold white-space-nowrap">
                📑 Conference Publications
              </span>
              <Badge
                value={`${conferencePublications.length}`}
                className="ml-auto"
              />
            </span>
          }
        >
          <ol className="publication-list">
            {conferencePublications.map((pub, i) => (
              <li key={i} className="">
                <span className="pub-authors-desc">{pub.journalName} </span>
                <a
                  href={pub.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mx-2"
                >
                  <FaLink />
                </a>
              </li>
            ))}
          </ol>
        </AccordionTab>
      </Accordion>
    </div>
  );
}
