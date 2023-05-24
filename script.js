var houses = [];

function getHouses() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://api.zillow.com/v3/homes/list/?city=Dallas&state=TX&maxPrice=300000&rentzestimate=true&limit=100&sort=price:asc");
  xhr.onload = function() {
    if (xhr.status === 200) {
      var housesData = JSON.parse(xhr.responseText);
      housesData.results.forEach(function(house) {
        houses.push(house);
      });
      updateHouses();
    }
  };
  xhr.send();
}

function updateHouses() {
  var housesList = document.getElementById("houses");
  housesList.innerHTML = "";
  houses.forEach(function(house) {
    var houseLi = document.createElement("li");
    var houseH2 = document.createElement("h2");
    houseH2.textContent = house.address;
    houseLi.appendChild(houseH2);
    var houseP = document.createElement("p");
    houseP.textContent = house.price + "\$";
    houseLi.appendChild(houseP);
    housesList.appendChild(houseLi);
  });
}

window.onload = function() {
  getHouses();
  setInterval(getHouses, 3600000); // Update houses every hour
};
