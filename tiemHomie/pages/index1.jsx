import React from 'react';

function MenuPage({ menu }) {
  // Render the menu data or perform any desired operations
  console.log(menu);

  return (
    <div>
      <h1>Menu Page</h1>
      {/* Render the menu data */}
      {menu.map(menuItem => (
        <div key={menuItem._id}>
          <h3>{menuItem.code}</h3>
          {/* Render other menu item fields as needed */}
        </div>
      ))}
    </div>
  );
}

export async function getServerSideProps() {
  const response = await fetch('http://localhost:3000/api/menu'); // Replace with your API route URL
  const menu = await response.json();

  return {
    props: { menu },
  };
}

export default MenuPage;
