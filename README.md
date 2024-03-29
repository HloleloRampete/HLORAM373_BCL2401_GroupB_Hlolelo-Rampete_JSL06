# CodeCuisine Menu Display System Challenge

Welcome to Faith Rampete's Fine Dining Restaurant! This repository contains a JavaScript solution for displaying a dynamic menu on the restaurant's website and managing customer orders. Let's explore how the code works and how it can enhance the dining experience at our restaurant.

## Overview
The menu code allows us to showcase our restaurant's offerings in various categories such as Starters, Main Courses, and Desserts. Customers can view the menu items and easily add them to their order. Additionally, the code includes a feature to remove items from the order list by double-clicking.

### How the Code Works
1. ***Menu Object:*** The menu object contains categories as keys and arrays of respective items as values.
2. ***Displaying Menu Items:*** The displayMenuItems(menu) function dynamically generates HTML elements to display the menu items on the webpage. It iterates over each category and its items, creating appropriate HTML elements for each.
3. ***Adding Items to Order:*** When a customer clicks on a menu item, the addToOrder(itemName) function is triggered. It adds the selected item to the order list and updates the total order amount.
4. ***Removing Items from Order:*** The code now includes functionality to remove items from the order list. Customers can double-click on an item in the order list to remove it. This feature enhances the user experience by providing a convenient way to modify orders.

### Methods/Functions Used
1. ***getElementById('menu')***: Retrieves the menu container element.
2. ***Object.entries(menu)***: Converts the menu object into an array of key-value pairs.
3. ***document.createElement('elementName')***: Creates new HTML elements.
4. ***element.textContent = value***: Sets the text content of HTML elements.
5. ***element.appendChild(childElement)***: Appends child elements to parent elements.
6. ***forEach(callback)***: Iterates over elements in an array.
7. ***addEventListener(event, callback)***: Adds event listeners to HTML elements.
8. ***parseFloat(string)***: Parses strings into floating-point numbers.
9. ***toFixed(decimalPlaces)***: Formats numbers to a fixed number of decimal places.
10. ***initMenuSystem()***: Function call to initialize the menu system.

## Additional Features
To remove items from the order list by double-clicking, add the following code:

// Function to remove item from order list
function removeFromOrder(item) {
    item.remove(); // Removes the item element from the DOM
    const currentTotal = parseFloat(orderTotalElem.textContent);
    const itemPrice = 90; // Assuming R90 per item
    const newTotal = (currentTotal - itemPrice).toFixed(2);
    orderTotalElem.textContent = newTotal;
}

// Event listener to remove item from order list on double click
orderItemsList.addEventListener('dblclick', (event) => {
    if (event.target.tagName === 'LI') {
        removeFromOrder(event.target);
    }
});
This code adds an event listener to the order items list. When a customer double-clicks on an item (<li> element), it triggers the removeFromOrder function, which removes the item from the order list and updates the total order amount accordingly.

### What I Learned
**Through accomplishing this task, I learned:**

1. How to dynamically generate and manipulate HTML elements using JavaScript.
2. Techniques for iterating over objects and arrays to perform specific actions.
3. Event handling in JavaScript, such as adding click and double-click event listeners.
4. Parsing and formatting numerical data for calculations and display.
5. The importance of user experience and how to implement features to enhance it, like removing items from the order list.
