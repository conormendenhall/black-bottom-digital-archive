import React from 'react'

const Card = ({ url, data }) => {
  return (
    <a
      href={`${url}${data.slug}`}
      className="card"
      aria-label={'Go to ' + data.title}
    >
      <div className="card-content">
        <div className="card-header">{data.title}</div>
        <div className="card-body">{data.brief && <div>{data.brief}</div>}</div>
        <div className="card-footer">&gt;&gt; Read More</div>
      </div>
    </a>
  )
}

export default Card
