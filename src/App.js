import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GalleryContextProvider from "./contexts/GalleryContext";
import Gallery from "./components/Gallery";
import Category from "./components/Category";
import FilmDetail from "./components/FilmDetail";
import Sidebar from "./components/Sidebar";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        <Router>
          <GalleryContextProvider>
            <Sidebar />
            <Routes>
              <Route path="/" exact element={<Gallery />} />
              <Route path="/:categoryParam" element={<Category />} />
              <Route path="/:categoryParam/:id" element={<FilmDetail />} />
            </Routes>
          </GalleryContextProvider>
        </Router>
      </div>
    </div>
  );
}
export default App;
