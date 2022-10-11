import { annonces } from "../../datas/annoncesList.js";
import "./Gallery.css";
import { Link } from "react-router-dom";

function Gallery() {
  return (
    <div className="gallery-accueil">
      {annonces.map((annonce, index) => (
        <Link
          to={{
            pathname: `/annonce/${annonce.id}`,
          }}
          key={(index = annonce.id)}
          state={annonce}
        >
          <div className="annonce">
            <div className="overlay"></div>
            <img src={annonce.cover} alt="images annonces" />
            <h2>{annonce.title}</h2>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Gallery;
