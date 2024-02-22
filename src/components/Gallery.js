import React, { useContext, useMemo } from "react";
import { Link } from "react-router-dom";
import { GalleryContext } from "../contexts/GalleryContext";

const Gallery = () => {
  const { categories } = useContext(GalleryContext);
  console.log(categories);

  const memoizedCategories = useMemo(() => {
    return categories;
  }, [categories]);

  return (
    <div className="col-lg-10">
      <div className="col p-3 pt-2">
        {memoizedCategories &&
          memoizedCategories.map((category, index) => (
            <div key={index}>
              <h3>{category.name}</h3>
              <div className="row flex-nowrap overflow-auto mb-3">
                {category.films.map((film) => (
                  <div
                    className="col-lg-3 col-md-12 mb-4 mb-lg-0"
                    key={film.id}
                  >
                    <Link to={`/${category.name.toLowerCase()}/${film.id}`}>
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
          ))}
      </div>
    </div>
  );
};

export default Gallery;
