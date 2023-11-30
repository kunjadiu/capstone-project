import "./App.css";
// import Header from "./components/OLD COMPONENTSHeader";
// import HeroSection from "./components/OLD COMPONENTSHeroSection";
import Footerpanel from "./components/Footer";
import About from "./components/About";
import Header from "./components/Header";
import { Routes, Route, Link,BrowserRouter } from "react-router-dom";
import Highlights from "./components/Highlights";
import  HomePage  from "./components/Homepage";
import BookingTable from "./components/BookingTable";
import Main from "./components/Main";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Main/>
      <Footerpanel />
    </BrowserRouter>
  );
  // <p>Hello</p>
}

export default App;
