import React from 'react'
import { useEffect, useState } from 'react'

const Home = () => {
  const [documents, setDocuments] = useState(null)
  const fetchDocs = async () => {
    try {
      const response = await fetch('/api/documents')
      const json = await response.json()
      setDocuments(json)
      console.log(json)
      console.log(response)
    } catch (error) {
      // console.log(error)
    }
  }

  useEffect(() => {
    fetchDocs();
  }, [])
  return (
    <div className='home'>
      <div className='documents'>
        {documents &&
          documents.map((document) => (
            <p key={document.id}>{document.filename}</p>
          ))}
      </div>
    </div>
  )
}

export default Home
