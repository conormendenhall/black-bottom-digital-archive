import React from 'react'

const Breadcrumb = ({ text, href }) => {
  return (
    <a href={href} className="breadcrumb">
      <div>
        <span>&gt;&gt; Back to {text}</span>
      </div>
    </a>
  )
}

export default Breadcrumb
