import Header from './components/Header/Header';
import About from './components/About/About';
import Navbar from './components/Navbar/Navbar';
import Projects from './components/Projects/Projects';
import Waves from './components/waves/waves';
import Footer from './components/Footer/Footer';
import './App.css';
function App() {
  return (
    <div className='App' id='top'>
      <Navbar />
      <Header id='header' />
      <Waves />
      <About />
      <Projects id='projects' />
      <Footer />
    </div>
  );
}

export default App;
