import { Link } from "react-router-dom";
import { _ } from "../languages/i18n";

function Privacy() {
  return (
    <main className="privacy container">
      <Link to="/">{_("back_to_home")}</Link>

      <h1>{_("privacy_title")}</h1>

      <p>{_("privacy_intro")}</p>

      <h2>{_("privacy_contact_title")}</h2>
      <p>{_("privacy_contact_text")}</p>

      <h2>{_("privacy_security_title")}</h2>
      <p>{_("privacy_security_text")}</p>

      <h2>{_("privacy_analytics_title")}</h2>
      <p>{_("privacy_analytics_text")}</p>

      <h2>{_("privacy_cookies_title")}</h2>
      <p>{_("privacy_cookies_text")}</p>

      <h2>{_("privacy_links_title")}</h2>
      <p>{_("privacy_links_text")}</p>

      <h2>{_("privacy_contact_me_title")}</h2>
      <p>{_("privacy_contact_me_text")}</p>
    </main>
  );
}

export default Privacy;