// Get references to the tbody element
var $tbody = document.querySelector("tbody");
var $searchBtn = document.querySelector("#search")

// reference to search filters
var $dateInput = document.querySelector("#date");
var $cityInput =  document.querySelector("#city");
var $stateInput =  document.querySelector("#state");
var $countryInput = document.querySelector("#country");
var $shapeInput = document.querySelector("#shape");

// Add an event listener to the searchButton, call handleSearchButtonClick when clicked at bottom of filter liest
$searchBtn.addEventListener("click", handleSearchButtonClick);

// Set filteredAddresses to addressData initially
var filteredData = dataSet;

// renderTable renders the filteredData to the tbody
function renderTable() {
 
  //input data
  $tbody.innerHTML = "";
  
  for (var i = 0; i < filteredData.length; i++) {
    // Get get the current address object and its fields
    var sighting = filteredData[i];
    var fields = Object.keys(sighting);
    // Create a new row in the tbody, set the index to be i + startingIndex
    var $row = $tbody.insertRow(i);
    for (var j = 0; j < fields.length; j++) {
      // For every field in the address object, create a new cell at set its inner text to be the current value at the current address's field
      var field = fields[j];
      var $cell = $row.insertCell(j);
      $cell.innerText = sighting[field];
    }
  }
}


function handleSearchButtonClick() {
  // prevent page from refreshing
  event.preventDefault();
  
  // //input data
  var inputDate = $dateInput.value.trim();
  var inputCity = $cityInput.value.trim().toLowerCase();
  var inputState = $stateInput.value.trim().toLowerCase();
  var inputCountry = $countryInput.value.trim().toLowerCase();
  var inputShape = $shapeInput.value.trim().toLowerCase();

  // // filter data // Format the user's search by removing leading and trailing whitespace, lowercase the string
 
  var filteredDateTime = sighting.datetime;
  var filteredCity = sighting.city;
  var filteredState = sighting.state;
  var filteredCountry = sighting.country;
  var filteredShape = sighting.shape;

  
  filteredData = dataSet.filter(function(sighting) {
    return filteredDateTime === inputDate;
    return filteredCity ===inputCity;
    return filteredState ===inputState;
    return filteredCountry === inputCountry;
    return filteredShape ===inputShape;
  });
};

renderTable();  
  





