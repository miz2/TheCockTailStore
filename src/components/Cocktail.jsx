import React from 'react';
import { Link } from 'react-router-dom';

export default function Cocktail({ image, name, id, info, glass }) {
  return (
    <article className="cocktail">
      <h2>Coctail </h2>
      <div className="img-container">
        <img src={image} alt={name} />
      </div>
      <div className="cocktail-footer">
        <h3>{name}</h3>
        <h4>{glass}</h4>
        <p id='info'>{info}</p>
        <Link to={`/cocktail/${id}`} className="btn btn-primary btn-details">
          details
        </Link>
      </div>
    </article>
  );
}
