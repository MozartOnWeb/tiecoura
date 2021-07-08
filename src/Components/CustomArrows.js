import { BiLeftArrowCircle, BiRightArrowCircle } from "react-icons/bi";


export const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <BiRightArrowCircle
      className={className}
      style={{ ...style, display: "block", color: "#E2293F" }}
      onClick={onClick}
    />
  );
}

export const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <BiLeftArrowCircle
      className={className}
      style={{ ...style, display: "block", color: "#E2293F" }}
      onClick={onClick}
    />
  );
}
