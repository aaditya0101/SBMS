document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contactForm');

  contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;

      // Simulate form submission
      alert(`Mail sent! 
      Name: ${name} 
      Email: ${email} 
      Message: ${message}`);

      // Clear the form
      contactForm.reset();
  });
});
