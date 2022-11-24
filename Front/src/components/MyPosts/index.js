// == Imports
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { getUserPostsFromApi } from '../../actions';
import MyPost from '../MyPost';
import './myposts.scss';

// == Composant
function MyPosts() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserPostsFromApi());
  }, []);
  const { logged } = useSelector((state) => state.user);
  const userPosts = useSelector((state) => state.userPosts);
  if (!logged) {
    return <Navigate to="/authentication" replace />;
  }
  return (
    <section className="myposts">
      <Link
        to="/newpost"
        className="myposts-new"
      >
        Créer une nouvelle annonce
      </Link>
      {userPosts.map((userPost) => (
        <MyPost
          key={userPost.id}
          {...userPost}
        />
      ))}
    </section>
  );
}

// == Export
export default MyPosts;
