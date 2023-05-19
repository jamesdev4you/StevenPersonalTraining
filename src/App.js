import "./App.css";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Plans from "./pages/Plans";
import MenuHeader from "./pages/MenuHeader";
import { Route, Routes } from "react-router-dom";
import "./pages/styles.css";

function App() {
  return (
    <div style={{height: '100%',
      backgroundColor: '#26a7da'}}>
      <MenuHeader />
      <Routes style={{height: '100%',
      backgroundColor: '#26a7da'}}>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/plans" element={<Plans />} />
      </Routes>
      </div>
  );
}

export default App;
