import Image from "next/image";

import classes from "../../styles/post.module.css";

const Post = (props) => {
  const { post } = props;

  const cardClass = props.featured
    ? classes.featured__posts__card
    : classes.all__posts__card;

  const containerClass = `card ${cardClass}`;

  return (
    <div className={containerClass}>
      <div className={classes.imageContainer}>
        <Image
          src={"/" + post.image}
          alt={post.title}
          width={300}
          height={300}
        />
      </div>
      <div className={classes.body}>
        <h3>{post.title}</h3>
        <small>{post.date}</small>
        <div>{post.description}</div>
      </div>
    </div>
  );
};

export default Post;
