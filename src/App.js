import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NotFound from './components/NotFound';
import MainTop from './components/MainTop';
import Menu from './components/Menu';
import Stack from './components/Stack';
import Projects from './components/Projects';
import Work from './components/Work';
import Feedback from './components/Feedback';

function App() {
  return (
    <Router>   
      <div className="App">
        <Navbar />
        <MainTop/>
        <Menu/>
        <hr/>
        <div className="content">
          <Routes>
              <Route path="/" element={<Work />}></Route>
              <Route path="/projects" element={<Projects />}></Route>
              <Route path="/stack" element={<Stack />}></Route>
              <Route path="/work" element={<Work />}></Route>
              <Route path="/feedback" element={<Feedback />}></Route>
              <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </div>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;