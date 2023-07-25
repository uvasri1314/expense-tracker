// JavaScript code to populate the table in View Expense page
window.addEventListener('DOMContentLoaded', () => {
    // Get the form data from the localStorage
    const formData = JSON.parse(localStorage.getItem('expenses')) || [];
  
    // Get the table element
    const table = document.getElementById('expenseTable');
  
    // Populate the table with the data
    formData.forEach(expense => {
      const row = table.insertRow();
      const dateCell = row.insertCell();
      const nameCell = row.insertCell();
      const amountCell = row.insertCell();
      const accountCell = row.insertCell();
  
      dateCell.textContent = expense.date;
      nameCell.textContent = expense.name;
      amountCell.textContent = expense.amount;
      accountCell.textContent = expense.account;
    });
  });
  