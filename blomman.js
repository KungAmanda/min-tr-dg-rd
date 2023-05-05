// Hämta referenser till elementen
const plantNameInput = document.getElementById('plant-name');
const waterRequirementInput = document.getElementsByName('water-requirement');
const sunRequirementInput = document.getElementsByName('sun-requirement');
const plantDescriptionInput = document.getElementById('plant-description');
const plantTableBody = document.querySelector('#plant-table tbody');

// Lägg till en eventlyssnare på formulärets submit-event
document.querySelector('form').addEventListener('submit', (event) => {
  // Hindra formuläret från att skickas vidare och ladda om sidan
     event.preventDefault();

  // Hämtar värdet från radioknapparna 
  let waterRequirement = '';
  let sunRequirement = '';
  waterRequirementInput.forEach((input) => {
    if (input.checked) {
      waterRequirement = input.value;
    }
  });
  sunRequirementInput.forEach((input) => {
    if (input.checked) {
      sunRequirement = input.value;
    }
  });

  // Skapa en ny rad i tabellen med värdet från textfälten och radioknapparna
  const newRow = plantTableBody.insertRow();
  newRow.insertCell().textContent = plantNameInput.value;
  newRow.insertCell().textContent = waterRequirement;
  newRow.insertCell().textContent = sunRequirement;
  newRow.insertCell().textContent = plantDescriptionInput.value;
});
