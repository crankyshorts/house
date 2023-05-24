// Get the houses available for sale in Dallas/Fort Worth under $300k.
function getHouses() {
  // Make an API request to Zillow.
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://www.zillow.com/homes/for_sale/Dallas-TX_rb/300000_price/");
  xhr.onload = function() {
    // Parse the JSON response.
    var houses = JSON.parse(xhr.responseText);

    // Loop through the houses and create a new HTML element for each one.
    for (var i = 0; i < houses.length; i++) {
      var house = houses[i];

      // Create a new `.house` element.
      var houseElement = document.createElement("div");
      houseElement.className = "house";

      // Add the house's image to the element.
      var imageElement = document.createElement("img");
      imageElement.src = house.photo;
      houseElement.appendChild(imageElement);

      // Add the house's title to the element.
      var titleElement = document.createElement("h2");
      titleElement.textContent = house.title;
      houseElement.appendChild(titleElement);

      // Add the house's price to the element.
      var priceElement = document.createElement("p");
      priceElement.textContent = house.price;
      houseElement.appendChild(priceElement);

      // Add the house's address to the element.
      var addressElement = document.createElement("p");
      addressElement.textContent = house.address;
      houseElement.appendChild(addressElement);

      // Append the house element to the `#houses` div.
      $("#houses").append(houseElement);
    }
  };
  xhr.send();
}

// Set up the interval to get hourly updates.
setInterval(getHouses, 3600000);
