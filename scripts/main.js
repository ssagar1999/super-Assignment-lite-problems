import { card } from "../components/card.js";
import { tableRow } from "../components/table.js";
import { referenceList } from "../data/reference.js";
import { renderToDom } from "../utils/renderToDom.js";

// Reusable function to get the cards on the DOM
// .forEach()
const renderCards = (array) => {
  let refStuff = "<h1 class='text-white'>Cards Go Here!</h1>";
  renderToDom("#cards", refStuff);
}

// UPDATE/ADD ITEMS TO CART
// .findIndex() & (.includes() - string method)
const toggleCart = (event) => {
  if (event.target.id.includes("fav-btn")) {
   console.log('Clicked Fav btn')
  }
}

// SEARCH
// .filter()
const search = (event) => {
  const eventLC = event.target.value.toLowerCase();
  console.log(eventLC)
}

// BUTTON FILTER
// .filter() & .reduce() &.sort() - chaining
const buttonFilter = (event) => {
  if(event.target.id.includes('free')) {
    console.log('FREE')
  }
  if(event.target.id.includes('cartFilter')) {
    console.log('cartFilter')
  }
  if(event.target.id.includes('books')) {
    console.log('books!')
  }
  if(event.target.id.includes('clearFilter')) {
    console.log('clearFilter')
  }
  if(event.target.id.includes('productList')) {
    let table = `<table class="table table-dark table-striped" style="width: 600px">
    <thead>
      <tr>
        <th scope="col">Title</th>
        <th scope="col">Type</th>
        <th scope="col">Price</th>
      </tr>
    </thead>
    <tbody>
    `;
    
    productList().forEach(item => {
      table += tableRow(item);
    });

    table += `</tbody></table>`

    renderToDom('#cards', table);
  }
  
}

// CALCULATE CART TOTAL
// .reduce() & .some()
const cartTotal = () => {
  const total = 0
  document.querySelector("#cartTotal").innerHTML = total.toFixed(2);
}

// RESHAPE DATA TO RENDER TO DOM
// .map()
const productList = () => {
  return [{ title: "SAMPLE TITLE", price: 45.00, type: "SAMPLE TYPE" }]
}


const startApp = () => {
  // PUT ALL CARDS ON THE DOM
  renderCards(referenceList)

  // PUT CART TOTAL ON DOM
  cartTotal();

  // SELECT THE CARD DIV
  document.querySelector('#cards').addEventListener('click', toggleCart);

  // SELECT THE SEARCH INPUT
  document.querySelector('#searchInput').addEventListener('keyup', search)

  // SELECT BUTTON ROW DIV
  document.querySelector('#btnRow').addEventListener('click', buttonFilter);
}
startApp();

// Imports:

// card, tableRow, referenceList, renderToDom: Importing necessary modules and data.
// renderCards Function:

// Purpose: To render a list of cards to the DOM.
// Method: Currently sets a placeholder HTML string, meant to iterate over array and create cards.
// toggleCart Function:

// Purpose: To handle adding/removing items to/from the cart when a button is clicked.
// Method: Checks if the clicked element's ID includes "fav-btn" and logs a message.
// search Function:

// Purpose: To handle search input and filter items accordingly.
// Method: Converts the search input to lowercase and logs it (intended to filter items).
// buttonFilter Function:

// Purpose: To handle various filter button clicks and filter/sort items accordingly.
// Method: Logs different messages or renders a table based on the button clicked.
// cartTotal Function:

// Purpose: To calculate and display the total price of items in the cart.
// Method: Sets the cart total to 0 and updates the DOM (needs implementation to sum cart items).
// productList Function:

// Purpose: To return a list of products for rendering.
// Method: Returns a sample product list (intended to be replaced with actual data).
// startApp Function:

// Purpose: Initializes the application by setting up event listeners and rendering initial data.
// Method: Renders cards, sets the cart total, and adds event listeners to the relevant elements.
