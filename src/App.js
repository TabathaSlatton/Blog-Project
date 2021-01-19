import './App.css';
import Home from './Home';
import Navbar from './Navbar';

// root component
function App() {
  // we can write valid javaScript before the return

  return (
    <div className="App">
      <Navbar/> 
     <div className="content">
      <Home/>     
     </div>
    </div>
  );
}

export default App;
