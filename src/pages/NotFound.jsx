import { Link } from "react-router-dom";
import { _ } from "../languages/i18n";

function NotFound() {
  return (
    <main className="not_found">
      <div className="not_found_content">
        <h1>404</h1>

        <h2>{_("not_found_title")}</h2>

        <p>{_("not_found_description")}</p>

        <div className="not_found_actions">
          <Link to="/" className="btn btn-primary">
            {_("back_to_home")}
          </Link>
        </div>
      </div>
    </main>
  );
}

export default NotFound;