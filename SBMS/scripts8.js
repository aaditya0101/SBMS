function selectPlan(planName, planPrice) {
  // Display the selected plan details
  const selectedPlanSection = document.getElementById('selectedPlanSection');
  const selectedPlanDetails = document.getElementById('selectedPlanDetails');
  
  selectedPlanDetails.textContent = `You have selected the ${planName} with a monthly cost of $${planPrice}.`;
  selectedPlanSection.classList.remove('hidden');
}

// Optional: Hide selected plan section when the page is loaded if no plan is selected
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('selectedPlanSection').classList.add('hidden');
});
