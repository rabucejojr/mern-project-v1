import React from 'react'

export const DocumentDetails = ({document}) => {
  const handleClick=async()=>{
    const response = await fetch('http://localhost:5000/api/documents' +document._id,{
      method: 'DELETE'
    })
    const json = await response.json()
    
  }
  return (
    <div className="document-details">
        <h4>{document.filename}</h4>
        <p><strong>Path: </strong>{document.path}</p>
        <p><strong>Description: </strong>{document.desc}</p>
        <p>{document.createdAt}</p>
        <span onClick={handleClick}>delete</span>
    </div>
  )
}
