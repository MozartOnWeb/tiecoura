import React, { createContext, useState, useEffect } from "react";
import { useRouteMatch } from "react-router-dom";

import { projectFirestore } from "./firebase/config";

const db = projectFirestore;

export const SerieContext = createContext();

export const SerieProvider = ({ children }) => {
  const [series, setSeries] = useState([]);
  const [images, setImages] = useState([]);
  const [serieName, setSerieName] = useState("");

  const match = useRouteMatch("/:serie");
  const { serie } = match.params;

  // Series
  useEffect(() => {
    db.collection("series").onSnapshot((snapshot) => {
      const tempSeries = [];
      snapshot.forEach((doc) => {
        tempSeries.push({ ...doc.data(), id: doc.id });
      });
      setSeries(tempSeries);
    });
  }, []);

  // Serie
  useEffect(() => {
    db.collection("series")
      .doc(serie)
      .onSnapshot((doc) => {
        setImages(doc.data() || []);
        setSerieName(doc.data());
      });
  }, []);

  return (
    <SerieContext.Provider value={[series, images, serieName]} value2={serie} >{children}</SerieContext.Provider>
  );
};
