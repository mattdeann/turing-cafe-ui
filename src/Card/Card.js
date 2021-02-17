import React from 'react';
import './Card.css';

function Card() {

  return (
    <article className="card">
      <h1>
        Name
      </h1>
      <p>
        Date
      </p>
      <p>
        Tiime
      </p>
      <p>
        Guests
      </p>
      <button>
        Cancel
      </button>
    </article>
  )
}

export default Card;