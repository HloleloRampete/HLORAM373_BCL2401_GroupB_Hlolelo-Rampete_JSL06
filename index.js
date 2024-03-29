//Menu object containing categories and their respective items 
const menu = { 
    Starters: ['Garlic Bread', 'Bruschetta'], 
    MainCourses: ['Margherita Pizza', 'Spaghetti Carbonara', 'Steak and Fries'], 
    Desserts: ['Tiramisu', 'Cheesecake', 'Malva Pudding'] 
  }; 
  
  //Function to display menu items dynamically on the webpage
  function displayMenuItems(menu) { 
    const menuContainer = document.getElementById('menu');
    
    