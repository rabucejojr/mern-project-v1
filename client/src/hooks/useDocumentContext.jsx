import {DocumentContext} from '../context/DocumentContext'
import { useContext } from 'react'

export const useDocumentsContext=()=>{
    const context = useContext(DocumentContext)

    if(!context){
        throw  Error('useDocumentContext must be used inside a DocumentContextProvider')
    }

    return context
}