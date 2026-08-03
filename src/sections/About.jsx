import aboutData from "../data/aboutData";
import { _ } from "../languages/i18n";

function About() {
  return (
    <section id="about" className="about">
      <div className="container about_container">
        <div className="about_left">
          <span className="section_badge">{_(aboutData.badge)}</span>

          <h2>{_(aboutData.title)}</h2>

          {aboutData.description.map((text, index) => (
            <p key={index}>{_(text)}</p>
          ))}

          <h3 className="about_quote">{_(aboutData.quote)}</h3>
        </div>

        <div className="about_right">
          {aboutData.cards.map((card) => (
            <div className="about_card" key={card.id}>
              <h3>{_(card.title)}</h3>

              <ul>
                {card.items.map((item) => (
                  <li key={item}>{_(item)}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
