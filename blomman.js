// väntar tills hela dokumentet har laddats 
document.addEventListener("DOMContentLoaded", () => {
  const userFrom = document.getElementById("formPlantis");
  
  // en händelselyssnare som hämtar inputen
  userFrom.addEventListener("submit", async (event) => {
      event.preventDefault();
      
      let plant = document.getElementById("plant");
      let water = document.getElementById("water");
      let sun = document.getElementById("sun");
      let description = document.getElementById("description");

      
      let newUser = {
          plant: plant.value,
          water: water.value,
          sun: sun.value,
          description: description.value 
      };
      
      // hämtar data
      let response = await fetch("data.json");
      let data = await response.json();
      data.push(newUser);
      
      // skickar datan till servern
      await fetch('index', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });
        
  })
});

// funktion som hämtar data och skriver ut det som en tabell
async function getDataFromJSON() {
  let jsonPath = await fetch ("data.json");

  let jsonObject = await jsonPath.json();
  let output = "<table><tr><th>plant</th><th>water</th><th>sun</th><th>description</th>";
  
  for (var i=0; i<jsonObject.length; i++) {

      var counter = jsonObject[i];
      output += `<tr>`;
      output += `<td>${counter.plant}</td>`;
      output += `<td>${counter.water}</td>`;
      output += `<td>${counter.sun}</td>`;
      output += `<td>${counter.description}</td>`;
      output += `</tr>`;
  }
  output += "</table>"

  document.getElementById("getData").innerHTML = output;
};