import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GalleryContext } from "../contexts/GalleryContext";

const ImageDetail = () => {
  const { categoryParam, id } = useParams();
  const { categories } = useContext(GalleryContext);
  const [film, setFilm] = useState();

  useEffect(() => {
    categories &&
      categories.map((category) => {
        if (category.name.toLowerCase() === categoryParam) {
          setFilm(category.films.find((f) => f.id === parseInt(id)));
        }
      });
  });

  return (
    <div className="row">
      <div class="col-lg-5 col-md-5 mb-4 mb-lg-0">
        {film && (
          <div class="m-2 mt-3">
            <h3>{film.title}</h3>
            <h6>Release Date: {film.release}</h6>
            <div>
              <img src={film.url} alt={film.title} width={500} />
              <div class="mt-4">
                <p>
                  <b>About: </b> {film.description}
                </p>
              </div>
            </div>
            <div>
              <p>
                <b>Rated: {film.rated}</b>
              </p>
            </div>
            <div>
              <h4>Watch Trailer</h4>
              <a className="btn btn-primary" href={film.trailer}>See trailer</a>
            </div>
          </div>
        )}
      </div>
      <div class="col-lg-5 col-md-5 m-4 mb-lg-0">
        <div class="row">
          <h4>Suggested Movies for you</h4>
          {film &&
            film.suggested &&
            film.suggested.map((image) => (
              <div class="col-lg-5 m-2">
                <img src={image} width={250} height={255} />
               
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ImageDetail;
