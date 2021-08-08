import PostList from "./posts/post-list";

const FeaturedPosts = (props) => {
  const posts = [
    {
      id: 0,
      title: "Play time",
      date: "10th May 2021",
      description: "Play it out with the pals",
      image: "images/607866.png",
    },
    {
      id: 1,
      title: "Watch and learn",
      date: "21st Aug 2021",
      description: "Play it out with the pals",
      image: "images/607866.png",
    },
    {
      id: 2,
      title: "Round and roses",
      date: "5th Sept 2021",
      description: "Play it out with the pals",
      image: "images/607866.png",
    },
    {
      id: 3,
      title: "Catch the dragonfly",
      date: "9th Sept 2021",
      description: "Play it out with the pals",
      image: "images/607866.png",
    },
  ];

  return (
    <>
      <PostList posts={posts} />
    </>
  );
};

export default FeaturedPosts;
