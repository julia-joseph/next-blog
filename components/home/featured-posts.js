import { DUMMY_POSTS } from "../../dummy-data";
import PostList from "../posts/post-list";

const FeaturedPosts = (props) => {
  return (
    <>
      <PostList posts={DUMMY_POSTS} featured={true} />
    </>
  );
};

export default FeaturedPosts;
