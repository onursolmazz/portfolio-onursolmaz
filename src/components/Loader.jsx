import { _ } from "../languages/i18n";

function Loader() {
  return (
    <div className="loader">

      <div className="loader_content">

        <div className="loader_spinner">
          <span></span>
        </div>

        <p>
          {_("loading")}
        </p>

      </div>

    </div>
  );
}

export default Loader;