import "./Home.css";
const Home = ({ displayLatestPost, latestPost }) => {


  return (
    <div className="home">
      <button onClick={displayLatestPost}>Display Latest Post Button</button>

      <div>
        <div className="singleLatestPost">
          <div className="profile-image"></div>
          <h6 className="rating-header">{latestPost ? "Rating: " + latestPost.stars : ' '}
          <div className="stars">
            <div id="star-1">⭐</div>
            <div id="star-2">⭐</div>
            <div id="star-3">⭐</div>
            <div id="star-4">⭐</div>
            <div id="star-5">⭐</div>
          </div>
          </h6>
          <h6 className="author-header">{latestPost ? "Author: " + latestPost.author : ' '}</h6>
          <h6 className="content-header">{latestPost ? latestPost.content : ' '}</h6>
        </div>
      </div>
    </div>
  );
};

export default Home;
