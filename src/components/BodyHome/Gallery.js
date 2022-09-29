import { annonces } from "../../datas/annoncesList.js";
import "./Gallery.css";

function Gallery() {
  return (
    <div className="gallery-accueil">
      {annonces.map((annonce, index) => (
        <a href="#">
          <div className="annonce">
            <img src={annonce.cover} alt="images annonces" />
            <h2>{annonce.title}</h2>
          </div>
        </a>
      ))}
    </div>
  );
}

export default Gallery;
