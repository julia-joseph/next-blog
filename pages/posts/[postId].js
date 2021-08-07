import { useRouter } from "next/dist/client/router";

const PostsPage = (props) => {
  const router = useRouter();
  const id = router.query.postId;

  return (
    <>
      <h1>Post Page</h1>
      <hr></hr>
      <p>Details for post: {id}</p>
    </>
  );
};

export default PostsPage;
