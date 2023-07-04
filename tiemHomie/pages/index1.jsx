import React from 'react';

function index1({ menu }) {
  console.log(menu);

  return (
    <div>
      <h1>Menu Page</h1>
      {menu && (
        <div>
          <h3>{menu.code}</h3>
          {menu.collections.map((coll) => (
            <div>{coll.code}</div>
          ))}
          {/* Render other menu item fields as needed */}
        </div>
      )}
    </div>
  );
}

export async function getServerSideProps() {
  const response = await fetch('http://localhost:3000/api/menu');
  const data = await response.json();
  const menu = data[0];

  return {
    props: { menu },
  };
}

export default index1;
