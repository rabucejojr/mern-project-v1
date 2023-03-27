import React from 'react'
import { useEffect } from 'react'

//component
import { DocumentDetails } from '../components/DocumentDetails'
import { DocumentForm } from '../components/DocumentForm'

//hooks
import { useDocumentsContext } from '../hooks/useDocumentContext'

const Home = () => {
  // const [documents, setDocuments] = useState(null)
  const {documents,dispatch} = useDocumentsContext()


  const fetchDocs = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/documents')
      const json = await response.json()
      // setDocuments(json)
      // console.log(json)
      dispatch({type:'SET_DOCUMENTS',payload:json})
    } catch (error) {
      console.log(error)
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
      <DocumentForm/>
    </div>
    </>
  )
}

export default Home
