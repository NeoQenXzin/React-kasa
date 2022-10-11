import "./App.css";
import Header from "./components/Header/Header";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Error from "./pages/Error";
import Announce from "./pages/Announce";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/a-propos" element={<About />} />
          <Route exact path="/annonce/:id" element={<Announce />} />
          <Route exact path="/not-found" element={<Error />} />
          <Route exact path="*" element={<Error />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
