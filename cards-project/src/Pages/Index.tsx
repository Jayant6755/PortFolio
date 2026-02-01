import Navigation from "../Main Page/navbar";
import Hero from "../Main Page/home";
import About from "../Main Page/aboutme";
import Projects from "../Main Page/projects";
import Skills from "../Main Page/resume";
import Contact from "../Main Page/contact";


const Index = () => {
  return (
    <div className="min-h-screen bg-black ">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
