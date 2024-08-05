// Function to handle adding a new item to the inventory
function addItem() {
  // Get values from the form
  const name = document.getElementById('itemName').value;
  const quantity = parseInt(document.getElementById('itemQuantity').value);
  const price = parseFloat(document.getElementById('itemPrice').value);

  if (!name || isNaN(quantity) || isNaN(price)) {
      alert('Please fill in all fields correctly.');
      return;
  }

  // Create a new row for the item
  const table = document.getElementById('inventoryTable').getElementsByTagName('tbody')[0];
  const newRow = table.insertRow();
  newRow.insertCell(0).innerText = name;
  newRow.insertCell(1).innerText = quantity;
  newRow.insertCell(2).innerText = `$${price.toFixed(2)}`;

  // Add edit and delete buttons
  const actionsCell = newRow.insertCell(3);
  actionsCell.classList.add('actions');
  actionsCell.innerHTML = `
      <button onclick="editItem(this)">Edit</button>
      <button onclick="deleteItem(this)">Delete</button>
  `;

  // Clear the form fields
  document.getElementById('itemName').value = '';
  document.getElementById('itemQuantity').value = '';
  document.getElementById('itemPrice').value = '';
}

// Function to handle editing an existing item
function editItem(button) {
  const row = button.closest('tr');
  const cells = row.cells;
  const name = cells[0].innerText;
  const quantity = cells[1].innerText;
  const price = cells[2].innerText.replace('$', '');

  // Populate form with existing data
  document.getElementById('itemName').value = name;
  document.getElementById('itemQuantity').value = quantity;
  document.getElementById('itemPrice').value = price;

  // Change the add button to a save button
  const form = document.getElementById('inventoryForm');
  form.querySelector('button').innerText = 'Save Changes';
  form.querySelector('button').onclick = function() {
      saveChanges(row);
  };
}

// Function to save changes made during editing
function saveChanges(row) {
  const name = document.getElementById('itemName').value;
  const quantity = parseInt(document.getElementById('itemQuantity').value);
  const price = parseFloat(document.getElementById('itemPrice').value);

  if (!name || isNaN(quantity) || isNaN(price)) {
      alert('Please fill in all fields correctly.');
      return;
  }

  // Update the row with new values
  row.cells[0].innerText = name;
  row.cells[1].innerText = quantity;
  row.cells[2].innerText = `$${price.toFixed(2)}`;

  // Reset form
  document.getElementById('itemName').value = '';
  document.getElementById('itemQuantity').value = '';
  document.getElementById('itemPrice').value = '';
  document.querySelector('#inventoryForm button').innerText = 'Add Item';
  document.querySelector('#inventoryForm button').onclick = addItem;
}

// Function to delete an existing item
function deleteItem(button) {
  const row = button.closest('tr');
  row.remove();
}

