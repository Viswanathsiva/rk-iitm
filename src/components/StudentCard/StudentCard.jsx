import "./StudentCard.scss";
import { FaEnvelope, FaGraduationCap, FaUserTie } from "react-icons/fa";
import { SiGooglescholar, SiResearchgate } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";
import { FaLink } from "react-icons/fa";

const StudentCard = ({ student }) => {
  const {
    name,
    image,
    degree,
    year,
    researchTitle,
    profileLink,
    email,
    keywords,
    affiliation,
    googleSchLink,
    researchGateLink,
    linkedinLink,
    isPrimaryGuidePresent,
    guideName,
  } = student;

  // ✅ Normalize keywords (string → array)
  const keywordList = Array.isArray(keywords)
    ? keywords
    : keywords
      ? keywords.split(",").map((k) => k.trim())
      : [];

  return (
    <div className="container py-4">
      <div className="student-card ">
        {/* Image */}
        <div className="student-image flex align-items-center">
          <img src={`/assets/images/students/${image}`} alt={name} />
        </div>

        {/* Content */}
        <div className="student-content">
          <h4 className="student-name flex align-items-center">
            {name}
            {profileLink && (
              <a href={profileLink} target="_blank" rel="noreferrer">
                <FaLink />
              </a>
            )}
          </h4>

          <div className="student-meta">
            <FaGraduationCap />
            <span>{degree}</span>
            <span className="year-badge bg-success">{year}</span>
            {isPrimaryGuidePresent && guideName && (
              <span className="guide flex gap-2 align-items-center ">
                <b>Primary Guide: </b> <FaUserTie /> {guideName}
              </span>
            )}
          </div>

          {researchTitle && (
            <p className="research">
              <strong>Research:</strong> {researchTitle}
            </p>
          )}

          {email && (
            <p className="email">
              <FaEnvelope /> {email}
            </p>
          )}

          {keywordList.length > 0 && (
            <div className="keywords">
              {keywordList.map((key, i) => (
                <span key={i} className="keyword">
                  {key}
                </span>
              ))}
            </div>
          )}

          {affiliation && (
            <p className="affiliation">
              <span className="font-semibold font-italic">
                Last Known Affiliation:
              </span>{" "}
              {affiliation}
            </p>
          )}

          {/* Social links */}
          <div className="socials">
            {googleSchLink && (
              <a href={googleSchLink} target="_blank" rel="noreferrer">
                <SiGooglescholar />
              </a>
            )}
            {researchGateLink && (
              <a href={researchGateLink} target="_blank" rel="noreferrer">
                <SiResearchgate />
              </a>
            )}
            {linkedinLink && (
              <a href={linkedinLink} target="_blank" rel="noreferrer">
                <FaLinkedin />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentCard;
