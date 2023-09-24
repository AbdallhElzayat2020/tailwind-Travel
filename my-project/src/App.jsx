import "./App.css";
import Activities from "./components/Activities";
import Booking from "./components/Booking";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import TopBar from "./components/topbar";

function App() {
  return (
    <>
      <TopBar />
      <Navbar />
      <Hero />
      <Activities />
      <Booking />
      <Gallery />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
