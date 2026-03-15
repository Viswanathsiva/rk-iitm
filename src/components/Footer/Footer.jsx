import { FiYoutube, FiTwitter, FiLinkedin } from "react-icons/fi";
import { SiGoogleanalytics } from "react-icons/si";
import { Link } from "react-router-dom";
import "./Footer.scss";

export default function Footer() {
  return (
    <footer className="rk-footer">
      <div className="footer-container">
        <div className="footer-left">
          <p className="disclaimer">DISCLAIMER</p>
          <p className="copyright">
            © {new Date().getFullYear()} Ramesh Kannan Kandasami <br />
            All rights reserved
          </p>
        </div>

        <div className="footer-right">
          <a
            href="https://www.youtube.com/channel/UCyrLKDjrxwsYSVlRLfNGi-w"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiYoutube />
          </a>

          <a
            href="https://twitter.com/rameshkannank"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiTwitter />
          </a>

          <a
            href="https://www.linkedin.com/in/ramesh-kannan-k-2a914120"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiLinkedin />
          </a>

          {/* Metrics Page */}
          <Link to="/metrics">
            <SiGoogleanalytics />
          </Link>
        </div>
      </div>
    </footer>
  );
}
