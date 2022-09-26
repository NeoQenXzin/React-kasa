import './App.css';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Background from './components/Body/Background';
import Gallery from './components/Body/Gallery';

function App() {
  return (
    <div className="App">
      <Header />
      <Background />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
