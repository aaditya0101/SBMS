function generateInvoice() {
  // Get values from the form
  const companyName = document.getElementById('companyName').value;
  const clientName = document.getElementById('clientName').value;
  const invoiceDate = document.getElementById('invoiceDate').value;
  const dueDate = document.getElementById('dueDate').value;
  const items = document.getElementById('items').value;

  // Parse items
  const itemList = items.split('\n').map(line => {
      const [name, quantity, price] = line.split(',');
      return { name: name.trim(), quantity: quantity.trim(), price: price.trim() };
  });

  // Create invoice content
  let invoiceHTML = `
      <h1>Invoice</h1>
      <p><strong>Company Name:</strong> ${companyName}</p>
      <p><strong>Client Name:</strong> ${clientName}</p>
      <p><strong>Invoice Date:</strong> ${invoiceDate}</p>
      <p><strong>Due Date:</strong> ${dueDate}</p>
      <h2>Items</h2>
      <table>
          <thead>
              <tr>
                  <th>Item</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Total</th>
              </tr>
          </thead>
          <tbody>
  `;

  let totalAmount = 0;

  itemList.forEach(item => {
      const itemTotal = parseFloat(item.quantity) * parseFloat(item.price);
      totalAmount += itemTotal;
      invoiceHTML += `
          <tr>
              <td>${item.name}</td>
              <td>${item.quantity}</td>
              <td>${item.price}</td>
              <td>${itemTotal.toFixed(2)}</td>
          </tr>
      `;
  });

  invoiceHTML += `
          </tbody>
      </table>
      <h2>Total Amount: $${totalAmount.toFixed(2)}</h2>
  `;

  // Insert invoice into container
  document.getElementById('invoiceContainer').innerHTML = invoiceHTML;
}
