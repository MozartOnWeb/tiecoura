import React, { useState, useEffect } from "react";
import { useRouteMatch } from "react-router-dom";

// Import Styles
import { SerieWrapper, SerieContainer } from "./Styles/PhotoSerieStyles";

// Import Component
import { NewPhotoForm } from "../Components";

import { projectFirestore } from "../firebase/config";

const db = projectFirestore;

const PhotoSerie = () => {

  const [images, setImages] = useState([]);
  const [serieName, setSerieName] = useState("");

  const match = useRouteMatch("/:serie");
  const { serie } = match.params;

  useEffect(() => {
    db.collection("series")
      .doc(serie)
      .onSnapshot((doc) => {
        setImages(doc.data().images || []);
        setSerieName(doc.data().name);
      });
  }, []);

  return (
    <SerieContainer>
      <h3> {serieName} </h3>
      {images.map((image) => (
        <SerieWrapper>
          <img src={image.url} alt={`${image.name}`} />
        </SerieWrapper>
      ))}
      <NewPhotoForm currentSerie={serie} />
    </SerieContainer>
  );
};

export default PhotoSerie;
