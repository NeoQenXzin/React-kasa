import { useState } from "react";
import "./Gallery.css";
import BtnGallery from "./BtnGallery";

export default function Gallery(photos, title) {
  const [galleryAnim, setGalleryAnim] = useState({
    index: 1,
    inProgress: false,
  });
  const nbrePhoto = photos.photos.length;
  console.log(nbrePhoto);
  const nextSlide = () => {
    if (galleryAnim.index !== photos.photos.length && !galleryAnim.inProgress) {
      setGalleryAnim({ index: galleryAnim.index + 1, inProgress: true });

      setTimeout(() => {
        setGalleryAnim({ index: galleryAnim.index + 1, inProgress: false });
      }, 400);
    } else if (
      galleryAnim.index === photos.photos.length &&
      !galleryAnim.inProgress
    ) {
      setGalleryAnim({ index: 1, inProgress: true });

      setTimeout(() => {
        setGalleryAnim({ index: 1, inProgress: false });
      }, 400);
    }
  };
  const prevSlide = () => {
    if (galleryAnim.index > 1 && !galleryAnim.inProgress) {
      setGalleryAnim({ index: galleryAnim.index - 1, inProgress: true });
      setTimeout(() => {
        setGalleryAnim({ index: galleryAnim.index - 1, inProgress: false });
      }, 400);
    } else if (galleryAnim.index === 1 && !galleryAnim.inProgress) {
      setGalleryAnim({ index: nbrePhoto, inProgress: true });
      setTimeout(() => {
        setGalleryAnim({ index: nbrePhoto, inProgress: false });
      }, 400);
    }
  };

  return (
    <div className="gallery-photos">
      {photos.photos.map((photo, index) => {
        return (
          <div
            key={`${title}${index}`}
            className={
              galleryAnim.index === index + 1
                ? "gallery active-anim"
                : "gallery"
            }
          >
            <img src={process.env.PUBLIC_URL + photo} alt="annonce" />
            <div className="index-slide">{` ${index + 1} / ${nbrePhoto}`}</div>
          </div>
        );
      })}
      <div className={nbrePhoto === 1 ? "btn-gallery hide" : ""}>
        <BtnGallery moveSlide={nextSlide} direction={"next"} />
        <BtnGallery moveSlide={prevSlide} direction={"prev"} />
      </div>
    </div>
  );
}
