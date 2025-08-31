import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <div data-theme="dark" className="bg-white dark:bg-[#252128]">
        <div className="w-4/6 mx-auto flex flex-col gap-y-8 pt-10 pb-[160px]">
          <Header />
          <Hero />
          <Skills />
          <div className="flex-grow border-1 border-[#dcd8f3] dark:border-[#9e97c4]"></div>
          <Profile />
          <div className="flex-grow border-1 border-[#dcd8f3] dark:border-[#9e97c4]"></div>
          <Projects />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;

//data-theme="dark"