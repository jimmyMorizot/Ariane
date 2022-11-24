// Imports
import { Route, Routes, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Header from '../Header';
import Footer from '../Footer';
import Error from '../Error';
import About from '../About';
import Home from '../Home';
import Authentication from '../Authentication';
import Inscription from '../Inscription';
import NewPost from '../NewPost';
import Posts from '../Posts';
import PostPage from '../PostPage';
import Profile from '../Profile';
import MyPosts from '../MyPosts';
import PostView from '../PostView';
import Associations from '../Associations';
import AssociationPage from '../AssociationPage';
import Team from '../Team';
import ToTop from '../ToTop';
import './app.scss';
import {
  closeBurger,
  closeInscriptionModal,
  closePostModal,
  getCategoriesFromApi,
  getPostsFromApi,
  getSuppliesFromApi,
} from '../../actions';

// == Composant
function App() {
  const dispatch = useDispatch();
  const location = useLocation();
  useEffect(() => {
    dispatch(getPostsFromApi());
    dispatch(getCategoriesFromApi());
    dispatch(getSuppliesFromApi());
  });
  useEffect(() => {
    dispatch(closeBurger());
    dispatch(closeInscriptionModal());
    dispatch(closePostModal());
  });
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [location]);
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/authentication"
          element={<Authentication />}
        />
        <Route
          path="/registration"
          element={<Inscription />}
        />
        <Route
          path="/about/:slug"
          element={<About />}
        />
        <Route
          path="/qui-sommes-nous"
          element={<Team />}
        />
        <Route
          path="/posts"
          element={<Posts />}
        />
        <Route
          path="/posts/:id/:slug"
          element={<PostPage />}
        />
        <Route
          path="/profile/:id"
          element={<Profile />}
        />
        <Route
          path="/my-posts/:id"
          element={<MyPosts />}
        />
        <Route
          path="/postview/:id"
          element={<PostView />}
        />
        <Route
          path="/newpost"
          element={<NewPost />}
        />
        <Route
          path="*"
          element={<Error />}
        />
        <Route
          path="/associations"
          element={<Associations />}
        />
        <Route
          path="/associations/:slug"
          element={<AssociationPage />}
        />
      </Routes>
      <Footer />
      <ToTop />
    </div>
  );
}

// == Export
export default App;
