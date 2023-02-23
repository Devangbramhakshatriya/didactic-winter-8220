import './App.css';
import Product from './Pages/Product';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Pages/Home';


function App() {
  return (
      <div className="App">
        <Navbar/>
        <Home/>
        <Product/>
        
        
      </div>
  );
}

export default App;
