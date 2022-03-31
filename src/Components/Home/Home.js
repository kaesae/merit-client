import "./Home.css";

const Home = ({ displayLatestPost }) => {


  return (
    <div className="home">
      <button onClick={displayLatestPost}>Display Latest Post Button</button>
    </div>
  );
};

export default Home;
