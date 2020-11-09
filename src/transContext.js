import React, {createContext, useReducer} from "react"
import TransactionReducer from "./TransactionReducer"

const initialTransactions = {
  transactions: []
}
 export const TransactionContext= createContext(initialTransactions)
 
 export const TransactionProvider= ({children})=>{
  let [state, dispatch] = useReducer(TransactionReducer, initialTransactions)

function deleteTransaction(id){
  dispatch({
    type: 'DELETE_TRANSACTION',
    payload: id
  })
}
  function addTransaction(transaction){
      dispatch({
        type: "ADD_TRANSACTION",
        payload: transaction
      })
  }
  return(
    <TransactionContext.Provider value={{
       transactions: state.transactions, 
       deleteTransaction,
       addTransaction
    }}>
         {children}
    </TransactionContext.Provider>
  );
 }