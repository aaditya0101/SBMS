document.addEventListener('DOMContentLoaded', function() {
  const creditCardOption = document.getElementById('creditCard');
  const paypalOption = document.getElementById('paypal');
  const bankTransferOption = document.getElementById('bankTransfer');

  const creditCardSection = document.getElementById('creditCardSection');
  const paypalSection = document.getElementById('paypalSection');
  const bankTransferSection = document.getElementById('bankTransferSection');

  function updatePaymentDetails() {
      creditCardSection.style.display = creditCardOption.checked ? 'block' : 'none';
      paypalSection.style.display = paypalOption.checked ? 'block' : 'none';
      bankTransferSection.style.display = bankTransferOption.checked ? 'block' : 'none';
  }

  creditCardOption.addEventListener('change', updatePaymentDetails);
  paypalOption.addEventListener('change', updatePaymentDetails);
  bankTransferOption.addEventListener('change', updatePaymentDetails);

  // Initialize the payment details section based on the default selected payment method
  updatePaymentDetails();

  document.getElementById('paymentForm').addEventListener('submit', function(event) {
      event.preventDefault();
      const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked').value;
      alert(`Processing ${paymentMethod} payment...`);
      // Implement payment logic here
  });
});
