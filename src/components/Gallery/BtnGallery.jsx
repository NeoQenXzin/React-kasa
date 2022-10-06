import leftArrow from "./leftArrow.png";
import rightArrow from "./rightArrow.png";

function BtnGallery(props) {
  return (
    <button
      onClick={props.moveSlide}
      className={
        props.direction === "next" ? "btn-gallery next" : "btn-gallery prev"
      }
    >
      <img
        src={props.direction === "next" ? rightArrow : leftArrow}
        alt="flêche gauche ou fleche droite"
      />
    </button>
  );
}

export default BtnGallery;
