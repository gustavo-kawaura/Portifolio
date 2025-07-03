import Hero from './sections/Hero/Hero';
import NavBar from '../../components/NavBar/NavBar'; 
import About from './sections/About/About';
import Projects from './sections/Projects/Projects';
function Home() {
  return (
    <div className="App">
      <NavBar/>
        <Hero />
        <About />
        <Projects />
    </div>
  );
}

export default Home;