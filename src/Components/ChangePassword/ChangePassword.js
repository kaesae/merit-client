const ChangePassword = (handleChangePassword, handleChange) => {
  return (
    <div className="change-password">
      <h2>Change Password</h2>
      <form onSubmit={handleChangePassword}>
        <label>
          Old Password:
          <input type="password" name="password" onChange={handleChange} />
        </label>
        <label>
          New Password:
          <input type="password" name="password" onChange={handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default ChangePassword;
