import React from "react";
import { useHistory } from "react-router-dom";

const CloseMenu = ({ visible, setVisible }) => {
  let history = useHistory();

  const redirect = () => {
    setVisible(!visible);
    setTimeout(() => {
      history.push("/");
    }, 50);
  };

  return (
    <div className="menu-close" onClick={() => redirect()}>
      <svg
        className="svg2"
        xmlns="http://www.w3.org/2000/svg"
        width="101"
        height="101"
        viewBox="0 0 101 101">
        <g
          id="Ellipse_2"
          data-name="Ellipse 2"
          fill="none"
          stroke="#000"
          strokeWidth="4"
          strokeDasharray="1 15">
          <circle cx="50.5" cy="50.5" r="50.5" stroke="none" />
          <circle cx="50.5" cy="50.5" r="48.5" fill="none" />
        </g>
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24.75"
        height="24.75"
        viewBox="0 0 24.75 24.75"
        className="svg1">
        <path
          id="Icon_awesome-times"
          data-name="Icon awesome-times"
          d="M17.066,18,24.1,10.964a2.212,2.212,0,0,0,0-3.128L22.539,6.273a2.212,2.212,0,0,0-3.128,0l-7.036,7.036L5.339,6.273a2.212,2.212,0,0,0-3.128,0L.648,7.836a2.212,2.212,0,0,0,0,3.128L7.684,18,.648,25.036a2.212,2.212,0,0,0,0,3.128l1.564,1.564a2.212,2.212,0,0,0,3.128,0l7.036-7.036,7.036,7.036a2.212,2.212,0,0,0,3.128,0L24.1,28.164a2.212,2.212,0,0,0,0-3.128Z"
          transform="translate(0 -5.625)"
          fill="#fffdff"
        />
      </svg>
    </div>
  );
};

export default CloseMenu;
