import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { GalleryContext } from "../contexts/GalleryContext";

const Category = () => {
  const { categoryParam } = useParams();
  const { categories } = useContext(GalleryContext);
  const [films, setFilms] = useState();

  useEffect(() => {
    categories &&
      categories.map((category) => {
        if (category.name.toLowerCase() === categoryParam) {
          setFilms(category.films);
        }
      });
  });

  return (
    <div className="col-auto col-md-9">
      <div className="col p-3 pt-2">
        <h3>All Movies for {categoryParam}</h3>
        <div className="row">
          {films &&
            films.map((film) => (
              <div className="col-lg-4 col-md-12 mb-4 mb-lg-0" key={film.id}>
                <Link to={`/${categoryParam}/${film.id}`}>
                  <img
                    src={film.url}
                    alt={film.title}
                    className="w-100 shadow-1-strong rounded mb-4"
                  />
                </Link>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
