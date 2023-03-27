import React from 'react'
//hooks
import { useDocumentsContext } from '../hooks/useDocumentContext'
export const DocumentDetails = ({ document }) => {
  const {dispatch} = useDocumentsContext()
  const handleClick = async () => {
    try {
          
    const response = await fetch(
      'http://localhost:5000/api/documents/' + document._id,
      {
        method: 'DELETE',
      }
    )
    const json = await response.json()
    dispatch({typee:'DELETE_DOCUMENT',payload:json})
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className='document-details'>
      <h4>{document.filename}</h4>
      <p>
        <strong>Path: </strong>
        {document.path}
      </p>
      <p>
        <strong>Description: </strong>
        {document.desc}
      </p>
      <p>{document.createdAt}</p>
      <span onClick={handleClick}>delete</span>
    </div>
  )
}
