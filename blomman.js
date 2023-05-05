// Hämta referenser till elementen
const plantNameInput = document.getElementById('plant-name');
const waterRequirementInput = document.getElementsByName('water-requirement');
const sunRequirementInput = document.getElementsByName('sun-requirement');
const plantDescriptionInput = document.getElementById('plant-description');
const plantTableBody = document.querySelector('#plant-table tbody');

// Lägg till en eventlyssnare på formulärets submit-event
document.querySelector('form').addEventListener('submit', (event) => {
  // Hindrar formuläret från att skickas vidare och ladda om sidan
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

  // gör en ny rad i tabellen med värdet från textfälten och radioknapparna
  const newRow = plantTableBody.insertRow();
  newRow.insertCell().textContent = plantNameInput.value;
  newRow.insertCell().textContent = waterRequirement;
  newRow.insertCell().textContent = sunRequirement;
  newRow.insertCell().textContent = plantDescriptionInput.value;
});


const form = document.querySelector('form');

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const formData = new FormData(form);

  const jsonData = JSON.stringify({
    plantName: formData.get('plant-name'),
    waterRequirement: formData.get('water-requirement'),
    sunRequirement: formData.get('sun-requirement'),
    plantDescription: formData.get('plant-description'),
  });

  try {
    const response = await fetch('http://localhost:3000', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: jsonData
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    console.log(data);
    form.reset();
  } catch (error) {
    console.error('There was an error:', error);
  }
});
