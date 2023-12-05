import React from 'react'

const Breadcrumb = ({ text, href }) => {
  return (
    <a href={href} className="breadcrumb" aria-label={'Go back to ' + text}>
      <div>
        <span>&gt;&gt; Back to {text}</span>
      </div>
    </a>
  )
}

export default Breadcrumb
