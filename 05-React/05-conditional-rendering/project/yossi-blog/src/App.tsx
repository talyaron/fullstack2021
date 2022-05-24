import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound404 from './NotFound404';
import Spinners from './Spinners';
import Gallery from './Gallery';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/create' element={<Create />}></Route>
            <Route path='/blogs/:id' element={<BlogDetails />}></Route>
            <Route path='/gallery' element={<Gallery />}></Route>
            <Route path='*' element={<NotFound404 />}></Route>
          </Routes>
        </div>
      </div >
    </Router>
  );
}

export default App;
