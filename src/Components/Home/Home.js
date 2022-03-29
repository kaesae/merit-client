import Medal from "../../Icons/goldmedal.png";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="home-container">
        <head>
          {" "}
          <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/2.0.2/anime.min.js"></script>
        </head>
        <h3 className="merit-title">Merit</h3>
        <img className="medal" src={Medal} />

      </div>
    </div>
  );
};

export default Home;
