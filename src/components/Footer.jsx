import { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { _ } from "../languages/i18n";
import { getLanguage, setLanguage } from "../languages/i18n";
import { Link } from "react-router-dom";

function Footer() {
  const [language, setCurrentLanguage] = useState(getLanguage());

  const handleLanguageChange = async (e) => {
    const lang = e.target.value;

    await setLanguage(lang);
    setCurrentLanguage(lang);
  };

  return (
    <footer className="footer">
      <div className="container footer_container">
        <h3>Onur Solmaz</h3>

        <p>{_("footer_description")}</p>

        <div className="footer_socials">
          <a
            href="https://github.com/onursolmaz"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/in/..."
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>

          <a href="mailto:onur@example.com">
            <FaEnvelope />
          </a>
        </div>

        <div className="footer_language">
          <select value={language} onChange={handleLanguageChange}>
            <option value="en">🇺🇸 English</option>
            <option value="tr">🇹🇷 Türkçe</option>
          </select>
        </div>

        <span className="footer_copy">
          © {new Date().getFullYear()} Onur Solmaz.{" "}
          <Link to="/privacy" className="footer_link">
            {_("privacy_policy")}
          </Link>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
