import classes from "../styles/home.module.css";

const HomePage = (props) => {
  return (
    <div className={classes.profileContainer}>
      <img
        src="images/607866.png"
        alt="profile picture"
        className={classes.profilePicture}
      ></img>
    </div>
  );
};

export default HomePage;
