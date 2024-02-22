import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const GalleryContext = createContext();

const GalleryContextProvider = ({ children }) => {
  const [categories, setCategories] = useState();

  useEffect(() => {
    axios
      .get("https://api.npoint.io/5f63e57a657c9ea20769")
      .then((res) => {
        setCategories(res.data);
      })
      .catch((error) => {
        console.error("Error fetching images:", error);
      });
  }, []);

  return (
    <GalleryContext.Provider value={{ categories }}>
      {children}
    </GalleryContext.Provider>
  );
};

export default GalleryContextProvider;
