import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        textAlign: "center",
      }}
    >
      <div>
        <h1>404</h1>

        <p>Page not found.</p>

        <Link to="/">← Back Home</Link>
      </div>
    </div>
  );
}

export default NotFound;