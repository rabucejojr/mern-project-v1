import { React, createContext, useReducer } from 'react'

export const DocumentContext = createContext()
export const documentsReducer = (state, action)=>{
    switch(action.type){
        case 'SET_DOCUMENTS':
            return {
                documents: action.payload
            }
        case 'CREATE_DOCUMENT':
            return{
                documents:[action.payload,...state.documents]
            }
        default:
            return state
    }
}

export const DocumentContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(documentsReducer,{
    documents:null,
  })
//   dispatch({type:''})

  return (
    <>
      <DocumentContext.Provider value={{ ...state, dispatch }}>
        {children}
      </DocumentContext.Provider>
    </>
  )
}
