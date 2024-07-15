import config from "../conf/index.js";


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
  let url = `${config.backendEndpoint}adventures?city=${city}`;
  try {
    let response = await fetch(url);
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
      col.className = "col-lg-3 col-sm-6 col-12 mb-4";
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
  return list.filter(adventure => adventure.duration >= low && adventure.duration <= high);
}

//Implementation of filtering by category which takes in a list of adventures, list of categories to be filtered upon and returns a filtered list of adventures.
function filterByCategory(list, categoryList) {
  if (categoryList.length == 0) {
    return list;
  }
  return list.filter(adventure => categoryList.includes(adventure.category));
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
  let filteredList = list;
  if (filters.duration) {
    const [low, high] = filters.duration.split("-").map(Number);
    filteredList = filterByDuration(filteredList, low, high);
  }
  if (filters.category.length > 0) {
    filteredList = filterByCategory(filteredList, filters.category);
  }

  // Place holder for functionality to work in the Stubs
  return filteredList;
}

//Implementation of localStorage API to save filters to local storage. This should get called everytime an onChange() happens in either of filter dropdowns
function saveFiltersToLocalStorage(filters) {
  // TODO: MODULE_FILTERS
  // 1. Store the filters as a String to localStorage
  const filtersString = JSON.stringify(filters);
  localStorage.setItem("filters", filtersString);

  return true;
}

//Implementation of localStorage API to get filters from local storage. This should get called whenever the DOM is loaded.
function getFiltersFromLocalStorage() {
  // TODO: MODULE_FILTERS
  // 1. Get the filters from localStorage and return String read as an object
  const filtersString = localStorage.getItem("filters");
  if (filtersString == null) {
    return null;
  }
  const filters = JSON.parse(filtersString);

  // Place holder for functionality to work in the Stubs
  return filters;
}

//Implementation of DOM manipulation to add the following filters to DOM :
// 1. Update duration filter with correct value
// 2. Update the category pills on the DOM

function generateFilterPillsAndUpdateDOM(filters) {
  // TODO: MODULE_FILTERS
  // 1. Use the filters given as input, update the Duration Filter value and Generate Category Pills

  if (filters.category.length > 0) {
    filters.category.forEach((category) => {
      let pill = document.createElement("span");
      let list = document.getElementById("category-list");
      pill.className = "category-filter";
      pill.innerHTML = `${category}`;
      list.appendChild(pill);
    })
  }

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
