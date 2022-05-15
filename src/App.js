import { BrowserRouter, Routes, Route } from 'react-router-dom';

//pages & components
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home'
import TopRated from './Pages/TopRated/TopRated'
import Search from './Pages/Search/Search'
import Popular from './Pages/Popular/Popular'
import Movies from './Pages/Movies/Movies'

// styles
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/toprated" element={<TopRated />} />
          <Route path="/popular" element={<Popular />} />
          <Route path="/search" element={<Search />} />
          <Route path="/movie/:id" element={<Movies />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
