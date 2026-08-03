import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown } from "react-icons/fa";

import { HiOutlineDownload } from "react-icons/hi";
import { TbBriefcase2 } from "react-icons/tb";
import { TypeAnimation } from "react-type-animation";

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero_container container">
        <div className="hero_content">
          <span className="hero_badge">SOFTWARE ENGINEER</span>

          <h1>
            Merhaba, ben
            <br />
            <span>Onur Solmaz.</span>
          </h1>

          <TypeAnimation
            sequence={[
              "React Developer",
              2000,
              "Laravel Developer",
              2000,
              "Backend Developer",
              2000,
              "Computer Engineer",
              2000,
            ]}
            wrapper="h2"
            repeat={Infinity}
          />

          <p>
            React, Laravel ve modern web teknolojileri ile ölçeklenebilir,
            performanslı ve kullanıcı odaklı web uygulamaları geliştiriyorum.
          </p>

          <div className="hero_buttons">
            <a href="#projects" className="btn btn-primary">
              <TbBriefcase2 />
              Çalışmalarımı İncele
            </a>

            <a href="/cv.pdf" className="btn btn-secondary">
              <HiOutlineDownload />
              CV İndir
            </a>
          </div>

          <div className="hero_socials">
            <a href="">
              <FaGithub />
            </a>

            <a href="">
              <FaLinkedin />
            </a>

            <a href="mailto:mail@mail.com">
              <FaEnvelope />
            </a>
          </div>
        </div>

        <div className="hero_preview">
          <span className="preview_text">🚀 Son Çalışmalarım</span>

          <div className="preview_card">
            <div className="preview_icons">
              <div className="icon">🎟️</div>
              <div className="icon">📚</div>
              <div className="icon">🛒</div>
              <div className="icon">📊</div>
              <div className="icon">💬</div>
              <div className="icon">🤖</div>
            </div>

            <h3>Öne Çıkan Projeler</h3>

            <ul className="preview_list">
              <li>🎟️ Vidipass Event Platform</li>
              <li>📚 Library Management System</li>
              <li>🛒 E-Commerce Web App</li>
              <li>📊 Admin Dashboard</li>
              <li>🤖 AI Assistant</li>
              <li>💬 Real Time Chat App</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="scroll_down">
        <FaArrowDown />
      </div>
    </section>
  );
}

export default Hero;
