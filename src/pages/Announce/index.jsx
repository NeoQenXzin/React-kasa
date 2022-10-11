import React from "react";
import { Navigate, useLocation } from "react-router";
import { useNavigate } from "react-router-dom";
import Gallery from "../../components/Gallery/Gallery";
import Accordeon from "../../components/Accordeon/Accordeon";
import Rating from "../../components/Rating/Rating";
import "./Annonce.css";

export default function Announce() {
  const location = useLocation();
  // location.state === null ? console.log(location) : console.log("existe");
  // console.log(`/annonce/${location.state.id} et ${location.pathname}`);
  const navigate = useNavigate();
  if (location.state === null) {
    return <Navigate to="/not-found" />;
  } else if (`/annonce/${location.state.id}` === location.pathname) {
    return (
      <div>
        <Gallery
          photos={location.state.pictures}
          title={location.state.title}
        />
        <section className="header-annonce">
          <div className="infos-annonce">
            <h1>{location.state.title}</h1>
            <p>{location.state.location}</p>
            <div className="tags">
              <ul>
                {location.state.tags.map((tag, index) => (
                  <li className="tag" key={`tag${index}`}>
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="infos-profil">
            <div className="profil">
              <h2>{location.state.host.name}</h2>
              <img src={location.state.host.picture} alt="profil" />
            </div>
            <div className="rate">
              <Rating number="1" rate={location.state.rating} />
              <Rating number="2" rate={location.state.rating} />
              <Rating number="3" rate={location.state.rating} />
              <Rating number="4" rate={location.state.rating} />
              <Rating number="5" rate={location.state.rating} />
            </div>
          </div>
        </section>
        <section className="main">
          <ul>
            <Accordeon
              title={"Description"}
              content={location.state.description}
            />
            <Accordeon
              title={"Equipement"}
              content={location.state.equipments.map((equipment, index) => (
                <div key={`equipement${index}`}>{equipment}</div>
              ))}
            />
          </ul>
        </section>
      </div>
    );
  } else {
    return navigate("/not-found");
  }
}
