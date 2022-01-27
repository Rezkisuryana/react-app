import { Route, Routes, Link } from 'react-router-dom';
import About from './About';
import AboutTeam from './AboutTeam';
import './App.css';
import Blog from './Blog';
import BlogDetail from './BlogDetail';
import Dashboard from './Dashboard';
import ExampleHooks from './ExampleHooks';
import Home from './Home';
import Login from './Login';
import MyComponent from './MyComponent';
import Notfound from './Notfound';

function App() {
  return (
    <div className="App">
      {/* navigasi */}
      <nav>
        <Link to="/">HOme</Link>
        <Link to="about">About</Link>
        <Link to="blog">Blog</Link>
        <Link to="login">Login</Link>
      </nav>
      {/* bikin peta route*/}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />}>
          <Route path="about/team" element={<AboutTeam />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="mycomponent" element={<MyComponent/>} />
        <Route path="examplehooks" element={<ExampleHooks />} />
        <Route path="blog" element={<Blog />} />
        <Route path="blog/:slug" element={<BlogDetail />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </div>
  );
}

export default App;
