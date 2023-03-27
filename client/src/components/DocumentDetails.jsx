import React from 'react'

export const DocumentDetails = ({document}) => {
  return (
    <div className="document-details">
        <h4>{document.filename}</h4>
        <p><strong>Path: </strong>{document.path}</p>
        <p><strong>Description: </strong>{document.desc}</p>
        <p>{document.createdAt}</p>
    </div>
  )
}
