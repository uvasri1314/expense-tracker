// JavaScript code to handle form submission in Add Expense page
document.getElementById('expenseForm').addEventListener('submit', (event) => {
  event.preventDefault();

  // Get form values
  const name = document.getElementById('expenseName').value;
  const amount = document.getElementById('expenseAmount').value;
  const date = document.getElementById('expenseDate').value;
  const account = document.getElementById('expenseAccount').value;

  // Create an object to store the expense data
  const expenseData = {
    name: name,
    amount: amount,
    date: date,
    account: account
  };

  // Get existing data from localStorage
  const existingData = JSON.parse(localStorage.getItem('expenses')) || [];

  // Add new expense data to the existing data array
  existingData.push(expenseData);

  // Store the updated data in localStorage
  localStorage.setItem('expenses', JSON.stringify(existingData));

  // Clear the form inputs for the next entry
  document.getElementById('expenseForm').reset();
});
