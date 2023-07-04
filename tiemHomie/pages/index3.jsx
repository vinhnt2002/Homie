import React from 'react';

function MenuPage({ menuItem,products }) {
  // Render the menu item data or perform any desired operations
  console.log(menuItem);
    console.log(products);
  return (
    <div>
      <h1>Menu Item Page</h1>
      {/* Render the menu item data */}
      {menuItem ? (
        <div>
          <h3>{menuItem.code}</h3>
          {/* Render other menu item fields as needed */}
        </div>
      ) : (
        <div>Menu not found</div>
      )}
    </div>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.query; // Retrieve the ID parameter from the query object

  const response = await fetch(`http://localhost:3000/api/menu/64941f1bd527564bca3baa0b`); // Replace with your API route URL
  const menuItem = await response.json();

  const products = menuItem.products;

  return {
    props: { menuItem ,products},
  };
}

export default MenuPage;
