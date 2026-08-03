import aboutData from "../data/aboutData";

function About() {
  return (
    <section id="about" className="about">
      <div className="container about_container">

        <div className="about_left">

          <span className="section_badge">
            {aboutData.badge}
          </span>

          <h2>
            {aboutData.title}
          </h2>

          {aboutData.description.map((text, index) => (
            <p key={index}>{text}</p>
          ))}

          <h3 className="about_quote">
            {aboutData.quote}
          </h3>

        </div>

        <div className="about_right">

          {aboutData.cards.map((card) => (
            <div className="about_card" key={card.id}>

              <h3>{card.title}</h3>

              <ul>

                {card.items.map((item) => (
                  <li key={item}>
                    {item}
                  </li>
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