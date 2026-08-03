import { useState } from "react";

const CONTACT_EMAIL = "contact@flowbytestudio.net"; // kendi mailinle değiştir

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = encodeURIComponent(`Portfolio mesajı — ${formData.name}`);
    const body = encodeURIComponent(
      `Gönderen: ${formData.name} (${formData.email})\n\n${formData.message}`,
    );

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="contact">
      <div className="container contact_container">
        <h2>Contact Me</h2>

        <p className="contact_description">
          Contact me directly via email or through this form.
        </p>
        
        <form className="contact_form" onSubmit={handleSubmit}>
          <div className="contact_row">
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <textarea
            name="message"
            placeholder="Your message..."
            rows={7}
            value={formData.message}
            onChange={handleChange}
            required
          />

          <button type="submit" className="contact_submit">
            Send message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
