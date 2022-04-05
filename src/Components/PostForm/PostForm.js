const PostForm = ({ handleChange, handlePost }) => {


  return (
    <div className="post-form">
      <h2>Post!</h2>
      <form onSubmit={handlePost}>
        <label>
          Stars:
          <input type="stars" name="stars" onChange={handleChange} />
        </label>
        <br />
        <label>
          Content:
          <input type="content" name="content" onChange={handleChange} />
        </label>
        <br />
        <label>
          Author Number:
          <input type="author" name="author" onChange={handleChange} />
        </label>
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default PostForm;
