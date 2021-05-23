import React, {  useState } from "react";

// Import Styles
import { SerieForm } from './Styles/newSerieFormStyles'
import { Submit } from "../layout";

import { projectFirestore } from "../firebase/config";

const db = projectFirestore;


const NewSerieForm = () => {

    const [serieName, setSerieName] = useState("")

    const onSerieNameChange = (e) => {
        setSerieName(e.target.value)
    }

    const onSerieCreate = () => {
        if (!serieName) {
            return
        }
        db.collection("series").doc(serieName).set({
            name: serieName
        })
        setSerieName('')
    }

    return (
      <SerieForm>
        <input value={serieName} onChange={onSerieNameChange} type="text" />
        <Submit onClick={onSerieCreate}>Créer une Nouvelle Série</Submit>
      </SerieForm>
    );
}

export default NewSerieForm
