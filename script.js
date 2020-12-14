// Write your JavaScript code here!
function init() {
   let form = document.getElementById("formSubmit");
   form.onclick = main;
}

function main() {
   validateForm();
}

function validateForm() {
   pilotName = document.getElementById("pilotName");
   copilotName = document.getElementById("copilotName");
   fuelLevel = document.getElementById("fuelLevel");
   cargoMass = document.getElementById("cargoMass");
      
   if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "") {
      alert("All fields are required!");    
   } else if (!isNaN(pilotName.value) || !isNaN(copilotName.value) || isNaN(fuelLevel.value) || isNaN(cargoMass.value)) {
      alert("Please enter valid input.");
   } else {
      document.getElementById("pilotStatus").innerHTML = `Pilot ${pilotName.value} is ready for launch.`;
      document.getElementById("copilotStatus").innerHTML = `Copilot ${copilotName.value} is ready for launch.`;
      document.getElementById("faultyItems").style.visibility = "visible";
   }

   if (fuelLevel.value < 10000) {
      document.getElementById("fuelStatus").innerHTML = "Fuel levels are too low for launch.";
      document.getElementById("launchStatus").innerHTML = `<span style='color: red;'> Shuttle is not ready for launch! </span>`
   } else if (cargoMass.value > 10000) {
      document.getElementById("cargoStatus").innerHTML = "Cargo mass is too heavy for launch.";
      document.getElementById("launchStatus").innerHTML = `<span style='color: red;'> Shuttle is not ready for launch! </span>`
   } else {
      document.getElementById("fuelStatus").innerHTML = "Fuel levels are go for launch.";
      document.getElementById("cargoStatus").innerHTML = "Cargo mass is go for launch.";
      document.getElementById("launchStatus").innerHTML = `<span style='color: green;'> Shuttle is go for launch! </span>`
   }
}

window.addEventListener("load", function() {
   fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
      response.json().then( function(json) {
         const div = document.getElementById("missionTarget");
         div.innerHTML = `
         <h2>Mission Destination</h2>
         <ol>
            <li>Name: ${json[0].name}</li>
            <li>Diameter: ${json[0].diameter}</li>
            <li>Star: ${json[0].star}</li>
            <li>Distance from Earth: ${json[0].distance}</li>
            <li>Number of Moons: ${json[0].moons}</li>
         </ol>
         <img src="${json[0].image}">
         `
      });
   });
});

window.onload = init;


/*This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
