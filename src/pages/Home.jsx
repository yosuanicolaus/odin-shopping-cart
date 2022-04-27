import { useNavigate } from "react-router-dom";

const suitUrl =
  "https://images.unsplash.com/photo-1523974959700-e7957240c232?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80";

function Home() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/shop");
  };

  return (
    <div className="d-flex">
      <div className="flex-grow-1 d-flex justify-content-center align-items-center flex-column">
        <div className="display-1">Elegant</div>
        <div className="lead mb-3">Upgrade Life, Live Expensively</div>
        <button className="btn btn-primary" onClick={handleClick}>
          Shop Now
        </button>
      </div>
      <img src={suitUrl} alt="elegant suit" />
    </div>
  );
}

export default Home;
