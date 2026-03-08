import { useEffect } from "react";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaClock,
} from "react-icons/fa";
import "./Contact.scss";

const ContactCard = ({ icon, title, children }) => (
  <div className="contact-item d-flex align-items-start">
    <div className="icon">{icon}</div>
    <div className="content ms-3">
      <h6>{title}</h6>
      <p>{children}</p>
    </div>
  </div>
);

export default function Contact() {
  useEffect(() => {
    document.title = "RameshKK | Contact";
  }, []);

  return (
    <section className="contact-page py-5">
      <div className="container">
        {/* Office */}
        <h2 className="section-title">Office and Geomechanics Laboratory</h2>

        <div className="row contact-box">
          <div className="col-md-6 p-4">
            <ContactCard icon={<FaMapMarkerAlt />} title="Office Address">
              <strong className="text-danger">Room No: 121</strong>, Building
              Science Block,
              <br />
              Department of Civil Engineering,
              <br />
              IIT Madras, Chennai – 600036, India
            </ContactCard>
            <ContactCard icon={<FaMapMarkerAlt />} title="Lab Address">
              <strong className="text-danger">Room No: 137</strong>, Building
              Science Block,
              <br />
              Department of Civil Engineering,
              <br />
              IIT Madras, Chennai – 600036, India
            </ContactCard>
            <ContactCard icon={<FaEnvelope />} title="Email">
              <a href="mailto:rameshkk@civil.iitm.ac.in">
                rameshkk@civil.iitm.ac.in
              </a>
            </ContactCard>

            <ContactCard icon={<FaPhoneAlt />} title="Phone">
              <a href="tel:04422574259">044-22574259</a>
            </ContactCard>

            <ContactCard icon={<FaClock />} title="Working Hours">
              Mon – Sat : 09:00 AM – 09:00 PM
            </ContactCard>
          </div>

          <div className="col-md-6 p-3 flex align-items-center">
            <iframe
              title="Building Science Block Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.718413468047!2d80.22714181501563!3d12.989853590843968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52677e2cac5df1%3A0x5839977a152827b1!2sBuilding%20Science%20Block%20(BSB)!5e0!3m2!1sen!2sin!4v1609527777102!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>

        {/* Lab */}
        {/* <h2 className="section-title mt-5">Geo-Mechanics Laboratory</h2>

        <div className="row contact-box">
          <div className="col-md-6 p-4">
            <ContactCard icon={<FaMapMarkerAlt />} title="Lab Address">
              <strong className="text-danger">Room No: 137</strong>, Building
              Science Block,
              <br />
              Department of Civil Engineering,
              <br />
              IIT Madras, Chennai – 600036, India
            </ContactCard>

            <ContactCard icon={<FaEnvelope />} title="Email">
              <a href="mailto:rameshkk@civil.iitm.ac.in">
                rameshkk@civil.iitm.ac.in
              </a>
            </ContactCard>

            <ContactCard icon={<FaPhoneAlt />} title="Phone">
              <a href="tel:+914422574259">+91 44 2257 4259</a>
            </ContactCard>

            <ContactCard icon={<FaClock />} title="Working Hours">
              Mon – Sat : 09:00 AM – 09:00 PM
            </ContactCard>
          </div>

          <div className="col-md-6 p-3 flex align-items-center">
            <iframe
              title="Building Science Block Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.718413468047!2d80.22714181501563!3d12.989853590843968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52677e2cac5df1%3A0x5839977a152827b1!2sBuilding%20Science%20Block%20(BSB)!5e0!3m2!1sen!2sin!4v1609527777102!5m2!1sen!2sin"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div> */}
      </div>
    </section>
  );
}
