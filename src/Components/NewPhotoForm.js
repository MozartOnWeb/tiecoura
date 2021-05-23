import React, { useState, useContext } from "react";
import firebase from 'firebase'

// Import Components
import { Submit } from '../layout'

// Import Styles
import { SerieForm } from './Styles/newSerieFormStyles'

import { projectFirestore, projectStorage } from "../firebase/config";

const db = projectFirestore;
const storage = projectStorage;


const NewPhotoForm = ({ currentSerie }) => {
  const [file, setFile] = useState(null);

  const onFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const onUpload = async () => {
    const storageRef = storage.ref();
    const fileRef = storageRef.child(file.name);
    await fileRef.put(file);
    db.collection("series")
      .doc(currentSerie)
      .update({
        images: firebase.firestore.FieldValue.arrayUnion({
          name: file.name,
          url: await fileRef.getDownloadURL(),
        }),
      });
  };


  return (
    <SerieForm>
      <input type="file" onChange={onFileChange} />
      <Submit onClick={onUpload}>Ajouter cette image</Submit>
    </SerieForm>
  );
};

export default NewPhotoForm;
