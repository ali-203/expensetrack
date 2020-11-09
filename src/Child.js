import React, { useContext, useState } from "react";
import "./App.css";
import { TransactionContext } from "./TransContext";
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import { v4 as uuidv4 } from 'uuid';


function Child () {
  
  const {deleteTransaction} =useContext(TransactionContext)
 
  let { transactions, addTransaction } = useContext(TransactionContext);
  let [newDesc, setDesc] = useState("");
  let [newAmount, setAmount] = useState("");

  const handleAddition = (event) => {
    event.preventDefault();
  if(Number(newAmount)===0){
    alert('Please enter correct value')
    return false;
  } 
    addTransaction({
      amount: Number(newAmount),
      desc: newDesc,
      id: uuidv4()
      
    });
    setDesc('')
    setAmount(0)
  };
  const addItem=()=>{}

  const getIncome = () => {
    let income = 0;
    for (var i = 0; i < transactions.length; i++) {
      if (transactions[i].amount > 0) income += transactions[i].amount;
    }

    return income;
  };
  const getExpense = () => {
    let expense = 0;
    for (var i = 0; i < transactions.length; i++) {
      if (transactions[i].amount < 0) expense += transactions[i].amount;
    }
    return expense;
  };

  return (
    <div className="container">
      <h1 className="text_center">Expense Tracker</h1>
      <h3>
        Your Balance <br />
        <span className="big-txt">PKR {getIncome() + getExpense()}</span>
      </h3>
      <div className="expense_container">
        <h3 className="IandE">
          Income <br /> <span className="income-h3">PKR {getIncome()}</span>
        </h3>
        <h3 className="IandE">
          Expense <br />
          <span className="expense-h3">PKR {getExpense()}</span>
        </h3>
      </div>
      <h3 className="border">History</h3>
      <ul className="hist-div">
        {transactions.map((transOb, indx) => {
        debugger;
          return (
              <>
            <li key={indx} >
              
              <span className="cash"><IconButton aria-label="delete" id="deleteBtn" size= "small" onClick={()=>
              deleteTransaction(transOb.id)
              
              }>
              
          <DeleteIcon />
        </IconButton> {transOb.desc}</span>
              <span>{transOb.amount}</span>
            </li>
          </>
          );
        })}
      </ul>

      <h3 className="bottom">Add New Transaction</h3>
      <br />
      <form className="Transaction_form" onSubmit={handleAddition}>
        <div className="form_control">
          <label for="text">Text</label>

          <input
            autoComplete="off"
            value={newDesc}
            type="text"
            placeholder="Enter text..."
            onChange={(ev) => setDesc(ev.target.value)}
            required
          />
        </div>
        <br />
        <div className="form_control">
          <label for="number">
            Amount
            <br />
            (negative - expense, positive - income)
          </label>
          <input
            value={newAmount}
            type="number"
            placeholder="Enter amount..."
            onChange={(ev) => setAmount(ev.target.value)}
            required
          />
        </div>
        <br />
        <button className="btn" onClick={addItem}>Add Transaction</button>
      </form>
    </div>
  );
}

export default Child;