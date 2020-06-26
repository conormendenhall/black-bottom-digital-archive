import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const Interview = () => {
  const data = useStaticQuery(graphql`
    query {
      interviews: allContentfulInterview {
        edges {
          node {
            id
            title
            text {
              text
            }
            interviewAudio {
              title
              file {
                url
                contentType
              }
            }
          }
        }
      }
    }
  `)

  let interviews = data.interviews.edges.map((item, key) => (
    <div key={item.node.id}>
      <h3>{item.node.title}</h3>
      {item.node.interviewAudio &&
        item.node.interviewAudio.map((item, key) => (
          <audio controls>
            <source src={item.file.url} type={item.file.contentType}></source>
          </audio>
        ))}
      <pre>{item.node.text.text}</pre>
    </div>
  ))

  return (
    <div>
      <h1>Interviews</h1>
      {interviews}
    </div>
  )
}

export default Interview
