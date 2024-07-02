import config from "../conf/index.js";

async function init() {
  //Fetches list of all cities along with their images and description

  //Updates the DOM with the cities
  if (adventures) {
    adventures.forEach((key) => {
      addCityToDOM(key);
    });
  }
}

//Implementation to extract city from query params
function getCityFromURL(search) {
  let arr = search.split("=");
  console.log(arr[1]);
  return arr[1];
  // TODO: MODULE_ADVENTURES
  // 1. Extract the city id from the URL's Query Param and return it
}

//Implementation of fetch call with a paramterized input based on city
async function fetchAdventures(city) {
  config.backendEndpoint = `${config.backendEndpoint}adventures?city=${city}`;
  try {
    let response = await fetch(config.backendEndpoint);
    if (!response.ok) {
      throw new Error("Server is down");
    }
    let adventures = await response.json();
    console.log(adventures);
    return adventures;
  } catch (error) {
    console.error("Error: ", error.message);
    return null;
  }
  // TODO: MODULE_ADVENTURES
  // 1. Fetch adventures using the Backend API and return the data
}

//Implementation of DOM manipulation to add adventures for the given city from list of adventures
function addAdventureToDOM(adventures) {
  // TODO: MODULE_ADVENTURES
  // 1. Populate the Adventure Cards and insert those details into the DOM

  if (adventures) {
    adventures.forEach((adventure) => {
      let row = document.getElementById("data");
      let col = document.createElement("div");
      col.className = "col-lg-3 col-sm-6 col-6 mb-4";
      col.innerHTML = `
      <a href="detail/?adventure=${adventure.id}" id="${adventure.id}">
      <div class="activity-card">
        <p class="category-banner">${adventure.category}</p>
        <img src="${adventure.image}" class="card-img-top" alt="">
        
          <div class="activity-card-text">
          <h5>${adventure.name}</h5>
          <p>${adventure.currency} ${adventure.costPerHead}</p>
          </div>
          <div class="activity-card-text">
          <h5>Duration</h5>
          <p>${adventure.duration} Hours</p>
          </div>
      </div>
    </a>
`;
      row.appendChild(col);
    });
  }


}

//Implementation of filtering by duration which takes in a list of adventures, the lower bound and upper bound of duration and returns a filtered list of adventures.
function filterByDuration(list, low, high) {
  // TODO: MODULE_FILTERS
  // 1. Filter adventures based on Duration and return filtered list
}

//Implementation of filtering by category which takes in a list of adventures, list of categories to be filtered upon and returns a filtered list of adventures.
function filterByCategory(list, categoryList) {
  // TODO: MODULE_FILTERS
  // 1. Filter adventures based on their Category and return filtered list
}

// filters object looks like this filters = { duration: "", category: [] };

//Implementation of combined filter function that covers the following cases :
// 1. Filter by duration only
// 2. Filter by category only
// 3. Filter by duration and category together

function filterFunction(list, filters) {
  // TODO: MODULE_FILTERS
  // 1. Handle the 3 cases detailed in the comments above and return the filtered list of adventures
  // 2. Depending on which filters are needed, invoke the filterByDuration() and/or filterByCategory() methods

  // Place holder for functionality to work in the Stubs
  return list;
}

//Implementation of localStorage API to save filters to local storage. This should get called everytime an onChange() happens in either of filter dropdowns
function saveFiltersToLocalStorage(filters) {
  // TODO: MODULE_FILTERS
  // 1. Store the filters as a String to localStorage

  return true;
}

//Implementation of localStorage API to get filters from local storage. This should get called whenever the DOM is loaded.
function getFiltersFromLocalStorage() {
  // TODO: MODULE_FILTERS
  // 1. Get the filters from localStorage and return String read as an object

  // Place holder for functionality to work in the Stubs
  return null;
}

//Implementation of DOM manipulation to add the following filters to DOM :
// 1. Update duration filter with correct value
// 2. Update the category pills on the DOM

function generateFilterPillsAndUpdateDOM(filters) {
  // TODO: MODULE_FILTERS
  // 1. Use the filters given as input, update the Duration Filter value and Generate Category Pills
}
export {
  getCityFromURL,
  fetchAdventures,
  addAdventureToDOM,
  filterByDuration,
  filterByCategory,
  filterFunction,
  saveFiltersToLocalStorage,
  getFiltersFromLocalStorage,
  generateFilterPillsAndUpdateDOM,
};
