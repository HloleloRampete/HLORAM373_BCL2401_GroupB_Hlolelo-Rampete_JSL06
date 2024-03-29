//Menu object containing categories and their respective items
/* The menu object contains categories  as keys, 
and their respective items stored as arrays.*/ 
const menu = { 
    Starters: ['Garlic Bread', 'Bruschetta'], 
    MainCourses: ['Margherita Pizza', 'Spaghetti Carbonara', 'Steak and Fries'], 
    Desserts: ['Tiramisu', 'Cheesecake', 'Malva Pudding'] 
  }; 
  
  //Function to display menu items dynamically on the webpage
  function displayMenuItems(menu) { 
    const menuContainer = document.getElementById('menu');
    
    //Loop through each  category and its items in the menu object
    for (const [category, items] of Object.entries(menu)) { 
      const categoryElement = document.createElement('h3'); 
      categoryElement.textContent = category; 
      menuContainer.appendChild(categoryElement); 
      const listElement = document.createElement('ul');
      
      //Loop through items in the category
      items.forEach(item => { 
        const listItem = document.createElement('li'); 
        listItem.textContent = item; 
  
        //Add click event listener to each item to trigger addToOrder function
        listItem.addEventListener('click', () => addToOrder(item)); 
        listElement.appendChild(listItem); 
      }); 
      menuContainer.appendChild(listElement); 
    } 
  } 
  
  //Function to add an item to the order list
  function addToOrder(itemName) { 
    const orderItemsList = document.getElementById('order-items'); 
    const orderTotalElem = document.getElementById('order-total'); 
    const orderItem = document.createElement('li'); 
    orderItem.textContent = itemName; 
    orderItemsList.appendChild(orderItem); 
    const currentTotal = parseFloat(orderTotalElem.textContent); 
    const itemPrice = 90; // Customizing the item price (assumed R90 per item) 
    const newTotal = (currentTotal + itemPrice).toFixed(2); 
    orderTotalElem.textContent = newTotal; 
  } 
  
  //Function to initialise the menu system
  function initMenuSystem() { 
    displayMenuItems(menu); 
  } 
  
  initMenuSystem();


// Methods/Functions Used:

// getElementById('menu'): Retrieves the container element where the menu will be displayed.
// Object.entries(menu): Converts the menu object into an array of its key-value pairs for iteration.
// document.createElement('elementName'): Creates a new HTML element.
// element.textContent = value: Sets the text content of an HTML element.
// element.appendChild(childElement): Appends a child element to a parent element.
// forEach(callback): Iterates over each element in an array and executes a callback function.
// addEventListener(event, callback): Adds an event listener to an HTML element.
// parseFloat(string): Parses a string argument and returns a floating-point number.
// toFixed(decimalPlaces): Formats a number using fixed-point notation and specifies the number of decimal places.
// initMenuSystem(): Function call to initialize the menu system when the page loads.
