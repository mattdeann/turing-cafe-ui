import React from 'react';
import './Card.css';

function Card({data}) {
  let date = `${data.date.slice(5,7)}/${data.date.slice(8,10)}`
  if (date[0] === '0') {
    date = date.substring(1)
  }

  return (
    <article className="card" key={data.id}>
      <h2>
        {data.name}
      </h2>
      <p>
        {data.date.length > 6 ? date : data.date}
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