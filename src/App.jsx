import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <>
    <div className="w-4/6 mt-8 mx-auto flex flex-col gap-y-8 mb-40">
      <Header />
      <Hero/>
      <Skills/>
      <div className="flex-grow border-1 border-[#dcd8f3]"></div>
      <Profile/>
      <div className="flex-grow border-1 border-[#dcd8f3]"></div>
      <Projects/>
    </div>
    <Footer/>
    </>
  );
}

export default App;
