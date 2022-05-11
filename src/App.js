import Footer from 'components/Footer';
import Header from 'components/Header';
import Home from 'pages/Home';
import { Outlet, Route, Routes } from 'react-router-dom';
import './App.scss';

function App() {
  return (
    <div className="container">
      <Header />
      <Outlet />
      <Routes>
        <Route index element={<Home />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
