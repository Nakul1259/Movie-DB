import "./App.css";
import Home from "./Home";
import Movie from "./SingleMovie";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movies/:id" element={<Movie />} />
      </Routes>
    </div>
  );
}

export default App;
