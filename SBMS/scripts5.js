let totalExpense = 0;

// Function to handle adding a new expense
function addExpense() {
    // Get values from the form
    const name = document.getElementById('expenseName').value;
    const amount = parseFloat(document.getElementById('expenseAmount').value);
    const date = document.getElementById('expenseDate').value;

    if (!name || isNaN(amount) || !date) {
        alert('Please fill in all fields.');
        return;
    }

    // Add expense to the table
    const table = document.getElementById('expenseTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();
    newRow.insertCell(0).innerText = name;
    newRow.insertCell(1).innerText = `$${amount.toFixed(2)}`;
    newRow.insertCell(2).innerText = date;

    // Update total expense
    totalExpense += amount;
    document.getElementById('totalExpense').innerText = totalExpense.toFixed(2);

    // Clear the form fields
    document.getElementById('expenseName').value = '';
    document.getElementById('expenseAmount').value = '';
    document.getElementById('expenseDate').value = '';
}
