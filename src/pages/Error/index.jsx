import React from "react";
import "./Error.css";
import { useNavigate } from "react-router-dom";

export default function Error() {
  const navigate = useNavigate();
  return (
    <div className="error">
      <h1>404</h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <button onClick={() => navigate("/")}>
        Retourner sur la page d'accueil
      </button>
    </div>
  );
}
