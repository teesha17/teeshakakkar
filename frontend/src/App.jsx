import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './screens/home/Home.jsx';
import About from './components/about/About.jsx';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
    </Router>
  );
}

export default App;
