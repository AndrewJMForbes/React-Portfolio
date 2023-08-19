
import './App.css';
import Header from './components/Header';
import Img from './components/Img';
import About from './components/About';
import Nav from './components/Nav'

function App() {
  return (
    <div className="App">
           <Header />
           <Nav /> 
           <Img />
           <About />
    </div>
  );
}

export default App;
