import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Notfound from "./pages/Notfound";
import Services from "./pages/Services";
import About from "./pages/About";
import Nav from "./components/Nav";

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Nav />} >
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<Notfound />} />
      </Route>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;