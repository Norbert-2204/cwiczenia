const PostDetails = ({ title, author, published, comments }) => {
  return (
    <div>
      <h2>Tytuł: {title}</h2>
      <p>Autor: {author}</p>
      <p>Data publikacji: {published}</p>
      <p>Komentarze: {comments}</p>
    </div>
  );
};
export default PostDetails;
