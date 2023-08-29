import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Bio from "./components/Bio";
import Footer from "./components/Footer";
import Youtube from "./components/Youtube";
import Releases from "./components/Releases";
import Music from "./components/Music";
function App() {
  return (
    <div className="App">
      <div></div>
      <Navbar />
      {/* <Music /> */}
      <Home />
      <Youtube />
      <Bio />
      <Releases />
      <Footer />
    </div>
  );
}

export default App;
