import React, { useState } from "react";
import styled from "styled-components";

// Import Components
import ProgressBar from '../Components/ProgressBar'

// Styling the component
const FormWrapper = styled.div`
  margin: 0px auto 30px auto;

  form {
    text-align: center;
    label input {
      height: 0;
      width: 0;
      opacity: 0;
    }
    label {
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      border: 2px solid ${(props) => props.theme.red};
      border-radius: 50%;
      margin: 10px auto;
    }
    svg {
      width: 25px;
      path {
        stroke: ${(props) => props.theme.red};
      }
    }
  }
  .error,
  .file-name {
    font-family: ${(props) => props.theme.mainFont};
    color: ${(props) => props.theme.white};
    font-weight: bold;
    font-size: 11px;
    margin-top: 20px;
  }
`;

const ImageUpload = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const types = ["image/png", "image/jpeg"];

  const changeHandler = (e) => {
    let selected = e.target.files[0];

    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError("");
    } else {
      setFile(null);
      setError(
        "S'il vous plaît Tiècoura veuillez choisir une image au format ( png / jpeg )",
      );
    }
  };

  return (
    <FormWrapper>
      <form action="">
        <label>
          <input type="file" onChange={changeHandler} />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36.021"
            height="30.002"
            viewBox="0 0 36.021 30.002">
            <g
              id="Icon_feather-upload-cloud"
              data-name="Icon feather-upload-cloud"
              transform="translate(0.014 -2.998)">
              <path
                id="Tracé_1"
                data-name="Tracé 1"
                d="M24,24l-6-6-6,6"
                fill="none"
                stroke="#000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
              />
              <path
                id="Tracé_2"
                data-name="Tracé 2"
                d="M18,18V31.5"
                fill="none"
                stroke="#000"
                strokeLinecap="round"
                strokeLinejoin="round"
                stroke-Width="3"
              />
              <path
                id="Tracé_3"
                data-name="Tracé 3"
                d="M30.585,27.585A7.5,7.5,0,0,0,27,13.5H25.11A12,12,0,1,0,4.5,24.45"
                fill="none"
                stroke="#000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
              />
              <path
                id="Tracé_4"
                data-name="Tracé 4"
                d="M24,24l-6-6-6,6"
                fill="none"
                stroke="#000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
              />
            </g>
          </svg>
        </label>
        <div className="output">
          {error && <div className="error"> {error} </div>}
          {file && <div className="file-name"> {file.name} </div>}
          {file && <ProgressBar file={file} setFile={setFile } />}
        </div>
      </form>
    </FormWrapper>
  );
};

export default ImageUpload;
