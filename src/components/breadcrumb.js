import React from 'react'

const Breadcrumb = ({ text, href }) => {
  return (
    <div className="breadcrumb">
      <a href={href}>
        <span>{text}</span>
      </a>
    </div>
  )
}

export default Breadcrumb
