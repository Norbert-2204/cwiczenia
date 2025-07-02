import PostDetails from "./PostDetail";

const Post = ({ ...book }) => {
  return (
    <div>
      <h1>Post</h1>
      <PostDetails {...book} />
    </div>
  );
};
export default Post;
