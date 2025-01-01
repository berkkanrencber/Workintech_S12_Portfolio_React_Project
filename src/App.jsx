import { GlobalProvider } from "./context/GlobalContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import AppWrapper from "./components/AppWrapper";

function App() {
  return (
    <GlobalProvider>
      <AppWrapper>
        <Navbar />
        <Hero />
        <Skills />
        <Profile />
        <Projects />
      </AppWrapper>
      <Footer />
    </GlobalProvider>
  );
}

export default App;
