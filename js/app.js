// const request = (url, callback) => {
//   const xhr = new XMLHttpRequest();
//   xhr.addEventListener("load", function(data) {
//     const resData = JSON.parse(this.responseText);
//     callback(resData);
//   });
//   xhr.open("GET", url);
//   xhr.send();
// };

const getContainer = document.getElementById("contentContainer");
const getButton = document.getElementById("requestResourceButton");

const displayHTML = () => {
  const getDropDownValue = document.getElementById("resourceType").value;
  const getResource = document.getElementById("resourceId").value;
  while (getContainer.firstChild) {
    getContainer.removeChild(getContainer.firstChild);
  }
  if (getDropDownValue === "people") {
    const peopleReq = new XMLHttpRequest();
    peopleReq.addEventListener("load", function() {
      const peopleData = JSON.parse(this.responseText).results;
      console.log(peopleData);
      peopleData.forEach(x => {
        if (x.name === getResource) {
          const pName = document.createElement("h2");
          pName.innerHTML = x.name;
          const pGender = document.createElement("p");
          pGender.innerHTML = x.gender;
          getContainer.appendChild(pName);
          getContainer.appendChild(pGender);
          const speciesReq = new XMLHttpRequest();
          speciesReq.addEventListener("load", function() {
            const pSpecies = JSON.parse(this.responseText).name;
            const pSpeciesDom = document.createElement("p");
            pSpeciesDom.innerHTML = pSpecies;
            getContainer.appendChild(pSpeciesDom);
          });
          speciesReq.open("GET", x.species);
          speciesReq.send();
        }
      });
    });
    peopleReq.open("GET", "https://swapi.co/api/people");
    peopleReq.send();
  } else if (getDropDownValue === "planets") {
    const planetReq = new XMLHttpRequest();
    planetReq.addEventListener("load", function() {
      const planetData = JSON.parse(this.responseText).results;
      console.log(planetData);
      planetData.forEach(x => {
        if (x.name === getResource) {
          const ptName = document.createElement("h2");
          ptName.innerHTML = "Plant Name: " + x.name;
          getContainer.appendChild(ptName);
          const ptTerr = document.createElement("p");
          ptTerr.innerHTML = "Terrain: " + x.terrain;
          getContainer.appendChild(ptTerr);
          const ptPop = document.createElement("p");
          ptPop.innerHTML = "Population: " + x.population;
          getContainer.appendChild(ptPop);
        }
      });
    });
    planetReq.open("GET", "https://swapi.co/api/planets");
    planetReq.send();
  } else if (getDropDownValue === "starships") {
    const starShipReq = new XMLHttpRequest();
    starShipReq.addEventListener("load", function() {
      const starShipData = JSON.parse(this.responseText).results;
      console.log(starShipData);
      starShipData.forEach(x => {
        if (x.name === getResource) {
          const shipName = document.createElement("h2");
          shipName.innerHTML = "Starship Name: " + x.name;
          getContainer.appendChild(shipName);
          const manufac = document.createElement("p");
          manufac.innerHTML = "Manufacturer: " + x.manufacturer;
          getContainer.appendChild(manufac);
          const starClass = document.createElement("p");
          starClass.innerHTML = "Starship Class: " + x.starship_class;
          getContainer.appendChild(starClass);
          console.log(x.films);
          x.films.forEach(x => {
            const starFilm = new XMLHttpRequest();
          });
          //   const ulFilm = document.createElement('ul');
          //   starShipData.forEach(x => {
          //       const shpfilmNames = new XMLHttpRequest();
          //       shpfilmNames.addEventListener('load', function(){

          //       })
          //       shpfilmNames.open('GET', starShipData.film)
          //   })
        }
      });
    });
    starShipReq.open("GET", "https://swapi.co/api/starships");
    starShipReq.send();
  }
};
getButton.addEventListener("click", displayHTML);
