import React from 'react';
import './Card.css';

function Card({data}) {

  return (
    <article className="card" key={data.id}>
      <h2>
        {data.name}
      </h2>
      <p>
        {data.date}
      </p>
      <p>
        {data.time}
      </p>
      <p>
        Number of guests: {data.number}
      </p>
      <button>
        Cancel
      </button>
    </article>
  )
}

export default Card;