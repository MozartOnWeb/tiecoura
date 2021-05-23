import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Import Styles
import { SerieWrapper } from "./Styles/PhotoSerieStyles";

// Import Component
import { NewSerieForm } from "../Components";

import { projectFirestore } from "../firebase/config";
const db = projectFirestore;

const PhotoSeries = () => {
  const [series, setSeries] = useState([]);

  useEffect(() => {
    db.collection("series").onSnapshot((snapshot) => {
      const tempSeries = [];
      snapshot.forEach((doc) => {
        tempSeries.push({ ...doc.data(), id: doc.id });
      });
      setSeries(tempSeries);
    });
  }, []);

  return (
    <>
      {series.map((serie) => (
        <SerieWrapper>
          <Link to={`/${serie.id}`}>
            <img src={serie.images ? serie.images[0].url : []} alt={`${serie.name}`} />
            <p>{serie.name}</p>
          </Link>
        </SerieWrapper>
      ))}
      <NewSerieForm />
    </>
  );
};

export default PhotoSeries;
