import {React, useState} from 'react'

//hooks
import { useDocumentsContext } from '../hooks/useDocumentContext'

export const DocumentForm = () => {
  const{dispatch}=useDocumentsContext()
  const [filename, setFilename] = useState('')
  const [path, setPath] = useState('')
  const [desc, setDesc] = useState('')
  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const document = { filename, path, desc }
    const response = await fetch('http://localhost:5000/api/documents', {
      method: 'POST',
      body: JSON.stringify(document),
      headers: {
        'Content-type': 'application/json',
      },
    })
    const json = await response.json()
    if (!response.ok) {
      setError(json.error)
    }
    if(response.ok){
        setFilename('')
        setPath('')
        setDesc('')
        setError(null)
        console.log('new document added', json)
        dispatch({type:'CREATE_DOCUMENT',payload:json})
    }
  }

  return (
    <form className='create' onSubmit={handleSubmit}>
      <h3>Add Document</h3>
      <label>Filename: </label>
      <input
        type='text'
        onChange={(e) => {
          setFilename(e.target.value)
        }}
        value={filename}
      />
      <label>Path: </label>
      <input
        type='text'
        onChange={(e) => {
          setPath(e.target.value)
        }}
        value={path}
      />
      <label>Description: </label>
      <input
        type='text'
        onChange={(e) => {
          setDesc(e.target.value)
        }}
        value={desc}
      />
      <button>Add</button>
      {error &&
        <div className='error'>{error}</div>
      }
    </form>
  )
}
