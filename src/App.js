import './App.css';
import Header from './components/Header/Header'
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Testimonials from './pages/Testimonials/Testimonials';
import LittleLemon from './pages/LittleLemon/LittleLemon'
import Menu from './pages/Menu/Menu';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Menu />
      <Testimonials />
      <LittleLemon />
      <Footer />
    </div>

  );
}

export default App;
