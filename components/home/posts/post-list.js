import classes from "../../../styles/post-list.module.css";
import Post from "./post";

const PostList = (props) => {
  const { posts } = props;
  return (
    <div className={classes.container}>
      {posts.map((post) => (
        <Post key={post.id} post={post} featured={props.featured} />
      ))}
    </div>
  );
};

export default PostList;
