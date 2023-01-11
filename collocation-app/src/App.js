import React, { useState } from 'react';
import './App.css';

function ExpenseForm() {
  const [expense, setExpense] = useState({ date: '', amount: '', category: '', achat: '' , remboursement: '' });

  function handleChange(event) {
    const { name, value } = event.target;
    setExpense(prevExpense => ({ ...prevExpense, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(expense);
    // code pour enregistrer la dépense sur le serveur ici
  }

  return (
    <div className="App">
        <div className="auth-form-container">
        
    <form onSubmit={handleSubmit}>
    <label>
        Qui à acheter ? :
        <input
          type="achat"
          name="achat"
          value={expense.achat}
          onChange={handleChange}
        />
      </label>
      <br />

      <label>
        Remboursement :
        <input
          type="remboursement"
          name="remboursement"
          value={expense.remboursement}
          onChange={handleChange}
        />
      </label>
      <br />

      <label>
        Date:
        <input
          type="date"
          name="date"
          value={expense.date}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Montant:
        <input
          type="number"
          name="amount"
          value={expense.amount}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Catégorie:
        <input
          type="text"
          name="category"
          value={expense.category}
          onChange={handleChange}
        />
      </label>
      <br />

      <button  type="submit">Enregistrer</button>
    </form>
    </div>
    </div>
  );
}

export default ExpenseForm;
