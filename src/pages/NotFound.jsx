import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();
  const backToHome = () => navigate("/");
  return (
    <div className="my-auto d-flex flex-column justify-content-center align-items-center">
      <div className="display-4">404</div>
      <div className="lead">
        Oops! We can't find the page you were looking for.
      </div>
      <div className="lead">
        Don't panic, simply click this button below and all your problem will go
        away.
      </div>
      <button className="btn btn-outline-primary mt-3" onClick={backToHome}>
        Back to Home
      </button>
    </div>
  );
}

export default NotFound;
