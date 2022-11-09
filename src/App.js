import './App.css';
import Navbar from './components/Navbar';
import Notes from './components/Notes';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Notes /> 
      <Footer />    
    </div>
  );
}

export default App;
