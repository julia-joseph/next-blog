import PostList from "../../components/home/posts/post-list";
import { DUMMY_POSTS } from "../../dummy-data";

const PostsPage = (props) => {
  return (
    <>
      <PostList posts={DUMMY_POSTS} />
    </>
  );
};

export default PostsPage;
