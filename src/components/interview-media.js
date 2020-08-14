import React from 'react'

import { BsFileText } from 'react-icons/bs'

const InterviewMedia = ({ audio, transcript }) => {
  return (
    <div className="interview-media">
      {audio &&
        audio.map((item, key) => (
          <div key={key} className="interview-audio">
            <div className="audio-title">{item.title}</div>
            <audio controls>
              <source src={item.file.url} type={item.file.contentType}></source>
            </audio>
          </div>
        ))}
      {transcript &&
        transcript.map((item, key) => (
          <a
            key={key}
            href={item.file.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="transcript">
              <div className="icon">
                <BsFileText />
              </div>
              <div>
                <span>{item.title}</span>
              </div>
            </div>
          </a>
        ))}
    </div>
  )
}

export default InterviewMedia
