import aboutData from "../data/aboutData";
import { _ } from "../languages/i18n";

function About() {
  return (
    <section className="about" id="about">
      <div className="container about_container">
        <div className="about_left">
          <div className="section_badge">
            <span className="section_badge_dot" />
            {_(aboutData.badge)}
          </div>

          <h2>{_(aboutData.title)}</h2>

          <div className="about_description">
            {aboutData.description.map((text, index) => (
              <p key={index}>{_(text)}</p>
            ))}
          </div>

          <div className="about_signature">
            <span className="about_signature_line" />

            <div>
              <strong>Onur Solmaz</strong>
              <span>Software Engineer</span>
            </div>
          </div>
        </div>

        <div className="about_right">
          {aboutData.cards.map((card, index) => (
            <article className="about_card" key={card.id}>
              <div className="about_card_top">
                <span className="about_card_number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="about_card_dot" />
              </div>

              <h3>{_(card.title)}</h3>

              <ul>
                {card.items.map((item) => (
                  <li key={item}>
                    <span className="about_item_marker" />
                    <span>{_(item)}</span>
                  </li>
                ))}
              </ul>

              <div className="about_card_glow" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;