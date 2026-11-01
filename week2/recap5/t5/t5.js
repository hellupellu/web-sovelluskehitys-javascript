const apiURL = 'https://media2.edu.metropolia.fi/restaurant/api/v1/';

//
/**
 * ASYNKRONINEN fetch-funktio (vain GET)
 * TODO: lisää http, headerit parametreihin muiden metodien käyttöä varten
 * @param {string} url - Url address of the api resource
 * @returns {Promise} - json data of the response
 */
const fetchData = async (url) => {
  let response;
  try {
    response = await fetch(apiURL + url);
    if (!response.ok) {
      throw new Error('response not ok!');
    }
  } catch (error) {
    throw new Error('fetchData error: ', error.message);
  }
  const data = await response.json();
  console.log(data);
  return data;
};

// get ref to dialog
const dialogElem = document.querySelector('dialog');
// close modal when it gets clicked
dialogElem.addEventListener('click', () => {
  dialogElem.close();
});

// Create DOM elements for daily menu
const renderDailyMenu = (courses) => {
  // create menu container element
  const menuElem = document.createElement('div');

  // When no menu are available, show message
  const heading = document.createElement('h4');
  heading.textContent = 'Daily menu';
  menuElem.append(heading);
  if (courses.length === 0) {
    const p = document.createElement('p');
    p.textContent = 'No menu available today.';
    menuElem.append(p);
    return menuElem;
  }

  const ul = document.createElement('ul');
  menuElem.append(ul);
  for (const course of courses) {
    const li = document.createElement('li');
    li.textContent = `${course.name} - ${course.price} €, ${course.diets}`;
    // TODO: lisää hinta ja erityisruokavalioiden detaljit domiin
    ul.append(li);
  }
  return menuElem;
};

// Create list of restaurants and add it to DOM
const renderRestaurantData = (restaurants) => {
  // get reference to the first table element in html dom
  const tableElem = document.querySelector('table');
  // loop through all restaurants in the array
  for (const restaurant of restaurants) {
    // Create dom elements for each restaurant
    const tableRow = document.createElement('tr');
    const nameCell = document.createElement('td');
    const addressCell = document.createElement('td');
    // build dom
    tableElem.append(tableRow);
    tableRow.append(nameCell);
    tableRow.append(addressCell);
    // add content to table
    nameCell.textContent = restaurant.name;
    addressCell.textContent = restaurant.address;
    // add event handler and content for restaurant chosen
    tableRow.addEventListener('click', async () => {
      // reset dialog element
      dialogElem.innerHTML = '';
      // get daily menu¨
      try {
        const coursesData = await fetchData(
          '/restaurants/daily/' + restaurant._id + '/en'
        );
        const menu = renderDailyMenu(coursesData.courses);

        // add new content
        const title = document.createElement('h3');
        title.textContent = restaurant.name;
        const details = document.createElement('p');
        title.textContent = restaurant.name;
        details.textContent = `${restaurant.address}, ${restaurant.postalCode} ${restaurant.city}`;
        dialogElem.append(title);
        dialogElem.append(details);
        dialogElem.append(menu);
        dialogElem.showModal();
      } catch (error) {
        dialogElem.textContent = 'Menu loading error: ' + error.message;
        dialogElem.showModal();
      }
    });
  }
};

// "main function" in this app
const updateRestaurants = async () => {
  try {
    const restaurants = await fetchData('/restaurants');
    renderRestaurantData(restaurants);
  } catch (error) {
    dialogElem.textContent = 'Api connection error: ' + error.message;
    dialogElem.showModal();
  }
};

// app starts here
updateRestaurants();
