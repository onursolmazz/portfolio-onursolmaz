import { useState } from "react";
import { _ } from "../languages/i18n";

const CONTACT_EMAIL = "contact@flowbytestudio.net";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = encodeURIComponent(
      `${_("portfolio_message")} — ${formData.name}`,
    );

    const body = encodeURIComponent(
      `${_("sender")}: ${formData.name} (${formData.email})\n\n${formData.message}`,
    );

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="contact">
      <div className="container contact_container">
        <h2>{_("contact_title")}</h2>

        <p className="contact_description">
          {_("contact_description")}
        </p>

        <form className="contact_form" onSubmit={handleSubmit}>
          <div className="contact_row">
            <input
              type="text"
              name="name"
              placeholder={_("your_name")}
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder={_("your_email")}
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <textarea
            name="message"
            placeholder={_("your_message")}
            rows={7}
            value={formData.message}
            onChange={handleChange}
            required
          />

          <button type="submit" className="contact_submit">
            {_("send_message")}
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;