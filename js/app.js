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
          ptName.innerHTML = x.name;
          getContainer.appendChild(ptName);
        }
      });
    });
    planetReq.open("GET", "https://swapi.co/api/planets");
    planetReq.send();
  }
};

getButton.addEventListener("click", displayHTML);
