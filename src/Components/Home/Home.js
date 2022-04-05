import "./Home.css";

const Home = ({ displayLatestPost, latestPost }) => {


  return (
    <div className="home">
      <button onClick={displayLatestPost}>Display Latest Post Button</button>

      <div>
        <div className="singleLatestPost">
          <h6>{latestPost ? "Rating: " + latestPost.stars : ' '}
          <div className="stars">
          <div id="star-1">⭐</div>
          <div id="star-2">⭐</div>
          <div id="star-3">⭐</div>
          <div id="star-4">⭐</div>
          <div id="star-5">⭐</div>
          </div>
          </h6>
          <h6>{latestPost ? "Content " + latestPost.content : ' '}</h6>
          <h6>{latestPost ? "Author " + latestPost.author : ' '}</h6>
        </div>
      </div>
    </div>
  );
};

export default Home;
