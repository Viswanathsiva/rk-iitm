import StudentCard from "../../../components/StudentCard/StudentCard";

// students.js
const activeStudents = [
  {
    name: "Nitish Kumar",
    image: "Nithish.png",
    degree: "M.S. + Ph.D",
    year: "2020 - Present",
    isPrimaryGuidePresent: false,
    researchTitle: "Enhancing the interfacial characteristics of geo-materials",
    profileLink: "",
    email: "ce20s009@smail.iitm.ac.in",
    keywords: ["Natural inspirations", "Patterns", "Pre-stressing"],
    googleSchLink:
      "https://scholar.google.com/citations?user=zW5E5J4AAAAJ&hl=en",
    researchGateLink: "https://www.researchgate.net/profile/Nitish_Kumar148",
    linkedinLink: "",
  },
  {
    name: "Balaji Sai Lumar Bandaru",
    image: "BalajiSaiKumarBandaru.jpeg",
    degree: "Ph.D.",
    year: "2021 - Present",
    isPrimaryGuidePresent: true,
    guideName: "Prof. R. G. Robinson",
    researchTitle: "Mechanical behaviour of cement-treated clay",
    profileLink: "",
    email: "ce21d009@smail.iitm.ac.in",
    keywords: ["Transitional response", "Structured clay models"],
    googleSchLink: "",
    researchGateLink: "https://www.researchgate.net/profile/Balaji-Bandaru",
    linkedinLink:
      "https://www.linkedin.com/in/balaji-sai-kumar-bandaru-048786145/?originalSubdomain=in",
  },
  {
    name: "Mahima S Rao",
    image: "Mahima.JPG",
    degree: "Ph.D.",
    year: "2022 - Present",
    isPrimaryGuidePresent: false,
    researchTitle: "Methane extraction by carbon dioxide sequestration",
    profileLink: "https://sites.google.com/view/mahimasrao/home",
    email: "ce22d009@smail.iitm.ac.in | 5mahimasrao5@gmail.com",
    keywords: ["Gas hydrates", "Geomechanics", "Characterisation"],
    googleSchLink:
      "https://scholar.google.com/citations?user=U9g7qmEAAAAJ&hl=en&oi=ao",
    researchGateLink: "https://www.researchgate.net/profile/Mahima-Rao-2",
    linkedinLink: "https://www.linkedin.com/in/mahima-s-rao-526076141/",
  },

  {
    name: "Mujeeb Ul Rehman",
    image: "MujeebUlRehman.jpeg",
    degree: "Ph.D.",
    year: "2022 - Present",
    isPrimaryGuidePresent: true,
    guideName: "Prof. Subhadeep Banerjee",
    researchTitle:
      "Influence of intrinsic variables on the liquefaction resistance of granular soils",
    profileLink: "",
    email: "ce19d012@smail.iitm.ac.in",
    keywords: [
      "Morphology, Co-efficient of uniformity",
      "Relative density",
      "DEM",
    ],
    googleSchLink:
      "https://scholar.google.com/citations?user=Lt9fY5cAAAAJ&hl=en",
    researchGateLink: "https://www.researchgate.net/profile/Mujeeb-Rehman-14",
    linkedinLink:
      "https://www.linkedin.com/in/mujeeb-ul-rehman-8056451a5/?originalSubdomain=in",
  },
  {
    name: "Cathryn Sebastian",
    image: "Cathryn.jpeg",
    degree: "M. Tech. + Ph.D.",
    year: "2023 - Present",
    isPrimaryGuidePresent: false,
    guideName: "",
    researchTitle:
      "Development of hydro-mechanical solver to capture fluid incuded instabilities",
    profileLink: "",
    email: "ce23d200@smail.iitm.ac.in",
    keywords: ["Peridynamics", "Constitutive models", "Coupling"],
    googleSchLink:
      "https://scholar.google.com/citations?user=0D75aQQAAAAJ&hl=en&oi=ao",
    researchGateLink:
      "https://www.researchgate.net/profile/Cathryn-Sebastian-3",
    linkedinLink: "https://www.linkedin.com/in/cathryn-sebastian-40907331a/",
  },
  {
    name: "P Gayathri Romeo",
    image: "",
    degree: "Ph.D.",
    year: "2025 - Present",
    isPrimaryGuidePresent: true,
    guideName: "Prof. Subhadeep Banerjee",
    researchTitle: "Liquefaction mitigation using rubber-sand mixtures",
    profileLink: "",
    email: "ce19d012@smail.iitm.ac.in",
    keywords: ["EFG-DEM", "Force chains", "Image analysis"],
    googleSchLink: "",
    researchGateLink: "",
    linkedinLink: "",
  },
];

export default function ActiveMembers() {
  return (
    <>
      {activeStudents.map((student, i) => (
        <StudentCard key={i} student={student} />
      ))}
    </>
  );
}
