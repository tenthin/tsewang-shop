import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import OurFood from "./OurFood";
import Header from "./component/header/Header";
import Footer from "./component/footer/Footer";
import Aboutus from "./Aboutus";
import Recipe from "./Recipe";
import FullRecipe from "./FullRecipe";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ourfood" element={<OurFood />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/recipe" element={<Recipe />} />
          <Route path="/fullrecipe/:id" element={<FullRecipe />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
