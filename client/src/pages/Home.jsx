import React from 'react'
import { useEffect, useState } from 'react'

//component
import { DocumentDetails } from '../components/DocumentDetails'

const Home = () => {
  const [documents, setDocuments] = useState(null)
  const fetchDocs = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/documents')
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
    <>
    <div className='home'>
      <div className='documents'>
        {documents &&
          documents.map((document) => (
            <DocumentDetails key={document._id} document={document}/>
          ))}
      </div>
    </div>
    </>
  )
}

export default Home