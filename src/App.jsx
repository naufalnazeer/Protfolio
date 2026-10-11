import Background from "./components/Background";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import AiWorkflow from "./components/AiWorkflow";
import TechStack from "./components/TechStack";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import GithubStats from "./components/GithubStats";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Background />
      <Navbar />
      <main>
        <Hero />
        <About />
        <AiWorkflow />
        <TechStack />
        <Experience />
        <Projects />
        <GithubStats />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
