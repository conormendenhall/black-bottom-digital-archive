import React from 'react'

const Card = ({ url, data }) => {
  return (
    <a href={`${url}${data.slug}`} className="card">
      <div className="card-body">
        <div className="card-header">{data.title}</div>
        <div>
          {/* <div>{data.body}</div> */}
          Card body text here lorum ipsum dolor
        </div>
        <div className="card-footer">&gt;&gt; Read More</div>
      </div>
    </a>
  )
}

export default Card
