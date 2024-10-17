document.getElementById('budgetForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const destination = document.getElementById('destination').value;
    const transport = parseFloat(document.getElementById('transport').value);
    const accommodation = parseFloat(document.getElementById('accommodation').value);
    const food = parseFloat(document.getElementById('food').value);
    const activities = parseFloat(document.getElementById('activities').value);

    const totalBudget = transport + accommodation + food + activities;

    const resultDiv = document.getElementById('result');
    resultDiv.classList.remove('hidden');
    resultDiv.innerHTML = `<h2>Your Trip to ${destination}</h2>
                           <p>Total Budget Required: $${totalBudget.toFixed(2)}</p>`;
});
