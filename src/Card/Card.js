import React from 'react';
import './Card.css';

function Card({data}) {

  return (
    <article className="card" key={data.id}>
      <h1>
        {data.name}
      </h1>
      <p>
        {data.date}
      </p>
      <p>
        {data.time}
      </p>
      <p>
        {data.number}
      </p>
      <button>
        Cancel
      </button>
    </article>
  )
}

export default Card;