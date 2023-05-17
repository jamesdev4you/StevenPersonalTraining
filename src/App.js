import "./App.css";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Plans from "./pages/Plans";
import MenuHeader from "./pages/MenuHeader";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <MenuHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/plans" element={<Plans />} />
      </Routes>
    </div>
  );
}

export default App;
