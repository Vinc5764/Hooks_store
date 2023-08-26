import './App.css'
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import {Navbar} from './components';
import {Cart,Shop} from './pages';

function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Shop/>}/>
          <Route path="/cart" element={<Cart />}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App