import Hero from './sections/Hero/Hero';
import NavBar from '../../components/NavBar/NavBar';
import About from './sections/About/About';
import Projects from './sections/Projects/Projects';
import Creditos from '../../components/Creditos/Creditos';
function Home() {
  return (
    <div className="App">
      <NavBar/>
        <Hero/>
        <About/>
        <Projects/>
        <Creditos/>
    </div>
  );
}

export default Home;