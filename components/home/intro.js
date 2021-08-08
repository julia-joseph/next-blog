import classes from "../../styles/intro.module.css";
import ArrowRightIcon from "../../icons/arrow-right-icon";
import ArrowLeftIcon from "../../icons/arrow-left-icon";

const Intro = (props) => {
  return (
    <div className={classes.container}>
      <div className={classes.profileContainer}>
        <img
          src="images/607866.png"
          alt="profile picture"
          className={classes.profilePicture}
        ></img>
      </div>
      <h1>
        <ArrowRightIcon className={classes.arrows} /> It's <span>J</span>ay{" "}
        <span>J</span>ay <ArrowLeftIcon className={classes.arrows} />
      </h1>
      <div className={classes.intro}>
        Welcome to my blog! I love to talk about all things creative. Let's go!
      </div>
    </div>
  );
};

export default Intro;
