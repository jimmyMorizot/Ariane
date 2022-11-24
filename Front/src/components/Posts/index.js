// == Imports
import { useSelector } from 'react-redux';
import Post from '../Post';

import './posts.scss';

// == Composant
function Posts() {
  const posts = useSelector((state) => state.posts);
  return (
    <section className="posts">
      {posts.map((post) => (
        <Post
          key={post.id}
          {...post}
          association={post.user.name}
          supply={post.supply.name}
        />
      ))}
    </section>
  );
}

// == Export
export default Posts;
