import './App.css';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Homepage from './pages/Homepage';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Homepage />
      <Footer />
    </div>
  );
}

export default App;
