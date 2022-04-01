import "./Home.css";
import Medal from "../../Icons/goldmedal.png";


const Home = ({ displayLatestPost, latestPost }) => {



  return (
    <div className="home">
      <button onClick={displayLatestPost}>Display Latest Post Button</button>
      <div>
        <div className="singleLatestPost">
          <h6>{latestPost ? "Title: " + latestPost.title : ' '}</h6>
          <h6>{latestPost ? "Content " + latestPost.content : ' '}</h6>
          <h6>{latestPost ? "Author " + latestPost.author : ' '}</h6>
        </div>
      </div>
    </div>
  );
};

export default Home;
